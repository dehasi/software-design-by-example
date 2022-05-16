// opt + shift + f = format code

[1000, 1500, 500].forEach(t => {
    console.log(`about to setTimeout ${t}`)
    setTimeout(() => console.log(`Inside handler for ${t}`), 0)
}); 
