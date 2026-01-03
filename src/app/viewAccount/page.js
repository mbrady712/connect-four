export default function viewAccount(){

    var accountInfo = {
        username: { label: "Username:", value: "Spongebob" },
        email: { label: "Email:", value: "spongebob@gmail.com"},
        creationDate: { label: "Account created on:", value: "01/01/2000"},
        highScore: { label: "High score:", value: "10000"},
        highScoreDate: { label: "Date of high score:", value: "01/01/2010"}
    }

    return(
        <div id="accountPage">
            <div id = "profilePicContainer">
                <img id="profilePic" src="profile.png"/>
            </div>
            <div id = "accountInfo">
                <div>
                    <table id="accountTable">
                        <tbody>
                            {Object.entries(accountInfo).map(([key, item]) => (
                                <tr key={key}>
                                    <td className="info">{item.label}</td>
                                    <td className="info">{item.value}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}