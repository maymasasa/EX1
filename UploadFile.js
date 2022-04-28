import { useState } from "react";
import users from "./data";
import logedIn from "./User";

function UploadFile({b, a, presed1, contactIndex, presed}) {
    var Upload;
    const [f, setfile] = useState(null);
    const handler = (e)=>{e.preventDefault(); setfile(URL.createObjectURL(e.target.files[0]));};
    let recorder = null;
    let audioUrl = null
    function start(){
        if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            navigator.mediaDevices.getUserMedia({audio: true})
            .then(stream => {
                recorder = new MediaRecorder(stream);
                recorder.start();
                const data = [];
                recorder.ondataavailable = (event) => data.push(event.data);
                recorder.onstop = () => {
                    console.log("stop");
                    const audioB = new Blob(data);
                    audioUrl = URL.createObjectURL(audioB);
                    recorder = null;
                    sendFile();
                }
            })
            .catch(err => {
                    console.log("failed to record!");
                    console.log(err.name, err.message);
                });
            }
    }
    function stop() {
        if(recorder){
            recorder.stop();
        }
    }
    const sendFile = function () {
        var date = new Date();
        if(a == 1){
            users[logedIn][5][contactIndex].push({type: "audio", data: audioUrl, time: String(date.getHours())+":"+String(date.getMinutes()).padStart(2,"0"), sender: true});
        }
        if(a == 2){
            users[logedIn][5][contactIndex].push({type: "image", data: f, time: String(date.getHours())+":"+String(date.getMinutes()).padStart(2,"0"), sender: true});
        }
        if(a == 3){
            users[logedIn][5][contactIndex].push({type: "video", data: f, time: String(date.getHours())+":"+String(date.getMinutes()).padStart(2,"0"), sender: true});
        }
        console.log(users);
        presed1(false);
        presed(false);
    }
    if(b){
        if(a == 1){
            Upload = <div className="UploadFile">
                        <button className="btn StartRecord" onClick={start}>start Record</button>
                        <button className="btn StopRecord" onClick={stop}>Stop Record</button>
                    </div>
        }
        if(a == 2){
            Upload =    <div className="UploadFile">
                            <input className="UploadInput" id = "input" type="file" accept="image/*" onChange={handler}/>
                            <button className="btn Uploadbtn" onClick={sendFile}>Upload</button>
                        </div>
        }
        if(a == 3){
            Upload = <div className="UploadFile">
                            <input className="UploadInput" type="file" accept="video/*" onChange={handler}/>
                            <button className="btn Uploadbtn" onClick={sendFile}>Upload</button>
                    </div>
        }
    }
    return (
        <>{Upload}</>
    );
}

export default UploadFile;