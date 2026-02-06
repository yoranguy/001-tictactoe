import Player from "./Player.js";
import Board from "./Board.js";

export default class Game{

    constructor()
    {
        this.playerOne = new Player("o");
        this.playerTwo = new Player("x");

        this.activePlayer = this.playerOne;

        this.myBoard = new Board();
    }
    
    getActivePlayer(){
        return this.activePlayer;
    }

    switchPlayer(){
        this.activePlayer === this.playerOne ? this.activePlayer = this.playerTwo : this.activePlayer = this.playerOne;
    }

    reset(){
        this.myBoard.initialiseBoard();
    }

    getBoardWidth(){
        return this.myBoard.getWidth();
    }

    getBoardLength(){
        return this.myBoard.getLength();
    }

    placeSymbol(x, y){
        this.myBoard.drawSymbol(this.activePlayer.getSymbol(), x, y);
    }

    getBoardState(){
        return this.myBoard.getState();
    }

    checkWin(){
        return this.myBoard.checkWin(this.activePlayer.getSymbol());
    }


    
}