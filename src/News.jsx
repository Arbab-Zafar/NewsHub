import React from "react";

const News = ({ news, screenWidth, id }) => {
    // function transition(e) {
    //     console.log(e)
    //     if (screenWidth > 850) {
    //         if (e.target.className === "news") {
    //             e.target.style.width = "45%";
    //             e.target.getElementsByTagName('img')[0].style.width = "95%";
    //             e.target.getElementsByTagName('h3')[0].innerHTML = news.title;
    //             e.target.getElementsByTagName('span')[0].innerHTML = news.content == null ? "No content" : news.content;
    //             e.target.getElementsByTagName('a')[0].href = news.url;
    //             e.target.getElementsByTagName('a')[0].style.display = "flex";
    //         }
    //         else {
    //             if (e.target.className === "bold") {
    //                 e.target.parentNode.parentNode.style.width = "45%";
    //                 e.target.parentNode.parentNode.getElementsByTagName('img')[0].style.width = "90%";
    //                 e.target.parentNode.parentNode.getElementsByTagName('h3')[0].innerHTML = news.title;
    //                 e.target.parentNode.parentNode.getElementsByTagName('span')[0].innerHTML = news.content == null ? "No content" : news.content;
    //                 e.target.parentNode.parentNode.getElementsByTagName('a')[0].href = news.url;
    //                 e.target.parentNode.parentNode.getElementsByTagName('a')[0].style.display = "flex";
    //             }
    //             else {
    //                 e.target.parentNode.style.width = "45%";
    //                 e.target.parentNode.getElementsByTagName('img')[0].style.width = "90%";
    //                 e.target.parentNode.getElementsByTagName('h3')[0].innerHTML = news.title;
    //                 e.target.parentNode.getElementsByTagName('span')[0].innerHTML = news.content == null ? "No content" : news.content;
    //                 e.target.parentNode.getElementsByTagName('a')[0].href = news.url;
    //                 e.target.parentNode.getElementsByTagName('a')[0].style.display = "flex";
    //             }
    //         }
    //     }
    //     else{
    //         console.log('Under else...')
    //     }
    // }
    function transition(e, id) {
        console.log("key", id);
        if (screenWidth > 850) {
            let news = document.querySelectorAll('.news')[id];
            news.style.width = "45%";
            news.querySelector('.newsImg').style.width = "95%";
            // news.querySelector('.newsTitle').innerHTML = news.title;
            // news.getElementsByTagName('span')[0].innerHTML = news.content == null ? "No content" : news.content;
            news.getElementsByTagName('a')[0].href = news.url;
            news.getElementsByTagName('a')[0].style.display = "flex";
        }
    }
    let date = new Date(news.publishedAt);
    date = date.toString().slice(0, -34); // "Wed Jun 29 2011 09:52:48 GMT-0700 (PDT)"
    return (
        <div className="news" style={{ width: screenWidth > 380 ? "380px" : screenWidth - 15, cursor: "pointer" }} id={id} onClick={(e) => transition(e, id)} >
            <p className="newsPublishPara" style={{ fontSize: "12px", marginBlock: "2px", color: "white" }}>{date}</p>
            <img src={news.urlToImage == null ? "https://via.placeholder.com/380x250" : news.urlToImage} alt="newsPoster" className="newsImg" style={{ width: screenWidth > 380 ? "360px" : screenWidth - 15 }} loading="lazy"/>
            <h3 className="newsTitle">{news.title.length > 85 ? news.title.slice(0, 82) + "..." : news.title}</h3>
            {
                news.content == null ? <span className="newsDesc">No content </span> : <span className="newsDesc">{news.content.length > 200 ? news.content.slice(0, 197) + "..." : news.content == null ? "No content" : news.content}</span>
            }
            {/* {
                news.content != null  ? <span className="newsDesc">{news.content.length > 200 ? news.content.slice(0, 197) + "..." : {news.description != null ? <span className="newsDesc">{news.content.length > 200 ? news.content.slice(0, 197) + "..." : news.content == null ? "No content" : news.description}</span> : news.content == null ? "No content" : news.content}</span>}
            } */}
            <div className="sourceAndAuthor">
                <span className="source" style={{ fontSize: "12px", color: "#7ce97c" }}><b className="bold">Source: </b>{news.source.name}</span>
                {
                    news.author != null ? <span className="author" style={{ fontSize: "12px", color: "#d09bff" }}><b className="bold">Author: </b>{news.author}</span> : <span className="author" style={{ fontSize: "12px", color: "#d09bff" }}><b className="bold">Author: </b>Unknown</span>
                }
                {/* <span className="author" style={{ fontSize: "12px", color: "#d09bff" }}><b className="bold">Author: </b>{news.author}</span> */}
            </div>
            <a href="/" id="urltoNews" style={{ display: "none", marginBlock: "7px", fontSize: "12px", color: "#daa520" }} target="blank">Click for more!</a>

        </div>
    )
}

export default News;