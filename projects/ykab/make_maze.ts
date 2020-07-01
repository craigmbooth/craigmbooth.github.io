const SIZE: number = 24;

const TILE_EMPTY:number = 1;
const TILE_WALL:number = 0;

const TILE_VISIBLE:number = 1;
const TILE_NOT_VISIBLE:number = 0;

const TILE_VISITED: number = 1;
const TILE_NOT_VISITED: number = 0;

function shuffle(array: Array<Array<number>>): void {
  array.sort(() => Math.random() - 0.5);
}

function print_maze (grid: Array<Array<number>>): void {
    for (let row of grid) {
        let string_row: string = "";
        let tile: string;
        for (let elem of row) {
            if (elem == TILE_EMPTY) {
                tile = " ";
            } else {
                tile = "█";
            }
            string_row = string_row.concat(tile);
        }
        console.log(string_row);
    }
}


function create_grid_with_cells (width:number, height:number, default_val: number): number[][] {

    let grid: Array<Array<number>> = [];

    for(var i: number = 0; i < height; i++) {
        let row: Array<number> = []
        for(var j: number = 0; j< width; j++) {
            row.push(default_val);
        }
        grid.push(row);
    }
    return grid;
}


function get_frontier_for_cell (maze: Array<Array<number>>, coord: Array<number>): Array<Array<number>> {

    let x: number = coord[0];
    let y: number = coord[1];

    let new_frontier: Array<Array<number>> = [];

    if (x > 1) {
        if (maze[x-1][y] == TILE_WALL) {
            new_frontier.push([x-1, y]);
        }
    }

    if (x < SIZE-2) {
        if (maze[x+1][y] == TILE_WALL) {
            new_frontier.push([x+1, y])
        }
    }
    if (y > 1) {
        if (maze[x][y-1] == TILE_WALL) {
            new_frontier.push([x, y-1]);
        }
    }

    if (y < SIZE-2) {
        if (maze[x][y+1] == TILE_WALL) {
            new_frontier.push([x, y+1])
        }
    }

    return new_frontier

}



function prune_frontier(maze: Array<Array<number>>, frontier: Array<Array<number>>) {

    let pruned_frontier: Array<Array<number>> = []

    for (let f of frontier) {

        let x: number = f[0]
        let y: number = f[1]

        let num_walls: number = 0;

        if (x > 0 && maze[x-1][y] == TILE_WALL) {
            num_walls += 1
        }
        if (x < SIZE-1 && maze[x+1][y] == TILE_WALL) {
            num_walls += 1
        }
        if (y > 0 && maze[x][y-1] == TILE_WALL) {
            num_walls += 1
        }
        if (x < SIZE-1 && maze[x][y+1] == TILE_WALL) {
            num_walls += 1
        }

        if (num_walls >= 3) {
            pruned_frontier.push(f)
        }
    }

    return pruned_frontier
}


function make_maze(): Array<Array<Array<number>>|Array<number>> {
    let grid = create_grid_with_cells(SIZE, SIZE, TILE_WALL);
    let visible = create_grid_with_cells(SIZE, SIZE, TILE_VISIBLE);
    let visited = create_grid_with_cells(SIZE, SIZE, TILE_NOT_VISITED);

    let start: Array<number> = [2+Math.floor(Math.random() * SIZE-3),
                                2+Math.floor(Math.random() * SIZE-2)];

    grid[start[0]][start[1]] = TILE_EMPTY;
    let frontier: Array<Array<number>> = get_frontier_for_cell(grid, start);

    let end: Array<number> = [-1, -1];

    while (frontier.length > 0) {
        shuffle(frontier);
        let new_cell: Array<number> = frontier.pop();
        grid[new_cell[0]][new_cell[1]] = TILE_EMPTY;
        end = [new_cell[0], new_cell[1]];
        let new_frontier: Array<Array<number>> = get_frontier_for_cell(grid, new_cell);
        frontier = prune_frontier(grid, frontier.concat(new_frontier));

    }

    return [grid, start, visible, end, visited];
}
