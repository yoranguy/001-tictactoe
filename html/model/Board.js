export default class Board{

    constructor(){
        this.width = 3;
        this.length = 3;

        this.myBoard = [];

    }

    initialiseBoard(){
        for (let x = 0; x < this.width; x++){
            this.myBoard.push([]);
            for (let y = 0; y < this.length; y++){
                this.myBoard[x].push([]);
            }
        }
    }

    getCell(x, y){
        return this.myBoard[x][y];
    }

    drawSymbol(symbol, x, y){
        this.myBoard[x][y] = symbol;
    }

    checkWin(symbol){
        /* Check rows */
        
        console.log("Start - checking rows")
        //  
        console.log("End - checking rows")
        
        
        /* Check columns  */
        // console.log("Start - checking col")
        // for(let y = 0; y < this.length; y++){
        //     if (this.myBoard[0][y] === symbol && this.myBoard[1][y] === symbol && this.myBoard[2][y] === symbol){
        //         return true;
        //     }
        // }
        // console.log("End - checking col")

        /* Check diagonal (top to bottom) */
        console.log("Start - checking diagonal (top to bottom");
        // let diagonal = [];
        // for (let x = 0; x < this.width ; x++){
        //     diagonal.push(this.myBoard[x][x]);
        // }

        // let sameSign = true;
        // for (let x = 0; x < diagonal.length; x++)
        // {
        //     if (symbol !== diagonal[x]){
        //         sameSign = false;
        //     }
        // }
        // if (sameSign === true){
        //     return true;
        // }
        console.log("End - checking diagonal (top to bottom");

        /* Check diagonal (bottom to top) */
        console.log("Start - checking diagonal (bottom to top");
        // diagonal = [];
        // for (let x = 0, y = this.length-1-x; x < this.width ; x++){
        //     diagonal.push(this.myBoard[x][y]);
        // }

        // sameSign = true;
        // for (let x = 0; x < diagonal.length; x++)
        // {
        //     if (symbol !== diagonal[x]){
        //         sameSign = false;
        //     }
        // }

        // if (sameSign === true){
        //     return true;
        // }
        console.log("Start - checking diagonal (bottom to top");
        
    }

    getWidth(){
        return this.width;
    }

    getLength(){
        return this.length;
    }

    getState()
    {
        const board = this.myBoard;
        console.log("board[0]: "+ board[0]);
        console.log("board[1]: "+ board[1]);
        console.log("board[2]: "+ board[2 ]);
        return board
    }
}