export function log(text) {
    console.log("then doing something else...");
    console.log(text);
}

export function throwError(text) {
    console.log(`an error [${text}] occured, so doing something else...`);
}

