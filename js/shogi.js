//クリックした駒を特定する

nodes = document.getElementsByClassName('piece');

for(let i= 0; i < nodes.length; i++ ){
    nodes[i].addEventListener('click',function(){
        console.log(nodes[i]);
    })
}


let tegoma =[];
const pieceName =['歩','飛','角','香','桂','金','銀'];


class Shogi{

    //ゲームの初期化 駒やプレイヤーの状態、盤面のリセット

    //今のターンは先手番or後手番

    //先手後手をランダムに決める

    //ゲームの終了処理

    //クリックした駒の特定




}

class Player{

    constructor(sides,tegoma){
        this.sides = sides;
        this.tegoma = tegoma;
    }
}

class Piece{

    constructor(position,sides,pieceName){
        this.position = position;
        this.sides = sides;
        this.pieceName = pieceName;
    }

    //駒の状態

    status(){
       
    }

    //駒の初期配置
    init (){


    }

}

class PieceMoving{


    //歩
    Fu(col,row,sides){

        if(sides ==='white'){
            const fu_White = document.getElementById(`sq${col}${row} white fu`);
           
            fu_White.className = `sq${col}${row+1} white fu`;
            fu_White.id = `sq${col}${row+1} white fu`;

        }else{
            const fu_black = document.getElementById(`sq${col}${row} black fu`);
            fu_black.className = `sq${col}${row-1} black fu`;
            fu_black.id = `sq${col}${row-1} black fu`;
        }
    }

}

// const test = new PieceMoving();

// test.Fu(1,3,'white');
// test.Fu(1,4,'white');

