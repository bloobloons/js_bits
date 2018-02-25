function chessBoard(size){
	let board = "";
	for(var i = 0; i < size; i++){
 		for(var a = 0; a < size; a++){
  		board += (a % 2) == (i % 2) ? " " : "#";
 		}
 	board += "\n";
	}
	console.log(board);
}