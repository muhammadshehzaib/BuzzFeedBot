const { v4: uuidv4 } = require('uuid');
const buzzFeedBot = require('../processes/buzzFeedBot')
const Browser = require("./browser")
function Call() {

    //Assigning uuid to uniquely identify the objects


    //A wrapped Promise contained function to avoid Promise chaining
    this.performProcesses = () => {

        return new Promise(async (resolve, reject) => {

            //handling exception for the promises
            try {
                let browser = new Browser();
                await browser.startBrowser();

                let buzzFeed = await buzzFeedBot(browser)
                //return object, make it as api response object

                await browser.closeBrowser();

                return resolve({ status: 'success', message: 'Processes Performed' })

            } catch (e) {

                console.log(e)

                let returnObj = { status: 'failure', message: 'Processes Failed' };

                //return object in case of exception, make it as api response object
                return reject(returnObj);

            }

        })

    }
}

module.exports = Call