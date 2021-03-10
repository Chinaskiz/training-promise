import { throwError } from "../utils.js";

function doSomething(param) {
    console.log(`doing ${param}...`);

    return new Promise((resolve, reject) => {
        if (Math.random() > .3) {
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