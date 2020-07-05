var SIZE = 24;
var TILE_EMPTY = 1;
var TILE_WALL = 0;
var TILE_VISIBLE = 1;
var TILE_NOT_VISIBLE = 0;
var TILE_VISITED = 1;
var TILE_NOT_VISITED = 0;
function shuffle(array) {
    array.sort(function () { return Math.random() - 0.5; });
}
function print_maze(grid) {
    for (var _i = 0, grid_1 = grid; _i < grid_1.length; _i++) {
        var row = grid_1[_i];
        var string_row = "";
        var tile = void 0;
        for (var _a = 0, row_1 = row; _a < row_1.length; _a++) {
            var elem = row_1[_a];
            if (elem == TILE_EMPTY) {
                tile = " ";
            }
            else {
                tile = "█";
            }
            string_row = string_row.concat(tile);
        }
        console.log(string_row);
    }
}
function create_grid_with_cells(width, height, default_val) {
    var grid = [];
    for (var i = 0; i < height; i++) {
        var row = [];
        for (var j = 0; j < width; j++) {
            row.push(default_val);
        }
        grid.push(row);
    }
    return grid;
}
function get_frontier_for_cell(maze, coord) {
    var x = coord[0];
    var y = coord[1];
    var new_frontier = [];
    if (x > 1) {
        if (maze[x - 1][y] == TILE_WALL) {
            new_frontier.push([x - 1, y]);
        }
    }
    if (x < SIZE - 2) {
        if (maze[x + 1][y] == TILE_WALL) {
            new_frontier.push([x + 1, y]);
        }
    }
    if (y > 1) {
        if (maze[x][y - 1] == TILE_WALL) {
            new_frontier.push([x, y - 1]);
        }
    }
    if (y < SIZE - 2) {
        if (maze[x][y + 1] == TILE_WALL) {
            new_frontier.push([x, y + 1]);
        }
    }
    return new_frontier;
}
function prune_frontier(maze, frontier) {
    var pruned_frontier = [];
    for (var _i = 0, frontier_1 = frontier; _i < frontier_1.length; _i++) {
        var f = frontier_1[_i];
        var x = f[0];
        var y = f[1];
        var num_walls = 0;
        if (x > 0 && maze[x - 1][y] == TILE_WALL) {
            num_walls += 1;
        }
        if (x < SIZE - 1 && maze[x + 1][y] == TILE_WALL) {
            num_walls += 1;
        }
        if (y > 0 && maze[x][y - 1] == TILE_WALL) {
            num_walls += 1;
        }
        if (x < SIZE - 1 && maze[x][y + 1] == TILE_WALL) {
            num_walls += 1;
        }
        if (num_walls >= 3) {
            pruned_frontier.push(f);
        }
    }
    return pruned_frontier;
}
function make_maze() {
    var grid = create_grid_with_cells(SIZE, SIZE, TILE_WALL);
    var visible = create_grid_with_cells(SIZE, SIZE, TILE_VISIBLE);
    var visited = create_grid_with_cells(SIZE, SIZE, TILE_NOT_VISITED);
    var start = [2 + Math.floor(Math.random() * SIZE - 3),
        2 + Math.floor(Math.random() * SIZE - 3)];
    grid[start[0]][start[1]] = TILE_EMPTY;
    var frontier = get_frontier_for_cell(grid, start);
    var end = [-1, -1];
    while (frontier.length > 0) {
        shuffle(frontier);
        var new_cell = frontier.pop();
        grid[new_cell[0]][new_cell[1]] = TILE_EMPTY;
        end = [new_cell[0], new_cell[1]];
        var new_frontier = get_frontier_for_cell(grid, new_cell);
        frontier = prune_frontier(grid, frontier.concat(new_frontier));
    }
    return [grid, start, visible, end, visited];
}
