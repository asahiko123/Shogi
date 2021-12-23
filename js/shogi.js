//クリックした駒を特定

nodes = document.getElementsByClassName('piece');
console.log(nodes);
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

    //クリックした駒の特定　ただし動かせる駒は一個だけ

    //プレイヤーが指定したマスの特定

    //プレイヤーが指定したマスに移動可能かどうか

    //先手と後手の交互にターンが回る

    //プレイヤーが駒の移動位置を指定

    //クリックした駒を特定する





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

 

    makeVacant(col,row){
        const div = document.createElement('div');
        div.className = `sq${col}${row} piece vacant`;
        div.id = `sq${col}${row} vacant`;
        const parent = document.getElementById('board');
        parent.appendChild(div);
    }

    removeVacant(col,row){
        const div = document.getElementById(`sq${col}${row} vacant`);
        console.log(div);
        div.remove();

    }


    //上
    up(col,row,sides,piece,dist){


        if(sides ==='white'){
            const upWhite = document.getElementById(`sq${col}${row} ${sides} ${piece}`);
            console.log(upWhite);
           
            upWhite.className = `sq${col}${row+dist} ${sides} piece ${piece}`;
            upWhite.id = `sq${col}${row+dist} ${sides} ${piece}`;

            this.makeVacant(col,row);


        }else{
            const upBlack = document.getElementById(`sq${col}${row} ${sides} ${piece}`);
            console.log(upBlack);

            upBlack.className = `sq${col}${row-dist} ${sides} piece ${piece}`;
            upBlack.id = `sq${col}${row-dist} ${sides} ${piece}`;

            this.makeVacant(col,row);
        }
    }
    //下
    down(col,row,sides,piece,dist){
        if(sides === 'white'){
            const downWhite = document.getElementById(`sq${col}${row} ${sides} ${piece}`);
            console.log(downWhite);
            downWhite.className = `sq${col}${row-dist} ${sides} piece ${piece}`;
            downWhite.id = `sq${col}${row-dist} ${sides} ${piece}`;

            this.makeVacant(col,row);

        }else{
            const downBlack= document.getElementById(`sq${col}${row} ${sides} ${piece}`);
            console.log(downBlack);
            downBlack.className = `sq${col}${row+dist} ${sides} piece ${piece}`;
            downBlack.id = `sq${col}${row+dist} ${sides} ${piece}`;

            this.makeVacant(col,row);
        }
    }

    //右

    right(col,row,sides,piece,dist){

        if(sides === 'white'){
            const downWhite = document.getElementById(`sq${col}${row} ${sides} ${piece}`);
            console.log(downWhite);
            downWhite.className = `sq${col+dist}${row} ${sides} piece ${piece}`;
            downWhite.id = `sq${col+dist}${row} ${sides} ${piece}`;

            this.makeVacant(col,row);

        }else{
            const downBlack= document.getElementById(`sq${col}${row} ${sides} ${piece}`);
            console.log(downBlack);
            downBlack.className = `sq${col-dist}${row} ${sides} piece ${piece}`;
            downBlack.id = `sq${col-dist}${row} ${sides} ${piece}`;

            this.makeVacant(col,row);
        }

    }

    //左

    left(col,row,sides,piece,dist){

        if(sides === 'white'){
            const downWhite = document.getElementById(`sq${col}${row} ${sides} ${piece}`);
            console.log(downWhite);
            downWhite.className = `sq${col-dist}${row} ${sides} piece ${piece}`;
            downWhite.id = `sq${col-dist}${row} ${sides} ${piece}`;

            this.makeVacant(col,row);

        }else{
            const downBlack= document.getElementById(`sq${col}${row} ${sides} ${piece}`);
            console.log(downBlack);
            downBlack.className = `sq${col+dist}${row} ${sides} piece ${piece}`;
            downBlack.id = `sq${col+dist}${row} ${sides} ${piece}`;

            this.makeVacant(col,row);
        }


    }

}

const test = new PieceMoving();

test.right(8,8,'black','kaku',2);
test.removeVacant(8,8);
test.left(6,8,'black','kaku',2);




