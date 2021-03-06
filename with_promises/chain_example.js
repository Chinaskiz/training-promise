const { throwError } = require("../utils");


function doSomething(param) {
    console.log(`doing ${param}...`);

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > .2) {
                resolve(param);
            } else {
                reject(param);
            }
        });
    }, 1000);
}

doSomething("foo")
    .then(() => doSomething("bar"))
    .then(() => doSomething("baz"))
    .then(() => console.log("all done !"))
    .catch((error) => throwError(error));

console.log("test");