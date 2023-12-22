import './App.css';
import News from './News';
import { useState, useEffect } from 'react';

let response = {
  "status": "ok",
  "totalResults": 35,
  "articles": [
    {
      "source": {
        "id": null,
        "name": "Deadline"
      },
      "author": "Ted Johnson",
      "title": "IBM Freezes Advertising On X/Twitter Over Ad Placement Next To Pro-Nazi Content; White House Responds To Elon Musk’s Amplification Of Anti-Semitic Post — Update - Deadline",
      "description": "UPDATED: The White House has responded to Elon Musk’s amplification of an X/Twitter post earlier this week that promoted an antisemitic conspiracy theory. “It is unacceptable to repeat …",
      "url": "https://deadline.com/2023/11/elon-musk-x-twitter-ibm-1235615481/",
      "urlToImage": "https://deadline.com/wp-content/uploads/2023/10/GettyImages-1663931480-2.jpg?w=1024",
      "publishedAt": "2023-11-17T16:39:00Z",
      "content": "UPDATED: The White House has responded to Elon Musk‘s amplification of an X/Twitter post earlier this week that promoted an antisemitic conspiracy theory.\r\n“It is unacceptable to repeat the hideous l… [+5201 chars]"
    },
    {
      "source": {
        "id": "usa-today",
        "name": "USA Today"
      },
      "author": "Christopher Cann",
      "title": "Israel Hamas war live updates: Second body of hostage found - USA TODAY",
      "description": "Israeli airstrikes bombarded areas of Gaza late Thursday and Friday as a deadly raid broke out in the occupied West Bank.",
      "url": "https://www.usatoday.com/story/news/world/israel-hamas/2023/11/17/israel-hamas-war-live-updates/71616890007/",
      "urlToImage": "https://www.usatoday.com/gcdn/authoring/authoring-images/2023/11/17/USAT/71617311007-ap-israel-palestinians-21.jpg?crop=5759,3240,x0,y0&width=3200&height=1801&format=pjpg&auto=webp",
      "publishedAt": "2023-11-17T15:22:30Z",
      "content": "As Israeli ground forces continued operations in northern Gaza, airstrikes bombarded the southern region of the enclave and an army raid in the occupied West Bank saw troops and Palestinian militants… [+6143 chars]"
    },
    {
      "source": {
        "id": "associated-press",
        "name": "Associated Press"
      },
      "author": "WAFAA SHURAFA, JACK JEFFERY, LEE KEATH",
      "title": "Israel-Hamas war: Aid agencies say they can't send food to Gaza - The Associated Press",
      "description": "The United Nations was forced to stop deliveries of food and other necessities to Gaza and warned of the growing possibility of widespread starvation after internet and telephone services collapsed in the besieged enclave because of a lack of fuel. Israel ann…",
      "url": "https://apnews.com/article/israel-hamas-war-news-11-17-2023-1811384fac6394329dd71e3aaf461eb5",
      "urlToImage": "https://dims.apnews.com/dims4/default/2e32762/2147483647/strip/true/crop/5760x3240+0+300/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fa3%2Fef%2F89d278f5e8907b6972a25ca340b5%2F7166f673155144f0b498b1d2ec20e607",
      "publishedAt": "2023-11-17T14:56:00Z",
      "content": "DEIR AL-BALAH, Gaza Strip (AP) The United Nations was forced to stop deliveries of food and other necessities to Gaza on Friday and warned of the growing possibility of widespread starvation after in… [+8596 chars]"
    },
    {
      "source": {
        "id": "cnn",
        "name": "CNN"
      },
      "author": "Lauren Fox, Clare Foran",
      "title": "House Ethics chairman introduces resolution to expel George Santos from Congress - CNN",
      "description": "House Ethics Chairman Michael Guest, a Mississippi Republican, introduced on Friday a resolution to expel GOP Rep. George Santos of New York from Congress, one day after the Ethics Committee released a damning report on its investigation into Santos.",
      "url": "https://www.cnn.com/2023/11/17/politics/santos-expulsion-resolution-introduced/index.html",
      "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/2023-10-26t233956z-245574662-rc24v3aym34e-rtrmadp-3-usa-congress-santos.JPG?c=16x9&q=w_800,c_fill",
      "publishedAt": "2023-11-17T14:47:00Z",
      "content": "House Ethics Chairman Michael Guest, a Mississippi Republican, introduced a resolution Friday to expel GOP Rep. George Santos of New York from Congress, one day after the Ethics Committee released a … [+1665 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "YouTube"
      },
      "author": null,
      "title": "Ravens Beat Bengals on Thursday Night Football - NFL",
      "description": "Ravens Beat Bengals on Thursday Night FootballWatch live local and primetime games, NFL RedZone, and NFL Network on Plus.NFL.comCheck out our other channels:...",
      "url": "https://www.youtube.com/watch?v=4hkrE90r6Mg",
      "urlToImage": "https://i.ytimg.com/vi/4hkrE90r6Mg/maxresdefault.jpg",
      "publishedAt": "2023-11-17T14:36:27Z",
      "content": null
    },
    {
      "source": {
        "id": "reuters",
        "name": "Reuters"
      },
      "author": "Marie Mannes",
      "title": "Tesla union pressure increases in Sweden as dockworkers escalate strike - Reuters",
      "description": "Dockworkers in Sweden pledged on Friday to refuse to offload Tesla <a href=\"https://www.reuters.com/markets/companies/TSLA.O\" target=\"_blank\">(TSLA.O)</a> cars at any of the country's ports as they expanded their industrial action in sympathy with Tesla worke…",
      "url": "https://www.reuters.com/business/autos-transportation/union-pressure-tesla-grows-sweden-dockworkers-expand-strike-2023-11-17/",
      "urlToImage": "https://www.reuters.com/resizer/SvrK_bBccFMt5w52FUMbqn5gqdc=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/CX7QMLSXBJPOZCYZT3QX7AEOL4.jpg",
      "publishedAt": "2023-11-17T14:36:00Z",
      "content": "STOCKHOLM, Nov 17 (Reuters) - Dockworkers in Sweden pledged on Friday to refuse to offload Tesla (TSLA.O) cars at any of the country's ports as they expanded their industrial action in sympathy with … [+3646 chars]"
    },
    {
      "source": {
        "id": "cbs-news",
        "name": "CBS News"
      },
      "author": "Li Cohen",
      "title": "Rare \"zombie\" disease that causes deer to excessively drool before killing them found in Yellowstone - CBS News",
      "description": "This marks the first confirmed case of chronic wasting disease in Yellowstone National Park, officials said.",
      "url": "https://www.cbsnews.com/news/rare-zombie-deer-chronic-wasting-disease-found-in-yellowstone-wyoming/",
      "urlToImage": "https://assets2.cbsnewsstatic.com/hub/i/r/2023/11/17/aa879af8-f548-45b3-be69-5823159c5a77/thumbnail/1200x630/28afa0f19d1ad2076ec66c1bdaf59302/33669140331-894a60eff5-k.jpg?v=5659e73acd91751548aa89950cf015b0",
      "publishedAt": "2023-11-17T14:23:27Z",
      "content": "A rare \"zombie\" disease that causes deer to excessively drool, droop their ears and become reluctant to move before eventually killing them has been detected in Yellowstone National Park for the firs… [+3473 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "PsyPost"
      },
      "author": "Vladimir Hedrih",
      "title": "Ketamine infusions might improve cognitive function in depressed individuals - PsyPost",
      "description": "A study of individuals with treatment-resistant depression found that four infusions of the antidepressant ketamine led to enhanced cognitive functioning that persisted for five weeks. These improvements appeared to be independent of the antidepressant respon…",
      "url": "https://www.psypost.org/2023/11/ketamine-infusions-might-improve-cognitive-function-in-depressed-individuals-214565",
      "urlToImage": "https://www.psypost.org/wp-content/uploads/2023/11/psychedelic-brain-1.jpg",
      "publishedAt": "2023-11-17T14:16:15Z",
      "content": "A study of individuals with treatment-resistant depression found that four infusions of the antidepressant ketamine led to enhanced cognitive functioning that persisted for five weeks. These improvem… [+4888 chars]"
    },
    {
      "source": {
        "id": "abc-news",
        "name": "ABC News"
      },
      "author": "The Associated Press",
      "title": "Maine lobsterman jumps from boat to help rescue a driver from a car submerged in a bay - ABC News",
      "description": "Police in Maine say a lobsterman jumped from a boat into the water to help save a driver trapped in a sinking car",
      "url": "https://abcnews.go.com/US/wireStory/maine-lobsterman-jumps-boat-rescue-driver-car-submerged-104974252",
      "urlToImage": "https://i.abcnewsfe.com/a/4c6c5f03-69b7-4eb6-a886-220afa2b333a/wirestory_e4f8cf9d287190c79f00e1f924184217_16x9.jpg?w=992",
      "publishedAt": "2023-11-17T14:15:05Z",
      "content": "PORTLAND, Maine -- A lobsterman in Maine jumped from a boat into the water to help save a driver trapped in a sinking car, police said.\r\nThe car drove into Casco Bay shortly after noon on Thursday, a… [+676 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "CNBC"
      },
      "author": "Michael Wayland",
      "title": "UAW members ratify new contract with Chrysler owner Stellantis - CNBC",
      "description": "A majority of the Stellantis' plants approved the deal, which, like those at GM and Ford, includes at least 25% wage increases.",
      "url": "https://www.cnbc.com/2023/11/17/uaw-stellantis-workers-ratify-new-contract.html",
      "urlToImage": "https://image.cnbcfm.com/api/v1/image/107321732-1698080690561-SHAP_workers_2.JPG?v=1698763451&w=1920&h=1080",
      "publishedAt": "2023-11-17T14:03:59Z",
      "content": "DETROIT United Auto Workers members at Chrysler owner Stellantis have ratified a new labor contract following a historically contentious round of bargaining between the union and company, according t… [+3180 chars]"
    },
    {
      "source": {
        "id": "the-verge",
        "name": "The Verge"
      },
      "author": "Umar Shakir",
      "title": "The Optiq is Cadillac’s new entry-level luxury EV - The Verge",
      "description": "Cadillac has a new compact electric SUV with the Optiq, and it joins a luxury EV lineup that includes the Lyriq, Escalade IQ, and the Celestiq.",
      "url": "https://www.theverge.com/2023/11/17/23964593/cadillac-optiq-ev-compact-suv-teaser",
      "urlToImage": "https://cdn.vox-cdn.com/thumbor/5RinNFwM1TxB4VqV_RA8Y2FFElc=/0x0:6325x4217/1200x628/filters:focal(3163x2109:3164x2110)/cdn.vox-cdn.com/uploads/chorus_asset/file/25090521/MY24_CADILLAC_OPTIQ_SPORT_GMCA0740.jpg",
      "publishedAt": "2023-11-17T14:00:00Z",
      "content": "Cadillacs new Optiq compact electric SUV will be its cheapest EV\r\nCadillacs new Optiq compact electric SUV will be its cheapest EV\r\n / The Cadillac Optiq is the luxury automakers new entry-level elec… [+1787 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "CBS Sports"
      },
      "author": "",
      "title": "NFL Week 11 bold predictions: Joshua Dobbs leads Vikings to 5th win in row as underdog, Browns win by 2 scores - CBS Sports",
      "description": "Here are five bold predictions for the Week 11 slate",
      "url": "https://www.cbssports.com/nfl/news/nfl-week-11-bold-predictions-joshua-dobbs-leads-vikings-to-5th-win-in-row-as-underdog-browns-win-by-2-scores/",
      "urlToImage": "https://sportshub.cbsistatic.com/i/r/2023/11/17/dddbf1b1-ba39-4255-9126-55b1b8859f17/thumbnail/1200x675/5925d98ac86802f921347a544e32d55e/dobbs.jpg",
      "publishedAt": "2023-11-17T13:54:21Z",
      "content": "Week 11 of the 2023 NFL season is underway, and the big surprise of the Baltimore Ravens' 34-20 victory over the Cincinnati Bengals was the number of key players who suffered critical injuries. Benga… [+7265 chars]"
    }
  ]
}

