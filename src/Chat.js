import users from "./data";
import logedIn from "./User";
import LoadUser from "./LoadUser";
import LoadContact from "./LoadContacts";
import OpenChat from "./OpenChat";
import { useState } from "react";

function Chat() {
    var [v, setContactIndex] = useState(-1);
    var [t, setContact] = useState(-1);
    var [s,addContact] = useState(-1);
    var [x,sendMessage] = useState(-1);
    var [b, presed] = useState(false);
    var [b1, presed1] = useState(false);
    var [a, kind] = useState(-1);
    var j = 0;
    logedIn[0] = localStorage.getItem("user");
    const contactList = users[logedIn][4].map((contact, key) => {
        return <LoadContact i={contact} setContact={setContact} setContactIndex = {setContactIndex} j={j++} presed = {presed} presed1 = {presed1} key={key} />
    });
    return (
        <div className="chat">
            <LoadUser addContact = {addContact}/>
            <div id="ContactList-wrapper">
                <div id="ContactList-scroll">
                    {contactList}
                </div>
            </div>
            <div class="NoChat">
                <OpenChat i = {t} contactIndex = {v} sendMessage = {sendMessage} x = {x} b={b} presed = {presed} b1 = {b1} presed1 = {presed1} kind = {kind} a = {a}/>
            </div>
        </div>
    );
}

export default Chat;