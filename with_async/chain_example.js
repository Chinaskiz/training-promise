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

async function run() {
    try {
        await doSomething("foo");
        await doSomething("bar");
        await doSomething("baz");
        console.log("all done !");
    } catch(e) {
        throwError(e);
    }
}

run();
console.log("outside promise chain");