let demoData = response;

let screenWidth = window.innerWidth;
let keyIndex = 0;

function App() {
  // ALL USE STATE 
  const [country, setCountry] = useState("in");
  const [category, setCategory] = useState("general");
  // const [sort, setSort] = useState("publishedAt");
  // const [language, setLanguage] = useState("en");
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState("");
  const [pageNo, setPageNo] = useState(1);
  const [data, setData] = useState(demoData);

  useEffect(() => { fetchNews(country, category, query) }, [])
  async function fetchNews(country, category, searchQuery) {
    console.log("query= ", searchQuery);
    let API_KEY = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&q=${searchQuery}&pageSize=100&page=${pageNo}&apiKey=34799383882949a7bfa3e5263b55f27a`;
    let response = await fetch(API_KEY);
    let data = await response.json();
    setData(data);
    console.log(data);
  }

  function handleOk() {
    if (country !== "" && category !== "") {
      if (country !== "select" && category !== "select") {
        fetchNews(country, category, query);
      }
    }
  }

  function searchNews(e) {
    setSearch(e.target.value);
    let newsTitle = document.querySelectorAll('.newsTitle');
    // let newsDesc = document.querySelectorAll('.newsDesc');
    if (search !== "") {
      newsTitle.forEach((element, index) => {
        if (element.innerHTML.toLowerCase().includes(search.toLowerCase()) || element.nextSibling.innerHTML.toLowerCase().includes(search.toLowerCase())) {
          document.querySelectorAll('.news')[index].style.display = "flex";
        }
        else {
          document.querySelectorAll('.news')[index].style.display = "none";
        }
      })
      // newsDesc.forEach((element, index) => {
      //   if (element.innerHTML.toLowerCase().includes(search.toLowerCase())) {
      //     document.querySelectorAll('.news')[index].style.display = "flex";
      //   }
      //   else {
      //     document.querySelectorAll('.news')[index].style.display = "none";
      //   }
      // })
    }
    else {
      document.querySelectorAll('.news').forEach(e => {
        e.style.display = "flex";
      })
    }
    if (e.target.value.length === 0) {
      console.log('Worked')
      document.querySelectorAll('.news').forEach(e => {
        e.style.display = "flex";
      })
    }
  }

  useEffect(() => {
    console.log('useEffect ran. count is: ', pageNo);
    window.scrollTo(0, 0);
  }, [pageNo]);

  return (
    <div className="App">
      <div className='navbar'>
        <div className='name'>
          <i className="fa-solid fa-newspaper fa-xl" style={{ color: "#daa520" }}></i>
          <h1>News Hub</h1>
        </div>
        <div className="controller">
          <select name="country" id="country" onChange={(e) => setCountry(e.target.value)}>
            {/* <option value="select">Country</option> */}
            <option value="in">India</option>
            <option value="ae">United Arab Emirates</option>
            <option value="ar">Argentina</option>
            <option value="at">Austria</option>
            <option value="au">Australia</option>
            <option value="be">Belgium</option>
            <option value="bg">Bulgaria</option>
            <option value="br">Brazil</option>
            <option value="ca">Canada</option>
            <option value="ch">Switzerland</option>
            <option value="cn">China</option>
            <option value="co">Colombia</option>
            <option value="cu">Cuba</option>
            <option value="cz">Czechia</option>
            <option value="de">Germany</option>
            <option value="eg">Egypt</option>
            <option value="fr">France</option>
            <option value="gb">United Kingdom</option>
            <option value="gr">Greece</option>
            <option value="hk">Hong Kong</option>
            <option value="hu">Hungary</option>
            <option value="id">Indonesia</option>
            <option value="ie">Ireland</option>
            <option value="il">Israel</option>
            <option value="it">Italy</option>
            <option value="jp">Japan</option>
            <option value="lt">Lithuania</option>
            <option value="lv">Latvia</option>
            <option value="ma">Morocco</option>
            <option value="mx">Mexico</option>
            <option value="my">Malaysia</option>
            <option value="ng">Nigeria</option>
            <option value="nl">Netherlands</option>
            <option value="no">Norway</option>
            <option value="nz">New Zealand</option>
            <option value="ph">Phillipines</option>
            <option value="pl">Poland</option>
            <option value="pt">Portugal</option>
            <option value="ro">Romania</option>
            <option value="rs">Serbia</option>
            <option value="ru">Russia</option>
            <option value="sa">Saudi Arabia</option>
            <option value="se">Sweden</option>
            <option value="sg">Singapore</option>
            <option value="si">Slovenia</option>
            <option value="sk">Slovakia</option>
            <option value="th">Thailand</option>
            <option value="tr">Turkey</option>
            <option value="tw">Taiwan</option>
            <option value="ua">Ukraine</option>
            <option value="us">Unnited States of America</option>
            <option value="ve">Venezuela</option>
            <option value="za">South Africa</option>
          </select>
          <select name="category" id="category" onChange={(e) => setCategory(e.target.value)}>
            {/* <option value="select">Category</option> */}
            <option value="general">General</option>
            <option value="business">Business</option>
            <option value="entertainment">Entertainment</option>
            <option value="health">Health</option>
            <option value="science">Science</option>
            <option value="sports">Sports</option>
            <option value="technology">Technology</option>
          </select>
          {/* <select name="language" id="language" onChange={(e) => setLanguage(e.target.value)}>
            <option value="en">English</option>
            <option value="ar">Arabic</option>
            <option value="de">German</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
            <option value="he">Hebrew</option>
            <option value="it">Italian</option>
            <option value="nl">Dutch</option>
            <option value="no">Norwegian</option>
            <option value="pt">Portuguese</option>
            <option value="ru">Russian</option>
            <option value="sv">Swedish</option>
            <option value="zh">Chinese</option>
          </select> */}
          {/* <select name="sort" id="sort" onChange={(e) => setSort(e.target.value)}>
            <option value="publishedAt">Published At</option>
            <option value="relevancy">Relevancy</option>
            <option value="popularity">Popularity</option>
          </select> */}
          <input type="text" name="search" id="search" placeholder='Write the topic...' value={query} onChange={(e) => setQuery(e.target.value)} />
          <button id="ok" onClick={() => handleOk()}>OK</button>
        </div>
      </div>
      <h3 id='topHeadlines'>Top Headlines</h3>
      <div style={{ position: "relative" }}>
        <input type="text" name="search2" id="search2" placeholder='Search news...' value={search} onChange={(e) => searchNews(e)} />
        <i className="fa-solid fa-magnifying-glass" style={{ color: "#8AAAE5" }} id='searchIcon'></i>
      </div>
      {
        data.articles.forEach(e => {
          //idk but it was running 2 times that's why
          if (e.index === undefined) {
            if (keyIndex >= 30) {
              e.index = keyIndex - (30 * pageNo);
            }
            else {
              e.index = keyIndex;
            }
            keyIndex += 1;
          }
          else {
            console.log("Getting inside the else")
          }
        })
      }
      {
        console.log("Sliced data", data.articles.slice(30 * pageNo - 30, 30 * pageNo))
      }
      {
        data.articles.length !== 0 ? (
          <div className="allNews">
            {data.articles.slice(30 * pageNo - 30, 30 * pageNo).map((e) => { return <News news={e} screenWidth={screenWidth} key={e.title} id={e.index} /> })}
          </div>)
          : (
            <div className="allNews">
              No news!
            </div>)
      }


      <div className="pageDiv">
        <button className="prev" onClick={() => setPageNo(pageNo > 1 ? pageNo - 1 : pageNo)}><i className="fa-solid fa-arrow-left" style={{ color: "#ffffff" }} ></i></button>
        <span className="now">{pageNo}</span>
        <button className="next" onClick={() => setPageNo(pageNo < Math.ceil(data.totalResults / 30) ? pageNo + 1 : pageNo)}><i className="fa-solid fa-arrow-right" style={{ color: "#ffffff" }}></i></button>
      </div>

    </div>
  );
}

export default App;
