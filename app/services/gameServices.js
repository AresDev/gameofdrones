'use strict';

GameOfDrones.factory('GameServices', ['APIServices','$filter', function (APIServices,$filter) {
    // Gets app moves.
    var gameOver = false;
    var moves = [];
    var round = 1;
    
    var players = {
        player1 : {
            name:'',
            wins:0,
            currentMove:''

        },
        player2:{
            name:'',
            wins:0,
            currentMove:''
        }
    }

    var history = [];

    var currentPlayer = players.player1.name;

    var winner = {};

    var turn = 0;

    var init = function(players){
        cleanAll(this);
        var game = this;
        game.players.player1.name = players.player1;
        game.players.player2.name = players.player2;

        return APIServices.getMoves().then(function (result) {

            game.moves = result;
            
        }, function (error) {
            console.log(error);
        });

    }

    var cleanAll = function(sender){
        sender.history = [];
        sender.gameOver =  false;
        sender.winner = {};
        sender.round = 1;
        sender.turn = 0;
        sender.players = {
            player1 : {
                name:'',
                wins:0,
                currentMove:''

            },
            player2:{
                name:'',
                wins:0,
                currentMove:''
            }
        }

        sender.currentPlayer = sender.players.player1.name;
    }

    var getCurrentPlayer = function(){
        if(turn===0){
            return this.players.player1.name;
        }
        else{
            return this.players.player2.name;
        }
    }

    var playTurn = function(move){
        var result;
        
        if(turn===0){
            this.players.player1.currentMove = move;
            turn = 1;
        }else {
            this.players.player2.currentMove = move;
            turn = 0;
            result = validate(this.moves, this);
            if(result===1){
                this.players.player1.wins+=1;
                this.winner = this.players.player1;
            }else if(result===2){
                this.players.player2.wins+=1;
                this.winner = this.players.player2;
                
            }
            this.history.push({ round: this.round, winner: this.winner});
            this.round += 1;
        }

        if(this.players.player1.wins === 3 || this.players.player2.wins === 3){
          this.gameOver = true;   
        }

        
    }

    var validate = function(moves, sender){
        var result = 0;
        var testPlayer1 = { 
            "move": sender.players.player1.currentMove.move,
            "kills": sender.players.player2.currentMove.move
        }
        
        var testPlayer2 = { 
            "move": sender.players.player2.currentMove.move,
            "kills": sender.players.player1.currentMove.move
        }
        
        var player1wins = $filter("filter")(sender.moves, testPlayer1);
        var player2wins = $filter("filter")(sender.moves, testPlayer2);

        if(player1wins.length > 0 && player2wins.length > 0)
        {
            result = 0;
        }else if(player1wins.length > 0) {
            result = 1;
        }else if(player2wins.length > 0) {
            result = 2;
        }

        return result;
    }

    return {
        init: init,
        gameOver: gameOver,
        players: players,
        moves: moves,
        round: round,
        playTurn: playTurn,
        getCurrentPlayer: getCurrentPlayer,
        history: history
    }
}]);