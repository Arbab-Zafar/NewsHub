import React from "react";

const Popup = (props) => {
    let OVERLAY_STYLES = {
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(91,91,91,0.92)",
        zIndex: 1000
    }
    let POPUP_STYLES = {
        zIndex: 1000,
        position: 'fixed',
        top: '50%',
        left: '50%',
        backgroundColor: 'white',
        transform: 'translate(-50%, -50%)',
        borderRadius: "10px"
    }
    let ERROR_SIGN_STYLES = {
        backgroundColor: "#e44343",
        width: "100%",
        height: "60px",
        borderRadius: "10px",
        display: "flex",
        alignItems: 'center',
        justifyContent: 'center'
    }
    let POPUP_MAIN_STYLES = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        padding: "30px"
    }
    let DISSMISS_BTN_STYLES = {
        background: "#ff0000",
        color: "white",
        padding: "5px 13px",
        borderRadius: "3px",
        border: "none"
    }

    function mouseOver(event){
        event.target.style.background = "white";
        event.target.style.color = "#ff0000";
        event.target.style.border = "1px solid #ff0000";
    }
    function mouseLeave(event){
        event.target.style.background = "#ff0000";
        event.target.style.color = "white";
        event.target.style.border = "none";
    }
    return (
        <>
            <div className="overlay" style={OVERLAY_STYLES} onClick={props.show}></div>
            <div className="popup" style={POPUP_STYLES}>
                <div className="errorSign" style={ERROR_SIGN_STYLES}>
                    <i className="fa-solid fa-triangle-exclamation fa-lg" style={{ color: "#ffffff" }}></i>
                </div>
                <div className="popupMain" style={POPUP_MAIN_STYLES}>
                    <h2 style={{ marginBottom: "10px", color: "#ff0000" }}>ERROR!</h2>
                    <p style={{ marginBottom: "10px" }}>Sorry! Due to some technical error we cannot fetch latest news.</p>
                    <button className="dissmiss" onClick={props.show} style={DISSMISS_BTN_STYLES} onMouseOver={mouseOver} onMouseLeave={mouseLeave}>Dissmiss</button>
                </div>
            </div>
        </>
    )
}

export default Popup;