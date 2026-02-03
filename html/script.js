/* View */
class AppView{
    state = ["menu","board"];

    BOARD_WIDTH = 3;
    BOARD_HEIGHT = 3;
    SIGN_SET = ["o","x"];

    constructor()
    {
        this.displayMenu();
    }

    displayMenu(){
        clear();

        const divArea = document.createElement("div")
        const header = document.createElement("h1");
        header.textContent = "Tic Tac Toe";

        const buttonOnePlayer = document.createElement("button");
        buttonOnePlayer.textContent = "One Player";

        const buttonTwoPlayer = document.createElement("button");
        buttonTwoPlayer.textContent = "Two Player";

        document.body.appendChild(divArea);
        divArea.appendChild(header);
        //divArea.appendChild(buttonOnePlayer);
        divArea.appendChild(buttonTwoPlayer);
    
    }

    refreshBoardView()
    {
        clear();

        const playerText = document.createElement("h2");
        document.body.appendChild(playerText);

        displayBoard();
    }


    displayBoard(){
        clear();
        /* Create Board */ 

        for (let x = 0; x < BOARD_WIDTH;x++){
            const divRow = document.createElement("div");
            document.body.appendChild(divRow);

            for (let y = 0; y < BOARD_HEIGHT;y++)
            {
                const button = document.createElement("button");
                button.style ="width:100px; height:100px"; //TODO: ADD TO CSS
                button.className = "btn";
                divRow.appendChild(button);

                button.addEventListener("click", () => {} )
            }
        }
        


    }

    clear(){
        const body = document.body;
        body.replaceChildren();
    }

    
}
/* Models */

class Game{

    myPlayer = new Player();
    myBoard = new Board(BOARD_WIDTH,BOARD_HEIGHT);

}

class Player{
    playerTurn; //1 or 2

    constructor(){
        this.playerTurn = 1;
    }

    switchPlayer()
    {
        if (this.playerTurn === 1){
            this.playerTurn = 2;
        }
        else{
            this.playerTurn = 1;
        }
    }

    set playerTurn(number){
        this.playerTurn = number;
    }
}

class Board {

    width;
    height;
    board;
    
    constructor(width, height){
        this.width = width;
        this.height = height;
        
        
        this.board = new Array(width);
        for (const x = 0; x < width; x++){
            board[x] = new Array(height);
        }
    }

    setNought(x, y){
        if (board[x][y] === null){
            board[x][y] = new Sign("o");
        }
    }

    setCrosses(x, y){
        if (board[x][y] === null){
            board[x][y] = new Sign("x");
        }
    }

    checkWin(){
        /* Check rows */

        for (const s of SIGN_SET){
            for (let x = 0; x < BOARD_WIDTH; x++){
                if (board[x][0] === s &&  board[x][1] === s && board[x][2] === s){
                    return true;
                }
            }

            /* Check columns  */
            for(let y = 0; y <BOARD_HEIGHT; y++){
                if (board[0][y] === s && board[1][y] === s && board[2][y] === s){
                    return true;
                }
            }

            /* Check diagonal (top to bottom)*/
            let diagonal = [];
            for (let x = 0; x < BOARD_WIDTH ; x++){
                diagonal.push(board[x][x]);
            }

            let sameSign = true;
            for (let x = 0; x < diagonal.length; x++)
            {
                if (s !== diagonal[x]){
                    sameSign = false;
                }
            }
            if (sameSign === true){
                return true;
            }

            /* Check diagonal (bottom to top)*/
            diagonal = [];
            for (let x = 0, y = BOARD_HEIGHT-1-x; x < BOARD_WIDTH ; x++){
                diagonal.push(board[x][y]);
            }

            sameSign = true;
            for (let x = 0; x < diagonal.length; x++)
            {
                if (s !== diagonal[x]){
                    sameSign = false;
                }
            }
            if (sameSign === true){
                return true;
            }
        }

        
        
    }    

}

class Sign{
    /* sign can be "o" or "x" */
    sign;

    constructor(sign){
        this.sign = sign;
    }

    get sign(){
        return sign;
    }

}




/* Controller */
class AppController{

    constructor(model, view)
    {
        this.model = model;
        this.view = view;
    }

    
}


/* App */

document.addEventListener('DOMContentLoaded', () => {
    const myApp = new AppController(new Board(), new AppView());
})