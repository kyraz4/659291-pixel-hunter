const ModelTest = class {
    constructor (playerName, gameData) {
        this._playerName = playerName;
        this._state = makeInitialState(gameData);
        this._timer = createTimer(30000);
    };

    get playerName(){
        return this._playerName;
    }

    get state() {
        retrun this._state;
    }

    // timer
    getNextLevel() {
        /// 
    }
   
    createNewLevel() {
        //создаем иуровень
    }
    
    isEndOfGame() {
       //проверка конец игры?
    }
   
     fail(){
         //отнимер жизнь
     }
}  


