//クリックした駒を特定する

nodes = document.getElementsByClassName('piece');
console.log(nodes);

for(let i= 1; i < nodes.length; i++ ){
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

    //クリックした駒の特定　ただし動かせる駒は一個だけ

    //プレイヤーが指定したマスの特定

    //プレイヤーが指定したマスに移動可能かどうか

    //先手と後手の交互にターンが回る

    //プレイヤーが駒の移動位置を指定



}

class Player{

    constructor(sides,tegoma){
        this.sides = sides;
        this.tegoma = tegoma;
    }
}

class Piece{

    constructor(position,sides,pieceName,dist){
        this.position = position;
        this.sides = sides;
        this.pieceName = pieceName;
        this.dist = dist;
    }

    //駒の状態

    status(){
       
    }

    //駒の初期配置
    init (){


    }

}

class PieceMoving{

    makeVacant(col,row,currentDiv){
        const div = document.createElement('div');
        div.className = `sq${col}${row} vacant piece`;
        div.id = `sq${col}${row} vacant piece`;
        const parent = document.getElementById('board');
        parent.insertBefore(div, currentDiv);
    }


    //歩
    Fu(col,row,sides){

        if(sides ==='white'){
            const fu_White = document.getElementById(`sq${col}${row} ${sides} fu`);
           
            fu_White.className = `sq${col}${row+1} ${sides} fu`;
            fu_White.id = `sq${col}${row+1} ${sides} fu`;

            this.makeVacant(col,row,fu_White);


        }else{
            const fu_black = document.getElementById(`sq${col}${row} ${sides} fu`);

            fu_black.className = `sq${col}${row-1} ${sides} fu`;
            fu_black.id = `sq${col}${row-1} ${sides} fu`;

            this.makeVacant(col,row,fu_black);
        }
    }
    //香車
    Kyo(col,row,sides,dist){
        if(sides === 'white'){
            const kyo_white = document.getElementById(`sq${col}${row} ${sides} kyo`);

            kyo_white.className = `sq${col}${row+dist} ${sides} kyo`;
            kyo_white.id = `sq${col}${row+dist} ${sides} kyo`;

            this.makeVacant(col,row,kyo_white);

        }else{
            const kyo_black = document.getElementById(`sq${col}${row} ${sides} kyo`);

            kyo_black.className = `sq${col}${row-dist} ${sides} kyo`;
            kyo_black.id = `sq${col}${row-dist} ${sides} kyo`;

            this.makeVacant(col,row,kyo_black);
        }
    }

}

const test = new PieceMoving();

test.Fu(1,3,'white');
// test.Fu(1,4,'white');

test.Kyo(1,9,'black',3);

