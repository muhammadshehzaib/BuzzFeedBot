const selectors = require("../selectors");

const buzzFeedBot = (browser) => {
    return new Promise(async (resolve, reject) => {
        try {
            let page = browser.page;
            await page.goto(
                "https://www.buzzfeed.com/nusrat21/things-so-amazing-youll-break-into-song-dance"
            );
            let parents_Element = await page.$$(selectors.ELEMENT);
            for (let i = 0; i <= parents_Element.length; i++) {
                let parent_Element = parents_Element[i];
                let price = await parent_Element.$eval(selectors.PRICE, (les => les.getAttribute('data-vars-price.value')))
                if (price > 25) {
                    let btn = await parent_Element.$(selectors.BTN)
                    await btn.click(selectors.BTN)
                }
            }
            return resolve({ status: 'success', message: 'Processes Performed' });
        } catch (e) {
            console.log(e);
            return reject({ status: 'failure', message: 'Processes Failed' });
        }
    });
};

module.exports = buzzFeedBot;
