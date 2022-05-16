// opt + shift + f = format code

const nonBlocking = (callback) => {
    setTimeout(callback, 0)
}

[1000, 1500, 500].forEach(t => {
    console.log(`about to set nonBlocking timeout ${t}`)
    nonBlocking(() => console.log(`Inside handler for ${t}`), 0)
});
