const puppeteer = require('puppeteer');

let scrape = async () => {
    const browser = await puppeteer.launch({headless: false,timeout: 0});
    const page = await browser.newPage();

    await page.goto('https://www.agoda.com/pages/agoda/default/DestinationSearchResult.aspx?city=9395&checkIn=2018-01-08&los=1&rooms=1&adults=7&children=0&cid=-1&pagetypeid=1&origin=TH&tag=&gclid=&aid=130243&userId=9cd2ea20-775b-4692-94d6-f647642c664d&languageId=1&storefrontId=3&currencyCode=THB&htmlLanguage=en-us&trafficType=User&cultureInfoName=en-US&checkOut=2018-01-09&childages=&priceCur=THB&hotelReviewScore=5&tabId=1&issearchfromhomepage=true&ckuid=9cd2ea20-775b-4692-94d6-f647642c664d');    
   	//await page.goto('https://github.com/search?utf8=%E2%9C%93&q=john&type=');

   	const LENGTH_SELECTOR_CLASS = 'ssr-search-result';
   	const LIST_HOTEL_NAME_SELECTOR = '#reactPropertyList > ol > li:nth-child(INDEX) > a > div > section > div.hotel-info > ul > li:nth-child(1) > h3';
   	const LIST_HOTEL_NAME_SELECTORs = '#reactPropertyList > ol > li:nth-child(INDEX) > a > div.LazyLoad';
   	
   	//const a = '#js-pjax-container > div > div.columns > div.column.three-fourths.codesearch-results > div > ul > div:nth-child(INDEX) > div.col-8.pr-3 > h3 > a';
   // 	let listLength = await page.evaluate((sel) => {
   //  	return document.getElementsByClassName(sel).length;
  	// }, LENGTH_SELECTOR_CLASS);

  	for (let i = 1; i <= 20; i++) {
  		let usernameSelector = LIST_HOTEL_NAME_SELECTORs.replace("INDEX", i);
  		console.log(usernameSelector);

    	let email = await page.evaluate((sel) => {
        	let element = document.querySelector(sel);
        	return element? element.innerHTML: null;
      		}, usernameSelector);
    	console.log(email);
  	}
    //     let loop = 0;
    //     if (elements.length >= names.length) {
    //         loop = names.length;
    //     } else {
    //         loop = elements.length;
    //     }
    //     for (var i = 0; i <= loop-1; i++) {
    //         let name = names[i].innerText;
    //         let price = elements[i].innerText;
    //         let name_length = names.length;
    //         let price_length = elements.length;

    //         data.push({name,price,loop,name_length,price_length});
    //     }
    //     return data; // Return our data array
    // });

    //browser.close();
    //return listLength; // Return the data
};

scrape().then((value) => {
    console.log(value); // Success!
});