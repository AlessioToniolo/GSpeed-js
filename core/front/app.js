
// SAMPLE INPUTS (GRID, GOAL)
// not actual FTC field sample square grid
const grid = [     
    [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0 ],
    [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0 ],
    [ 0,  0,  0,  1,  1,  0,  0,  0,  0,  0 ],
    [ 0,  0,  0,  1,  1,  1,  0,  0,  0,  0 ], 
    [ 0,  0,  1,  1,  1,  1,  1,  0,  0,  0 ],
    [ 0,  0,  0,  0,  1,  1,  0,  0,  0,  0 ],
    [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0 ],
    [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0 ],
    [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0 ], 
    [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0 ]  
];

// sets bottom right as goal
const goalA = [grid[9], grid[9][9]];




// A* Algorithim (only returns heuristic value)
function computeValue(graph, goal, cost) {
    const delta = [[-1, 0], [0, -1], [1, 0], [0, 1]];
    const deltaName = ['^', '<', 'v', '>'];
    let value = [];
    value = graph;
    value[0][0] = 99;
    let visited = [];
    let count = 0;
    let x = goalA[0];
    let y = goalA[1];
    let point = [count, y, x];
    visited.push(point);
    let allChecked = false;
    let index = 0;
    count = 1;
    let newPoint;
    let neighborList;
    while (!allChecked) {
        let currentPoint =  visited[index];
        index++;
        //populate neighbors
        neighborList = [];
        for (const move of delta) {
            newPoint = currentPoint + move;// move in direction from delta
            if (newPoint !== 1 && neighborList.includes(newPoint)) {
                neighborList.push(newPoint);
            }
        }
            // exit if all visited
        if (index > visited.length -1)  {
            allChecked = true;
        }
    }
    
    for (const iterator of neighborList) {
        let newX = x[iterator];
        let newY = y[iterator];
        let c = value[currentPoint] + 1;
        newPoint = [c, newY, newX];
        visited.push(newPoint);
        value[newY][newX] = c;
    }
    // old position of exit if finsihed (BUG_REFERENCE)

    for (const d of value) {
        for (const i of value[d]) {
            if (value[i][i] === 0) {
                value[i][i] = 99;
            }
        }
    }
    // for setting coordinate of goal to 0
    const goalInValue1stValue = goalA[0];
    const goalInValue2stValue = goalA[1];
    value[goalInValue1stValue][goalInValue2stValue] = 0;

    // returning for function
    return value;
}


// Algorithim for finding path based on A* heuristics
function computePath(heuristics) {

}

// FOR NODE.JS
/*
module.exports.computeValue = computeValue;
module.exports.computePath = computePath;
*/

console.log(computeValue(grid, goalA, 1));