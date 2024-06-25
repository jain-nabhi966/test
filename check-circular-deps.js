// check-circular-deps.js

const fs = require('fs');
const path = require('path');

function findCircularDependencies(startModule, visited = new Set(), pathStack = []) {
    const modulePath = require.resolve(startModule);
    if (visited.has(modulePath)) {
        pathStack.push(modulePath);
        return pathStack;
    }
    
    visited.add(modulePath);
    pathStack.push(modulePath);

    const moduleContent = fs.readFileSync(modulePath, 'utf8');
    const requireStatements = moduleContent.match(/require\(['"](.+?)['"]\)/g) || [];
    
    for (let statement of requireStatements) {
        const requiredModule = statement.match(/require\(['"](.+?)['"]\)/)[1];
        const requiredModulePath = require.resolve(path.join(path.dirname(modulePath), requiredModule));
        
        if (!visited.has(requiredModulePath)) {
            const cyclePath = findCircularDependencies(requiredModule, visited, pathStack.slice());
            if (cyclePath) return cyclePath;
        } else {
            const cycleIndex = pathStack.indexOf(requiredModulePath);
            if (cycleIndex !== -1) {
                return pathStack.slice(cycleIndex);
            }
        }
    }

    visited.delete(modulePath);
    pathStack.pop();
    return null;
}

// Example usage: Check circular dependencies starting from main.js
const circularPath = findCircularDependencies('./main.js');

if (circularPath) {
    console.error('Circular dependency found:');
    console.error(circularPath.join(' -> '));
    process.exit(1); // Exit with a non-zero code to indicate failure
} else {
    console.log('No circular dependencies found.');
    process.exit(0); // Exit with a zero code to indicate success
}
