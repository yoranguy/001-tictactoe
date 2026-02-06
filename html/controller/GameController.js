import Game from "../model/Game.js";
import MenuView from "../view/MenuView.js";
import BoardView from "../view/BoardView.js";

export default class GameController {

    constructor(){
        
        this.myGame = new Game();
        this.myMenu = new MenuView();

        this.myMenu.buttonStartGame.addEventListener("click", () => this.StartGame())

    }

    StartGame(){
        // 1. Update the model
        this.myGame.reset();

         // 2. Update the view
        this.myMenu.clear();
        this.myBoardView = new BoardView(Number(this.myGame.getBoardWidth()), Number(this.myGame.getBoardLength()))
        this.myBoardView.render(this.myGame.getBoardState(), this.myGame.activePlayer.getSymbol());
        
        const buttons = document.querySelectorAll("button");
        for (const b of buttons){
            b.addEventListener("click", (event) => {
                this.handleCellClick(event);
            })
        }
        

        
    }


    handleCellClick(event){
        //insert
        let x = event.target.dataset.x;
        let y = event.target.dataset.y;
        this.myGame.placeSymbol(x, y);

        //switch player
        this.myGame.switchPlayer();

        //render
        this.myBoardView.clear();
        this.myBoardView.render(this.myGame.getBoardState(), this.myGame.activePlayer.getSymbol());

        const buttons = document.querySelectorAll("button");
        for (const b of buttons){
            b.addEventListener("click", (event) => {
                this.handleCellClick(event);
            })
        }

    }

    handleRestartGame(){

    }

    handleShowMainMenu(){

    }

    handleExit(){

    }

}