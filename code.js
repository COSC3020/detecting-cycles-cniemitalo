function hasCycle(graph) {
    let visited = []; 
    let current = 0; 

    if (cycleExists(graph, current, visited)) {
        return true; 
    } else {
        return false; 
    }
}

function cycleExists(graph, current, visited) {
    //if we've already visited the node, return true 
    if (visited.includes(current)) {
        return true; 
    } 

    //mark that we visited the node 
    visited.push(current); 

    //iterate through its connecting nodes 
    //recursively test if they've already been visited 
    for (let i = 0; i < graph[current].length; i++) {
        let node = graph[current][i]; 

        if (cycleExists(graph, node, visited)) {
            return true; 
        }
    }

    return false; 
}
