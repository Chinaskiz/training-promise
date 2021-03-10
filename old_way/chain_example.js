import { throwError } from "../utils.js";

function doSomething(param, successCallback, failureCallback) {
    console.log(`doing ${param}...`);

    if(Math.random() > .3) {
        successCallback(param)
    } else {
        failureCallback(param)
    }
}

doSomething("foo", function () {
    doSomething("bar", function () {
        doSomething("baz", function () {
            console.log("all done !")
        }, throwError);
    }, throwError)
}, throwError);