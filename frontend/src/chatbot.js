import React,{ useEffect } from 'react'

function KommunicateChat() {
    useEffect(() => {
        (function(d, m){
            var kommunicateSettings =
                {"appId":"90fd46d4ec9b733b064e3395dc484607","popupWidget":true,
                "automaticChatOpenOnNavigation":true,
                "quickReplies":["Speak with an Agent","Book a Demo",
                "Sample Bots"]};
            var s = document.createElement("script"); 
            s.type = "text/javascript"; 
            s.async = true;
            s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
            var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
            window.kommunicate = m; 
            m._globals = kommunicateSettings;
        })(document, window.kommunicate || {});
    }, [])

    return (
        <div>

        </div>
    )
}

export default KommunicateChat;