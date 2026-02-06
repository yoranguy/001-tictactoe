export default class BoardView{

    constructor(x, y){
        this.width = x;
        this.length = y;
    }

    render(board, player){
        /* heading */
        const playerText = document.createElement("h2");
        playerText.textContent = "Player " + String(player).toUpperCase()+ "'s turn. ";
        document.body.appendChild(playerText);

        /* show board */
        for (let x = 0; x < this.width; x++){
            const divRow = document.createElement("div");
            document.body.appendChild(divRow);

            for (let y = 0; y < this.length; y++)
            {
                const button = document.createElement("button");
                button.style ="width:100px; height:100px"; //TODO: ADD TO CSS (this is temporary)
                button.className = "btn";
                button.setAttribute("data-x", x);
                button.setAttribute("data-y", y);
                
                divRow.appendChild(button);
                
            } 
        }
    }


    clear(){
        const body = document.body;
        body.replaceChildren();
    }


    bindSetSymbol(event){
        return event.target;
        
        
    }

    showPopupMenu(){

    }

    
}