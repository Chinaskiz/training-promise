const { throwError } = require("../utils");


function doSomething(param, successCallback, failureCallback) {
    console.log(`doing ${param}...`);

    if (Math.random() > .3) {
        setTimeout(() => {
            successCallback(param);
        }, 1000);
    } else {
        setTimeout(() => {
            failureCallback(param);
        }, 1000);
    }
}

doSomething("foo", function () {
    doSomething("bar", function () {
        doSomething("baz", function () {
            console.log("all done !")
        }, throwError);
    }, throwError)
}, throwError);