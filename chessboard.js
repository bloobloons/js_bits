const chessBoard = (size) => {
	let board = "";
	for(i = 0; i < size; i++){
 		for(j = 0; j < size; a++){
  		board += (j % 2) == (i % 2) ? " " : "#";
 		}
 	board += "\n";
	}
	console.log(board);
}
