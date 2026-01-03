export default function viewAccount(){
    var username = "Spongebob";
    var email = "spongebob@gmail.com"
    var creationDate = "01/01/2000"
    var highScore = "10000"
    var highScoreDate = "01/01/2010"

    return(
        <div id="accountPage">
            <div id = "profilePicContainer">
                <img id="profilePic" src="spongebob.jpeg"/>
            </div>
            <div id = "accountInfo">
                <div>
                    <div class="info">Username: {username}</div>
                    <div class="info">Email: {email}</div>
                    <div class="info">Creation date: {creationDate}</div>
                    <div class="info">High score: {highScore}</div>
                    <div class="info">Date of high score: {highScoreDate}</div>
                </div>
            </div>
        </div>
    );
}