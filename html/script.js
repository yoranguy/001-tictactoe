/* View */

/* Main Menu */
class MenuView{
    constructor()
    {
        console.log("test");
        this.BOARD_WIDTH = 3;
        this.BOARD_HEIGHT = 3;
        this.SIGN_SET = ["o","x"];

        this.render();
    }

    render(){
        this.clear();

        this.divArea = document.createElement("div")
        this.header = document.createElement("h1");
        this.header.textContent = "Tic Tac Toe";
 
        this.buttonOnePlayer = document.createElement("button");
        this.buttonOnePlayer.textContent = "One Player";
        this.buttonOnePlayer.setAttribute("data-mode","oneplayer");
        console.log("check: "+this.buttonOnePlayer.dataset);

        this.buttonTwoPlayer = document.createElement("button");
        this.buttonTwoPlayer.textContent = "Two Player";
        this.buttonTwoPlayer.setAttribute("data-mode","twoplayer");

        

        document.body.appendChild(this.divArea);
        this.divArea.appendChild(this.header);
        this.divArea.appendChild(this.buttonOnePlayer);
        this.divArea.appendChild(this.buttonTwoPlayer);
    }

    clear(){
        const body = document.body;
        body.replaceChildren();
    }


    bindOnePlayer(handler){
        this.buttonOnePlayer.addEventListener("click", handler);
        
    }

    bindTwoPlayer(){
        
    }
}

class BoardView {
    constructor(width, height){
        this.BOARD_WIDTH = width;
        this.BOARD_HEIGHT = height;
    }

    refresh()
    {
        this.clear();

        const playerText = document.createElement("h2");
        playerText.textContent = 'Test';
        document.body.appendChild(playerText);

        this.displayBoard();
    }

    displayBoard(){
        
        /* Create Board */ 

        for (let x = 0; x < this.BOARD_WIDTH;x++){
            const divRow = document.createElement("div");
            document.body.appendChild(divRow);

            for (let y = 0; y < this.BOARD_HEIGHT;y++)
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

    constructor(){
        this.myPlayer = new Player();
        this.myBoard = new Board();
    }
    
    get width(){
        return this.myBoard.width;
    }
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

    _width;
    get width() {
        return this._width;
    }
    set width(value) {
        this._width = value;
    }
    height;
    board;
    
    constructor(){
        this.width = 3;
        this.height = 3;
        
        
        this.board = new Array(this.width);
        console.log(`board: ${this.board}`);
        for (let x = 0; x < this.width; x++){
            this.board[x] = new Array(this.height);
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

    getSymbol(x, y){
        return this.board[x][y];
    }

    checkWin(){
        /* Check rows */

        for (const s of SIGN_SET){
            for (let x = 0; x < BOARD_WIDTH; x++){
                if (board[x][0] === s && board[x][1] === s && board[x][2] === s){
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


/* Controller */
class GameController{

    constructor()
    {
        this.game = new Game();

        /* Display */
        this.menuView = new MenuView();
        

        /* Event */
        this.menuView.bindOnePlayer(this.handleOnePlayer);
    }

     handleOnePlayer(){
        
        this.boardView = new BoardView(3, 3);
        this.boardView.refresh();
     }

     handleClick(){
        this.game.myBoard.setNought(0,0);
        this.game.myPlayer.switchPlayer();

        this.boardView.refresh();
     }
    

}


/* App */



const myApp = new GameController();