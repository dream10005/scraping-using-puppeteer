const puppeteer = require('puppeteer');

let scrape = async () => {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();

    await page.goto('https://www.agoda.com/pages/agoda/default/DestinationSearchResult.aspx?asq=u2qcKLxwzRU5NDuxJ0kOF3T91go8JoYYMxAgy8FkBH1BN0lGAtYH25sdXoy34qb9rkCeS7WVllgubFhql1ELi8Uo4MCuypzPf4U0Lb3y0guL3rDPcI%2FcL%2FwdLuWDpKebG5stZZscvjQurvqGHKlLjz0BcPPZZwqDZ4BPHadZduIe5G7SBzk%2BJOTHfval8iN2WaoYtZmgpreaMNKzwOsz4g%3D%3D&city=9395&tick=636502525905&txtuuid=4b81e509-6cae-4b26-ac70-bc821fbd94c2&pagetypeid=1&origin=TH&cid=-1&tag=&gclid=&aid=130243&userId=9cd2ea20-775b-4692-94d6-f647642c664d&languageId=1&storefrontId=3&currencyCode=THB&htmlLanguage=en-us&trafficType=User&cultureInfoName=en-US&textToSearch=bangkok&guid=4b81e509-6cae-4b26-ac70-bc821fbd94c2&rooms=1&adults=2&children=0&childAges=&checkIn=2018-01-08&checkOut=2018-01-09&isUpdateAsq=true&los=1&childages=&priceCur=THB&hotelReviewScore=5&tabId=1&issearchfromhomepage=true&ckuid=9cd2ea20-775b-4692-94d6-f647642c664d');    

    const result = await page.evaluate(() => {
        let data = []; // Create an empty array that will store our data
        let elements = document.querySelectorAll('.price.dark-gray1'); // Select all Products
        let names = document.querySelectorAll('h3.hotel-name span');
        // for (var element of elements){ // Loop through each proudct
        //     let title = element.innerText; // Select the title
        //     let price = element.innerText; // Select the price

        //     data.push({title, price}); // Push an object with the data onto our array
        // }


        // let a = elements[1].innerText;
        // let b = names[1].innerText;

        // data.push({a,b});
        let loop = 0;
        if (elements.length >= names.length) {
            loop = names.length;
        } else {
            loop = elements.length;
        }
        for (var i = 0; i <= loop-1; i++) {
            let name = names[i].innerText;
            let price = elements[i].innerText;
            let name_length = names.length;
            let price_length = elements.length;

            data.push({name,price,loop,name_length,price_length});
        }
        return data; // Return our data array
    });

    browser.close();
    return result; // Return the data
};

scrape().then((value) => {
    console.log(value); // Success!
});