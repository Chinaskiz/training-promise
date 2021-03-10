const { throwError } = require("../utils");


function doSomething(param) {
    setTimeout(() => {
        console.log(`doing ${param}...`);
    }, 1000);

    return new Promise((resolve, reject) => {
        if (Math.random() > .2) {
            resolve(param);
        } else {
            reject(param);
        }
    });
}

doSomething("foo")
    .then(() => doSomething("bar"))
    .then(() => doSomething("baz"))
    .then(() => console.log("all done !"))
    .catch((error) => throwError(error));