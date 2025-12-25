export default function ScoreTable(){

    const users = []
    for(var i = 0; i < 10; i++){
        var user = {rank: i + 1, username: "username", highScore: "10000", highScoreDate: "01/01/2000"}
        users.push(user);
    };

    return(
        <table id="scoreTable">
            <thead>
                <tr className="rowColor1">
                    <th>Rank</th>
                    <th>Username</th>
                    <th>High Score</th>
                    <th>Date of High Score</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user) => (
                    <tr key={user.rank} className={user.rank % 2 == 0 ? "rowColor1" : "rowColor2"}>
                        <td>{user.rank}</td>
                        <td>{user.username}</td>
                        <td>{user.highScore}</td>
                        <td>{user.highScoreDate}</td>
                    </tr>))}
            </tbody>
        </table>
    );
}