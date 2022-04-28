function LoadRecentMessage({ type, data, time, sender }) {
    const content = function () {
        if (type == "text") {
            return (data);
        }
        else if (type == "video") {
            return "video";
        }
        else if (type == "audio") {
            return "audio";
        }
        else if (type == "image") {
            return "image";
        }
    }
    return (
        <><div className="LastMessage">{content()}</div><div className="LastMessageTime">{time}</div></>
    );
}

export default LoadRecentMessage;