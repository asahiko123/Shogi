// const test = document.getElementById('fu');
// console.log(test);



class Shogi{

    //ゲームの初期化


}

class Piece{

    constructor(){
        this.position = position;
        this.sides = sides;
        this.name  = name;
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

