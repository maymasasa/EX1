function LoadMessage({ type, data, time, sender }) {
    const content = function () {
        if (type == "text") {
            return (data);
        }
        else if (type == "video") {
            return (<video controls className="Video"><source src={data} type="video/mp4"></source></video>);
        }
        else if (type == "audio") {
            return (<audio controls className="Audio"><source src={data} type="audio/mpeg"></source></audio>);
        }
        else if (type == "image") {
            return (<img className="Image" src={data} alt="..."></img>)
        }
    }
    return (
        <>{
            (sender) ? <div className="Send">
                <div class="MyM">
                    <div class="talk-bubble tri-right left-top">
                        <div class="talktext">
                            <div class="talktext">
                                {content()}
                            </div>
                            <div class="time">
                                {time}
                            </div>
                        </div>
                    </div>
                </div>
            </div> : 
            <div className="Recive">
                <div class="MyM">
                    <div class="talk-bubble tri-right right-top">
                        <div class="talktextRecive">
                            <div class="talktext">
                                {content()}
                            </div>
                            <div class="time">
                                {time}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        }
        </>
    );
}

export default LoadMessage;