exports.log = function (text) {
    console.log("then doing something else...");
    console.log(text);
}

exports.throwError = function (text) {
    console.log(`an error [${text}] occured, so doing something else...`);
}

