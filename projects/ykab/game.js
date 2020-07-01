/*
  You Killed a Bear But Now You’re Dying From Blood Loss: The Game
*/

// Properties of the player object
let player = {
    x: 1,
    y: 22,
    blood_loss: 0
}

// Global state of the game
let map = {
    maze: [[]],     // 2d array of walls/gaps
    visible: [[]],  // 2d array of whether cells are visible
    visited: [[]],  // 2d array of whether cells are visited
    start: [],      // coords of the start of the maze
    end: []         //coords of the end of the maze
}

function create(game) {
    /* 
       Creates a new game by calling the `make_maze` function, which generates
       all the variables needed for the game state
    */
    result = make_maze();
    map.maze = result[0];
    map.start = result[1];
    map.visible = result[2];
    map.end = result[3];
    map.visited = result[4];

    player.x = map.start[0];
    player.y = map.start[1];

    map.visible[player.x][player.y] = 1
    map.visited[player.x][player.y] = 1
}


function update_visible() {
    /*
      function updates the `visible` 2d array with `TILE_VISIBLE` if the player
      currently has eyes on that tile, and `TILE_NOT_VISIBLE` otherwise
    */

    // Blank out the map and make the player's current position visible
    for (i=1; i<SIZE-1; i++) {
        for (j=1; j<SIZE-1; j++) {
            map.visible[i][j] = TILE_NOT_VISIBLE;
        }
    }

    for (i=0; i<SIZE; i++) {
        map.visible[0][i] = TILE_VISIBLE;
        map.visible[SIZE-1][i] = TILE_VISIBLE;
        map.visible[i][0] = TILE_VISIBLE;
        map.visible[i][SIZE-1] = TILE_VISIBLE;        
    }
    
    map.visible[player.x][player.y] = TILE_VISIBLE

    // Fire beams left and right, marking things visible until we hit a wall
    i = player.x;
    while (map.maze[i][player.y] == TILE_EMPTY) {
        i++;
        map.visible[i][player.y] = TILE_VISIBLE;
        map.visible[i][player.y-1] = TILE_VISIBLE;
        map.visible[i][player.y+1] = TILE_VISIBLE;
    }

    i = player.x;
    while (map.maze[i][player.y] == TILE_EMPTY) {
        i--;
        map.visible[i][player.y] = TILE_VISIBLE;
        map.visible[i][player.y-1] = TILE_VISIBLE;
        map.visible[i][player.y+1] = TILE_VISIBLE;
    }

    // Fire beams up and down, marking things visible until we hit a wall
    j = player.y;
    while (map.maze[player.x][j] == TILE_EMPTY) {
        j++;
        map.visible[player.x][j] = TILE_VISIBLE;
        map.visible[player.x-1][j] = TILE_VISIBLE;
        map.visible[player.x+1][j] = TILE_VISIBLE;
    }

    j = player.y;
    while (map.maze[player.x][j] == TILE_EMPTY) {
        j--;
        map.visible[player.x][j] = TILE_VISIBLE
        map.visible[player.x-1][j] = TILE_VISIBLE;
        map.visible[player.x+1][j] = TILE_VISIBLE;
    }
}


function draw_map(game, visibility=true) {
    /* Color in the map.

    Black:  Walls you can see
    Gray: Floor you can see
    Red: Floor you can see that you have already traipsed blood over
       
    If `visibility` is set to false, then show the whole map, regardless of
    whether it can be seen (called at game end)
    */
    
    for (i=0; i < SIZE ; i++) {
        for (j=0; j < SIZE ; j++) {
            if (map.visible[i][j] === TILE_VISIBLE || visibility === false) {
                if (map.maze[i][j] === TILE_WALL) {
                    game.setDot(i, j, Color.Black);
                } else {
                    if (map.visited[i][j] === TILE_VISITED) {
                        game.setDot(i, j, Color.Red);
                    } else {
                        game.setDot(i, j, Color.Gray);
                    }
                }
            } else {
                // We can't see this square, color it in white
                game.setDot(i, j, Color.White);
            }
        }
    }
    game.setDot(map.end[0], map.end[1], Color.Blue);
    game.setDot(player.x, player.y, Color.Green);

}


function update(game) {
    /* Main game loop, do the following:

      - Update the text string at the bottom of the game
      - Calculate which squares are visible and re-draw the map
      - Flag the player's current square as visited
      - Check for end-game conditions and end the game
    */

    // Text below the game
    if (player.blood_loss < 750) {
        stage = "Stg. 1 (Pale skin)"
    } else if (player.blood_loss < 1500) {
        stage = "Stg. 2 (Anxiety, restless)"
    } else if (player.blood_loss < 2000) {
        stage = "Stg. 3 (Confused mental status)"
    } else {
        stage = "Stg. 4 (DEAD)"
    }
    game.setText(`Blood loss: ${player.blood_loss} ml; ${stage}`);

    // Update and draw map
    update_visible();
    draw_map(game)

    // Mark current square visited
    map.visited[player.x][player.y] = TILE_VISIBLE

    // End the game
    if ((player.x == map.end[0] && player.y == map.end[1]) || player.blood_loss > 2000) {
        draw_map(game, visibility=false);
        game.setDot(map.end[0], map.end[1], Color.Blue);
        game.setDot(map.start[0], map.start[1], Color.Green);
        game.end();
    }
}

function onKeyPress(direction) {

    player.blood_loss += 12;
    
    if (direction == Direction.Up) {
        if (map.maze[player.x][player.y-1] === 1) {
            player.y--;
        }
    }
    if (direction == Direction.Down) {
        if (map.maze[player.x][player.y+1] === 1) {
            player.y++;
        }
    }
    if (direction == Direction.Left) {
        if (map.maze[player.x-1][player.y] === 1) {
            player.x--;
        }

    }
    if (direction == Direction.Right) {
        if (map.maze[player.x+1][player.y] === 1) {
            player.x++;
        }
    }
}


let config = {
    create: create,
    update: update,
    onKeyPress: onKeyPress,
    containerId: "thegame"
};

window.onload = function(){
    let game = new Game(config);
    game.run();
}
