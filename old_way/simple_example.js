const { log, throwError } = require("../utils");


function doSomething(successCallback, failureCallback) {
    console.log("doing something...");

    if (Math.random() > .5) {
        successCallback("OK");
    } else {
        failureCallback("NOK");
    }
}

doSomething(log, throwError);