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
    },
    {
      "source": {
        "id": null,
        "name": "Motorsport.com"
      },
      "author": "Adam Cooper",
      "title": "Vasseur: Sainz F1 grid penalty after Vegas incident a \"huge hit\" for Ferrari - Motorsport.com",
      "description": "Ferrari Formula 1 boss Fred Vasseur says that the team paid a \"mega price\" after Carlos Sainz landed a 10-place grid penalty in the wake of his incident in Las Vegas.",
      "url": "https://www.motorsport.com/f1/news/vasseur-sainz-f1-grid-penalty-after-vegas-incident-a-huge-hit-for-ferrari-/10547731/",
      "urlToImage": "https://cdn-3.motorsport.com/images/amp/0rGDBxO2/s6/carlos-sainz-ferrari-sf-23-sto.jpg",
      "publishedAt": "2023-11-17T13:28:47Z",
      "content": "Sainz's car suffered severe damage after running over a water valve cover early in the opening session of practice.\r\nThe team had to rebuild the car around the spare chassis, and also swap the power … [+2380 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "WDIV ClickOnDetroit"
      },
      "author": "Kayla Clarke",
      "title": "Apple will finally improve texting between iPhones and Androids - WDIV ClickOnDetroit",
      "description": "Apple has told multiple news outlets that it plans on adopting the RCS messaging standard in a software update next year.",
      "url": "https://www.clickondetroit.com/tech/2023/11/17/apple-will-finally-improve-texting-between-iphones-and-androids/",
      "urlToImage": "https://res.cloudinary.com/graham-media-group/image/upload/f_auto/q_auto/c_thumb,w_700/v1/media/gmg/XHQAWQU2OFCIZCQFBSXRLT7DOI.jpg?_a=ATAPphC0",
      "publishedAt": "2023-11-17T12:58:36Z",
      "content": "Sick of blurry videos and broken group chats when texting between iPhone and Android devices? Apple has told multiple news outlets that a fix is coming next year.\r\nApple plans on finally adopting the… [+997 chars]"
    },
    {
      "source": {
        "id": "the-times-of-india",
        "name": "The Times of India"
      },
      "author": "TIMESOFINDIA.COM",
      "title": "New study confirms China's rocket as culprit in mysterious Moon crash - Times of India - IndiaTimes",
      "description": "US News: A recent study has definitively identified the object that crashed into the moon on March 4, 2022, as the upper stage of China's Long March 3C rocket.",
      "url": "https://timesofindia.indiatimes.com/world/us/new-study-confirms-chinas-rocket-as-culprit-in-mysterious-moon-crash/articleshow/105293389.cms",
      "urlToImage": "https://static.toiimg.com/thumb/msid-105293520,width-1070,height-580,imgsize-88878,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
      "publishedAt": "2023-11-17T12:12:00Z",
      "content": "How to make no-sugar Ragi Almond Cake at home"
    },
    {
      "source": {
        "id": null,
        "name": "Daily Beast"
      },
      "author": "Dan Ladden-Hall",
      "title": "Second Hostage's Body Found Near Gaza Hospital, Israel Says - The Daily Beast",
      "description": "Hamas had earlier claimed that Noa Marciano, 19, was killed in an Israeli airstrike.",
      "url": "https://www.thedailybeast.com/second-hostages-body-found-near-gaza-hospital-israel-claims",
      "urlToImage": "https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_583,w_1036,x_0,y_0/dpr_2.0/c_limit,w_740/fl_lossy,q_auto/v1700216831/F_HaJrFXMAA-2RO_qbsqfi",
      "publishedAt": "2023-11-17T11:59:42Z",
      "content": "The body of a second Israeli hostage was recovered near the largest hospital complex in Gaza, the Israeli military claimed Friday, six weeks after she was abducted by Hamas militants in the Oct. 7 at… [+3445 chars]"
    },
    {
      "source": {
        "id": "cnn",
        "name": "CNN"
      },
      "author": "Taylor Nicioli",
      "title": "Keep an eye on the sky for the Leonid meteor shower this weekend - CNN",
      "description": "Famous for its past meteor storms, the Leonid meteor shower is set to peak on Saturday, with an expected rate of 10 to 15 meteors per hour.",
      "url": "https://www.cnn.com/2023/11/17/world/leonid-meteor-shower-november-scn/index.html",
      "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/shutterstock-editorial-11019232b.jpg?c=16x9&q=w_800,c_fill",
      "publishedAt": "2023-11-17T11:00:00Z",
      "content": "Sign up for CNNs Wonder Theory science newsletter. Explore the universe with news on fascinating discoveries, scientific advancements and more.\r\nUp next for end-of-year celestial spectaculars is the … [+3065 chars]"
    },
    {
      "source": {
        "id": "axios",
        "name": "Axios"
      },
      "author": "Axios",
      "title": "2023 Plant Hardiness Map released - Axios",
      "description": null,
      "url": "https://www.axios.com/2023/11/17/2023-plant-hardiness-map",
      "urlToImage": null,
      "publishedAt": "2023-11-17T10:33:12Z",
      "content": null
    },
    {
      "source": {
        "id": null,
        "name": "SciTechDaily"
      },
      "author": null,
      "title": "10 Million Miles Away: NASA Achieves Historic Data Exchange With Deep Space Optical Communications Experiment - SciTechDaily",
      "description": "DSOC, an experiment that could transform how spacecraft communicate, has achieved ‘first light,’ sending data via laser to and from far beyond the Moon for the first time. NASA’s Deep Space Optical Communications (DSOC) experiment has beamed a near-infrared l…",
      "url": "https://scitechdaily.com/?p=328960",
      "urlToImage": "https://scitechdaily.com/images/Deep-Space-Communication-With-Lasers.jpg",
      "publishedAt": "2023-11-17T09:23:16Z",
      "content": "ByJet Propulsion LaboratoryNovember 17, 2023\r\nNASAs DSOC experiment, aboard the Psyche spacecraft, has successfully demonstrated the farthest-ever optical communication using a near-infrared laser fr… [+11483 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Daily Beast"
      },
      "author": "Laura Bradley",
      "title": "'The Golden Bachelor' Fantasy Suites Set Up a Disastrous Finale - The Daily Beast",
      "description": "I’m sorry, did our leading man *really* just tell someone he thinks she’s “The One”? Gerry, why!!!",
      "url": "https://www.thedailybeast.com/obsessed/the-golden-bachelor-recap-fantasy-suites-set-up-a-disastrous-finale",
      "urlToImage": "https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1688,w_3000,x_0,y_0/dpr_2.0/c_limit,w_740/fl_lossy,q_auto/v1700169797/231116-golden-bachelor-tease_wop35p",
      "publishedAt": "2023-11-17T07:57:40Z",
      "content": "In the champagne-soaked, rose-scented world of ABCsThe Bachelor, some things are strictly verboten, even if the rules often go unsaid. In the olden days, at least, you tried to avoid saying I love yo… [+5502 chars]"
    },
    {
      "source": {
        "id": "axios",
        "name": "Axios"
      },
      "author": "Axios",
      "title": "How Sam Altman's ouster went down, according to OpenAI's ex-president - Axios",
      "description": null,
      "url": "https://www.axios.com/2023/11/18/sam-altman-greg-brockman-openai-board-timeline",
      "urlToImage": null,
      "publishedAt": "2023-11-18T13:51:29Z",
      "content": null
    },
    {
      "source": {
        "id": null,
        "name": "9to5google.com"
      },
      "author": "Ben Schoon",
      "title": "Nothing Chats, the Sunbird-based iMessage app, is a privacy nightmare with unencrypted messages and images - 9to5Google",
      "description": "The Nothing Chats app, powered by Sunbird, promises encrypted iMessage for Android, but it's literally a privacy nightmare.",
      "url": "https://9to5google.com/2023/11/18/nothing-chats-sunbird-unencrypted-data-privacy-nightmare/",
      "urlToImage": "https://i0.wp.com/9to5google.com/wp-content/uploads/sites/4/2023/11/nothing-chats-1.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
      "publishedAt": "2023-11-18T13:47:00Z",
      "content": "Sunbird has been promising iMessage support on Android for about a year now, but the company has always seemed rather sketchy. Now, as Nothing Chats, built on Sunbird, has launched, the privacy night… [+5406 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Space.com"
      },
      "author": "Joe Rao",
      "title": "The Leonid meteor shower peaks today. Here's how to see it - Space.com",
      "description": "The Leonids are known for producing some of the most amazing meteor displays in the annals of astronomy.",
      "url": "https://www.space.com/leonid-meteor-shower-november-2023",
      "urlToImage": "https://cdn.mos.cms.futurecdn.net/9xmbGqWT6b3bsGmp6FD8CB-1200-80.jpg",
      "publishedAt": "2023-11-18T13:38:53Z",
      "content": "Space is part of Future US Inc, an international media group and leading digital publisher. Visit our corporate site.\r\n©\r\nFuture US, Inc. Full 7th Floor, 130 West 42nd Street,\r\nNew York,\r\nNY 10036."
    },
    {
      "source": {
        "id": "cbs-news",
        "name": "CBS News"
      },
      "author": "Scott MacFarlane",
      "title": "Coping with \"Parkinson's on steroids,\" Virginia Rep. Jennifer Wexton navigates exhausting and gridlocked Congress - CBS News",
      "description": "Rep. Jennifer Wexton was diagnosed with a severe variant of Parkinson's Disease earlier this year, forcing her to retire at the end of her term.",
      "url": "https://www.cbsnews.com/news/jennifer-wexton-copes-with-parkinsons-variant-congress/",
      "urlToImage": "https://assets1.cbsnewsstatic.com/hub/i/r/2023/11/18/cf11f473-e943-4736-9aca-a96d106538d2/thumbnail/1200x630/297a49e5e5265bffc58742a53da46434/screenshot-2023-11-17-at-10-55-47-pm.png?v=5659e73acd91751548aa89950cf015b0",
      "publishedAt": "2023-11-18T13:00:22Z",
      "content": "Rep. Jennifer Wexton, Democrat of Virginia, sat upright but slumped on the dark leather couch in her Capitol Hill office this week, using her right hand to prop up her neck. Diagnosed earlier this ye… [+7534 chars]"
    },
    {
      "source": {
        "id": "fox-news",
        "name": "Fox News"
      },
      "author": "Stephanie Giang-Paunon",
      "title": "Taylor Swift ‘devastated’ as fan dies before Brazil concert - Fox News",
      "description": "A Taylor Swift fan died before her opening night concert in Rio de Janeiro, Brazil, Friday. Swift shared a statement on her social media mourning the loss of the fan.",
      "url": "https://www.foxnews.com/entertainment/taylor-swift-devastated-fan-dies-brazil-concert",
      "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2023/11/taylor-swift-eras-tour.jpg",
      "publishedAt": "2023-11-18T12:23:00Z",
      "content": "Taylor Swift was \"devastated\" after learning that a fan had died before her opening night concert in Brazil on Friday. \r\n\"I cant believe Im writing these words but it is with a shattered heart that I… [+2233 chars]"
    },
    {
      "source": {
        "id": "politico",
        "name": "Politico"
      },
      "author": null,
      "title": "House and Senate retirements affect 2024 election for control of Congress - POLITICO - POLITICO",
      "description": "Nine incumbents have already announced this month they aren’t running for reelection next year.",
      "url": "https://www.politico.com/news/2023/11/18/congress-retirements-2024-elections-00127883",
      "urlToImage": "https://static.politico.com/b0/33/a7803afc4f20905a53b98b99ac3e/https-delivery-gettyimages.com/downloads/1743782588",
      "publishedAt": "2023-11-18T12:00:00Z",
      "content": "And there are still more retirements to come. Announcements tend to spike after the holidays, and Rep. Bill Huizenga (R-Mich.), who entered Congress in the 2010 tea party wave election, said retireme… [+7225 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "POLITICO.eu"
      },
      "author": "Jacopo Barigazzi",
      "title": "Musk threatens 'thermonuclear lawsuit' as X ad boycott gathers pace - POLITICO Europe",
      "description": "Companies including Disney, Apple and IBM reportedly have suspended advertising on X amid an antisemitism storm around the social media platform.",
      "url": "https://www.politico.eu/article/elon-musk-threatens-thermonuclear-lawsuit-twitter-x-ad-boycott-media-matters/",
      "urlToImage": "https://www.politico.eu/cdn-cgi/image/width=1200,height=630,fit=crop,quality=80,onerror=redirect/wp-content/uploads/2023/11/18/GettyImages-1760544577-scaled.jpg",
      "publishedAt": "2023-11-18T11:39:00Z",
      "content": "Elon Musk said on Saturday that he will file a \"thermonuclear lawsuit\" against non-profit watchdog Media Matters and others, as companies including Disney, Apple and IBM reportedly have paused advert… [+2369 chars]"
    },
    {
      "source": {
        "id": "cnn",
        "name": "CNN"
      },
      "author": "Stephanie Busari",
      "title": "Liberia’s President George Weah concedes victory after tight run-off election - CNN",
      "description": "Liberia’s President, George Weah, has conceded defeat to opposition candidate Joseph Boakai after a tight run-off election.",
      "url": "https://www.cnn.com/2023/11/18/africa/liberia-election-george-weah-intl/index.html",
      "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/171226143132-01-george-weah-joseph-boakai-split.jpg?q=x_0,y_0,h_1688,w_2999,c_fill/w_800",
      "publishedAt": "2023-11-18T11:36:00Z",
      "content": "Liberias President, George Weah, has conceded defeat to opposition candidate Joseph Boakai after a tight run-off election.\r\nWeah, a former soccer star, called Boakai after the countrys National Elect… [+1717 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "The Athletic"
      },
      "author": "Bruce Feldman",
      "title": "College football picks against the spread: Bruce Feldman’s Week 12 predictions - The Athletic",
      "description": "Washington is an underdog at Oregon State and Louisville is in a toss-up at Miami. Will any top 10 teams lose this week?",
      "url": "https://theathletic.com/5072406/2023/11/17/college-football-picks-predictions-week-12-feldman/",
      "urlToImage": "https://cdn.theathletic.com/app/uploads/2023/11/17165355/GettyImages-1792301556-scaled-e1700258052258.jpg",
      "publishedAt": "2023-11-18T11:22:01Z",
      "content": "I had a dismal week, going 4-8 against the number to drop me to two games under .500 for the season against the spread. The good: picking Mizzou to knock off the Tennessee. The bad: picking Tulane to… [+3453 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "YouTube"
      },
      "author": null,
      "title": "Explosion, smoke in northern Gaza seen from Israel's Sderot | AFP - AFP News Agency",
      "description": "Explosion rings out and smoke rises in the northern Gaza Strip, seen from Sderot in Israel, on the 43rd day of the war between Israel and Hamas.Interested in...",
      "url": "https://www.youtube.com/watch?v=TmwDfokhXYE",
      "urlToImage": "https://i.ytimg.com/vi/TmwDfokhXYE/maxresdefault.jpg",
      "publishedAt": "2023-11-18T09:46:29Z",
      "content": null
    },
    {
      "source": {
        "id": "cnn",
        "name": "CNN"
      },
      "author": "David Close",
      "title": "Joe Burrow ruled out for season as NFL investigates how Bengals reported the quarterback’s injury - CNN",
      "description": "Cincinnati Bengals quarterback Joe Burrow will miss the remainder of the season after tearing a ligament in his right wrist during Thursday night’s 34-20 loss to the Baltimore Ravens.",
      "url": "https://www.cnn.com/2023/11/18/sport/joe-burrow-injury-nfl-bengals-spt-intl/index.html",
      "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/231117233410-01-joe-burrow-injury-111623.jpg?c=16x9&q=w_800,c_fill",
      "publishedAt": "2023-11-18T09:37:00Z",
      "content": "Cincinnati Bengals quarterback Joe Burrow will miss the remainder of the season after tearing a ligament in his right wrist during Thursday nights 34-20 loss to the Baltimore Ravens.\r\nOn Friday, Beng… [+2678 chars]"
    },
    {
      "source": {
        "id": "abc-news",
        "name": "ABC News"
      },
      "author": "Riley Hoffman, Stephanie Guerilus",
      "title": "Cassie settles lawsuit accusing Sean 'Diddy' Combs of sex trafficking and sexual assault - ABC News",
      "description": "The settlement comes just one day after Cassie filed the lawsuit.",
      "url": "https://abcnews.go.com/GMA/cassie-settles-lawsuit-accusing-sean-diddy-combs-sex/story?id=104997806",
      "urlToImage": "https://i.abcnewsfe.com/a/c2964f45-4a19-45ee-b58d-c8b4b40929ea/pdiddy-sean-combs-gty-lv-231116_1700171268425_hpMain_16x9.jpg?w=992",
      "publishedAt": "2023-11-18T09:35:58Z",
      "content": "Singer and actress Cassie has settled a lawsuit Friday against ex-boyfriend Sean \"Diddy\" Combs, according to statements from both parties.\r\nThe lawsuit, which was filed Thursday in New York, accused … [+1704 chars]"
    },
    {
      "source": {
        "id": "cnn",
        "name": "CNN"
      },
      "author": "Christina Zdanowicz",
      "title": "‘Every move I make, I second guess’: These Muslim and Arab Americans say the surge in hate has made them more vigilant - CNN",
      "description": "CNN recently asked Arabs, Muslims and Jews in America how they are facing the new reality of hate-motivated attacks against their communities. Nearly 800 people responded from across the country. These are their stories.",
      "url": "https://www.cnn.com/2023/11/18/us/hate-crimes-surge-us-muslims-arabs-react-reaj/index.html",
      "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/palestine-israel-split-1.jpg?c=16x9&q=w_800,c_fill",
      "publishedAt": "2023-11-18T09:00:00Z",
      "content": "Editors Note: CNN recently asked Arabs, Muslims and Jews in America how they are facing the new reality of hate-motivated attacks against their communities. Read how Jews in America say they have bee… [+7794 chars]"
    },
    {
      "source": {
        "id": "reuters",
        "name": "Reuters"
      },
      "author": "Andrew Goudsward",
      "title": "Colorado judge finds Trump engaged in 'insurrection' but allows him on ballot - Reuters",
      "description": "A Colorado judge on Friday allowed Donald Trump to remain on the ballot in the state's <a href=\"https://www.reuters.com/topic/event/us-elections/\">election next year</a>, but found that he \"engaged in insurrection\" by sparking the Jan. 6, 2021, attack on the …",
      "url": "https://www.reuters.com/legal/colorado-judges-allows-trump-primary-ballot-delays-decision-general-election-2023-11-18/",
      "urlToImage": "https://www.reuters.com/resizer/EHIx9repERxe1oqIP4z98_8Z7mA=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/W2J7H5LCBRNC7F5CAIP2NSFKN4.jpg",
      "publishedAt": "2023-11-18T08:27:06Z",
      "content": "WASHINGTON, Nov 17 (Reuters) - A Colorado judge on Friday allowed Donald Trump to remain on the ballot in the state's election next year, but found that he \"engaged in insurrection\" by sparking the J… [+3133 chars]"
    },
    {
      "source": {
        "id": "al-jazeera-english",
        "name": "Al Jazeera English"
      },
      "author": "Al Jazeera",
      "title": "‘Impossible’: Panic as Israel orders Gaza’s al-Shifa Hospital to evacuate - Al Jazeera English",
      "description": "Thousands of displaced people and patients, many in critical condition, do not have ambulances or a means to move.",
      "url": "https://www.aljazeera.com/news/2023/11/18/israel-gives-gazas-al-shifa-hospital-one-hour-to-evacuate",
      "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2023/11/2023-11-10T070242Z_705870806_RC2I84AU94L6_RTRMADP_3_ISRAEL-PALESTINIANS-GAZA-ANAESTHETICS-1700290895.jpg?resize=1200%2C630",
      "publishedAt": "2023-11-18T08:26:15Z",
      "content": "Israeli forces gave doctors, patients and displaced people at al-Shifa Hospital in Gaza one hour to evacuate the medical compound on Saturday, causing a great state of panic and fear, Al Jazeeras You… [+2669 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "YouTube"
      },
      "author": null,
      "title": "Major traffic jams expected during L.A. events amid 10 Freeway closure - KTLA 5",
      "description": "Major traffic jams and detour headaches remain as several major events in downtown Los Angeles take place this weekend. The jam-packed events will only be ex...",
      "url": "https://www.youtube.com/watch?v=_xXWLAEfTd0",
      "urlToImage": "https://i.ytimg.com/vi/_xXWLAEfTd0/maxresdefault.jpg",
      "publishedAt": "2023-11-18T07:31:36Z",
      "content": null
    },
    {
      "source": {
        "id": null,
        "name": "Sports Illustrated"
      },
      "author": "Patrick Andres",
      "title": "College Football World Aghast As Colorado Goes Down 42–7 to Washington State at Half - Sports Illustrated",
      "description": "How did the Buffaloes fall so far so fast?",
      "url": "https://www.si.com/college/2023/11/18/college-football-world-aghast-colorado-goes-down-washington-state-half",
      "urlToImage": "https://www.si.com/.image/ar_1.91%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cg_faces:center%2Cq_auto:good%2Cw_1200/MjAyMjkzMzI4NDcxOTI1Nzcy/usatsi_21921975.jpg",
      "publishedAt": "2023-11-18T05:57:43Z",
      "content": "This is not how Colorado’s story was supposed to end.\r\nGo back to September of this season. The Buffaloes were the darling of the sports world. Coach Deion Sanders appeared to have orchestrated an ov… [+1195 chars]"
    },
    {
      "source": {
        "id": "espn",
        "name": "ESPN"
      },
      "author": "Marc Raimondi",
      "title": "Jason Jackson shocks Yaroslav Amosov by TKO at Bellator 301 - ESPN - ESPN",
      "description": "Jason Jackson stunned undefeated champion Yaroslav Amosov by TKO in Round 3 to become the new welterweight champion at Bellator 301.",
      "url": "https://www.espn.com/mma/story/_/id/38924574/jason-jackson-shocks-yaroslav-amosov-tko-bellator-301",
      "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fphoto%2F2023%2F1118%2Fr1254699_1296x729_16%2D9.jpg",
      "publishedAt": "2023-11-18T05:42:00Z",
      "content": "Jason Jackson has witnessed the powerhouse Kill Cliff FC team pick up achievement after achievement over the years, serving as a training partner and corner for elite fighters such as former UFC welt… [+2414 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "DW (English)"
      },
      "author": "Deutsche Welle",
      "title": "Scholz addresses 'differences' with Erdogan on Israel - DW (English)",
      "description": "Turkish President Erdogan has criticized Israel's offensive in Gaza, while calling Hamas \"liberators.\" German Chancellor Scholz has called the comments \"absurd.\" The two leaders are meeting in Berlin for talks.",
      "url": "https://www.dw.com/en/scholz-addresses-differences-with-erdogan-on-israel/a-67464112",
      "urlToImage": null,
      "publishedAt": "2023-11-18T05:34:54Z",
      "content": "Turkish President Recep Tayyip Erdogan arrived in Berlin for talks with German Chancellor Olaf Scholz on Friday.\r\nThis is the Turkish leader's first visit to Germany since 2020. He arrived at a milit… [+3465 chars]"
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

  // useEffect(() => { fetchNews(country, category, query) }, [])
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
