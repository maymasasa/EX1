import users from "./data";
import LoadRecentMessage from "./LoadRecentMessage";
import logedIn from "./User";
 
function LoadContact({i, setContact, setContactIndex, j, presed, presed1}) {
    return (
        <button className = "Openchatbtn" onClick={()=>{setContact(i); setContactIndex(j); presed(false); presed1(false)}}>
            <tr className="Contact">
                <td className = "ho"> <button type="button" className="ProfilePictureBtn" name="ProfilePictureBtn" disabled><img className="ProfilePicture" src={users[i][2]} alt="profile picture"></img></button>
                    <button type="button" className="UserNameBtn" name="UserNameBtn" disabled>
                        <div className="UserNameDisplay">{users[i][3]}</div>
                    </button>
                    <div className="LastMessage"><LoadRecentMessage{...users[logedIn][5][j][users[logedIn][5][j].length -1]}/></div>
                </td>
            </tr>
        </button>
    );
}

export default LoadContact;