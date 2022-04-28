import users from "./data";
import LoadMessage from "./LoadMessages";
import logedIn from "./User";
import { useState } from "react";
import UploadBar from "./UploadBar";

function OpenChat({ i, contactIndex, sendMessage, x, b, presed, b1, presed1, kind, a}) {
    var [v, state] = useState(0);
    const send = function () {
        var date = new Date();
        if (document.getElementById("ChatInputBar").value != ""){
            users[logedIn][5][contactIndex].push({type: "text", data: document.getElementById("ChatInputBar").value, time: String(date.getHours())+":"+String(date.getMinutes()).padStart(2,"0"), sender: true});
        }
        document.getElementById("messages").scrollTop = document.getElementById("messages").scrollHeight;
        state(v+1);
        document.getElementById("ChatInputBar").value = null;
        sendMessage(x+1);
    }
    var messages;
    if (i == -1) {
        messages = <div></div>;
    }
    else{
        messages = users[logedIn][5][contactIndex].map((message, key) => {
        return <LoadMessage {...message} key={key} />    });
    }
    return (
        <>{
            (i != -1) ? (<div class="Uchat">
                <div class="UchatUpperScale">
                    <button type="button" class="ProfilePictureBtn" name="ProfilePictureBtn" disabled><img class="ProfilePicture" src={users[i][2]} alt="profile picture" /></button>
                    <button type="button" class="UserNameBtn" name="UserNameBtn" id="UserNameDisplayInChat" disabled>
                        <div class="UserNameDisplay">{users[i][3]}</div></button>
                </div>
                <div className="messages" id = "messages">
                    {messages}
                </div>
                <div class="UchatLowerScale">
                    <span class="Paperclip">
                        <button type="button" class="ImgBtn" id="PaperclipBtn" onClick ={()=>{presed(!b); presed1(false)}}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-paperclip" viewBox="0 0 16 16">
                            <path d="M4.5 3a2.5 2.5 0 0 1 5 0v9a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 1 1 0v7a.5.5 0 0 0 1 0V3a1.5 1.5 0 1 0-3 0v9a2.5 2.5 0 0 0 5 0V5a.5.5 0 0 1 1 0v7a3.5 3.5 0 1 1-7 0V3z" />
                        </svg></button>
                    </span>
                    <UploadBar b = {b} b1 = {b1} presed1 = {presed1} contactIndex = {contactIndex} kind = {kind} a = {a} presed = {presed}/>
                    <div class="chat-popup" id="ChatInput">
                            <textarea placeholder="Type message.." id="ChatInputBar" name="msg" required></textarea>
                            <button className="btn" id="SendBtn" onClick={send}>Send</button>
                    </div>
                </div>
            </div>)
                : (<div></div>)
        }</>
    );
}

export default OpenChat;