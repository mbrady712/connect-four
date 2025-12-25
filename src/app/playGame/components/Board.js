export default function Board(){
    const board = [];
    const numColumns = 7;
    const numRows = 6;
    const squares = [];
    for(var i = 0; i < numRows; i++){
        board[i] = [];
        squares[i] = [];
        for(var j = 0; j < numColumns; j++){
            board[i][j] = [];
            squares[i][j] = 
                <div className="square" key={j}>
                    <div className="circle"></div>
                </div>
        }
    }
    return squares;
}