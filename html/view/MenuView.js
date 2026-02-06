export default class MenuView{
    constructor(){
        this.clear();
        this.render();
    }

    render(){
        this.clear();

        this.divArea = document.createElement("div")
        this.header = document.createElement("h1");
        this.header.textContent = "Tic Tac Toe";

        this.buttonStartGame = document.createElement("button");
        this.buttonStartGame.textContent = "Start Game";
        this.buttonStartGame.setAttribute("menu-mode","start-game");

        document.body.appendChild(this.divArea);
        this.divArea.appendChild(this.header);
        this.divArea.appendChild(this.buttonStartGame);
    }

    clear(){
        const body = document.body;
        body.replaceChildren();
    }
}