const { log, throwError } = require("../utils");


function doSomething() {
    console.log("doing something...");

    return new Promise((resolve, reject) => {
        if (Math.random() > .5) {
            resolve("OK");
        } else {
            reject("NOK");
        }
    });
}

doSomething().then(log).catch(throwError);