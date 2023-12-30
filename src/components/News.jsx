import React from "react";

const News = ({ news, screenWidth, id }) => {
    function transition(e, id) {
        console.log("key", id);
        if (screenWidth > 850) {
            let newsElement = document.querySelectorAll('.news')[id];
            newsElement.style.width = "45%";
            newsElement.querySelector('.newsImg').style.width = "95%";
            newsElement.querySelector('.newsTitle').innerHTML = news.title;
            newsElement.querySelector('.newsDesc').innerHTML = news.content == null ? "No content" : news.content.slice(0, news.content.indexOf('[+'));
            newsElement.getElementsByTagName('a')[0].href = news.url;
            newsElement.getElementsByTagName('a')[0].style.display = "flex";
        }
        else{
            document.querySelectorAll('.news')[id].getElementsByTagName('a')[0].href = news.url;
            document.querySelectorAll('.news')[id].getElementsByTagName('a')[0].style.display = "flex";
        }
    }
    let date = new Date(news.publishedAt);
    date = date.toString().slice(0, -34); // "Wed Jun 29 2011 09:52:48 GMT-0700 (PDT)"
    return (
        <div className="news" style={{ width: screenWidth > 380 ? "380px" : screenWidth - 15, cursor: "pointer" }} id={id} onClick={(e) => transition(e, id)} >

            <span className="source" style={{ fontSize: "12px", color: "#7ce97c", marginBlock: "3px" }}>Source: <b className="bold">{news.source.name}</b></span>

            <img src={news.urlToImage == null ? "https://via.placeholder.com/380x250" : news.urlToImage} alt="newsPoster" className="newsImg" style={{ width: screenWidth > 380 ? "360px" : screenWidth - 15 }} loading="lazy" />

            <h3 className="newsTitle">{news.title.length > 85 ? news.title.slice(0, 82) + "..." : news.title}</h3>

            {
                news.content == null ? <span className="newsDesc">No content </span> : <span className="newsDesc">{news.content.length > 160 ? news.content.slice(0, 157) + "..." : news.content == null ? "No content" : news.content}</span>
            }
            
            <div className="authorAndDate">By <b className="author">{news.author != null ? news.author : "Unknown"}</b> on <b className="newsPublish">{date}</b></div>
            <a href="/" className="urltoNews" style={{ display: "none", marginBottom: "7px", fontSize: "12px", color: "#daa520" }} target="blank">Read more!</a>

        </div>
    )
}

export default News;