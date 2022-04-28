import logedIn from "./User";
import users from "./data";
import React ,{ useState } from "react";

function LoadUser({ addContact }) {
    const add = function () {
        var funame = window.prompt("Enter user name");
        var tnay = false;
        for (var i = 0; i < users.length; i++) {
            if (users[i][0] == funame) {
                for (var j = 0; j < users[logedIn][4].length; j++) {
                    if (users[logedIn][4][j] == i) {
                        alert("User name is alredy your friend");
                        return;
                    }
                }
                users[logedIn][4].push(i);
                users[logedIn][5].push([]);
                addContact(i);
                tnay = true;
            }
        }
        if (!tnay) {
            alert("User name wasn't found");
            return;
        }
    }
    return (
        <div class="UpperScale">
            <button type="button" class="ProfilePictureBtn" name="ProfilePictureBtn" disabled><img class="ProfilePicture" src={users[logedIn][2]} alt="profile picture"></img></button>
            <button type="button" class="UserNameBtn" name="UserNameBtn" disabled>
                <div class="UserNameDisplay">{users[logedIn][3]}</div>
            </button>
            <button type="button" class="ImgBtn" id="AddFriendBtn" name="Add Frien Btn" onClick={()=>{add()}}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-plus-fill" viewBox="0 0 16 16">           <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />           <path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z" /></svg></button>
        </div>
    );
}

export default LoadUser;