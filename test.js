const puppeteer = require('puppeteer');

let scrape = async () => {
    const browser = await puppeteer.launch({headless: false,timeout: 0});
    const page = await browser.newPage();

    await page.goto('https://www.agoda.com/pages/agoda/default/DestinationSearchResult.aspx?city=9395&checkIn=2018-01-08&los=1&rooms=1&adults=1&children=0&cid=-1&pagetypeid=1&origin=TH&tag=&gclid=&aid=130243&userId=9cd2ea20-775b-4692-94d6-f647642c664d&languageId=1&storefrontId=3&currencyCode=THB&htmlLanguage=en-us&trafficType=User&cultureInfoName=en-US&checkOut=2018-01-09&childages=&priceCur=THB&hotelReviewScore=5&tabId=1&issearchfromhomepage=true&ckuid=9cd2ea20-775b-4692-94d6-f647642c664d');    

   	//const LENGTH_SELECTOR_CLASS = 'ssr-search-result';
   	//const LIST_HOTEL_NAME_SELECTOR = '#reactPropertyList > ol > li:nth-child(INDEX) > a > div > section > div.hotel-info > ul > li:nth-child(1) > h3';
   	const LIST_HOTEL_NAME_SELECTORs = '#reactPropertyList > ol > li:nth-child(INDEX) > a > div.LazyLoad.is-visible';


  	for (let i = 1; i <= 20; i++) {
  		let usernameSelector = LIST_HOTEL_NAME_SELECTORs.replace("INDEX", i);
  		console.log('');
  		console.log('list no : ' + i);

    	let email = await page.evaluate((sel) => {
        	let element = document.querySelector(sel);
        	return element? element.innerHTML: null;
      		}, usernameSelector);
    	console.log(email);
  	}
};

scrape().then((value) => {
    console.log(value); // Success!
});