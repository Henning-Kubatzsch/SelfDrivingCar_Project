class Controls{
    constructor(){
        this.forward=false;
        this.reverse=false;
        this.left=false;
        this.right=false;

        this.#addKeyboardListeners();
    }

    #addKeyboardListeners(){
        document.onkeydown=(evt)=>{
            switch(evt.key){
                case "ArrowLeft":
                    this.left=true;
                    break;
                case "ArrowRight":
                    this.right=true;
                    break;
                case "ArrowUp":
                    this.forward=true;
                    break;
                case "ArrowDown":
                    this.reverse=true;
                    break;
            }
            //console.table(this);
        }
        document.onkeyup=(evt)=>{
            switch(evt.key){
                case "ArrowLeft":
                    this.left=false;
                    break;
                case "ArrowRight":
                    this.right=false;
                    break;
                case "ArrowUp":
                    this.forward=false;
                    break;
                case "ArrowDown":
                    this.reverse=false;
                    break;
            }
            //console.table(this);
        }
    }



}