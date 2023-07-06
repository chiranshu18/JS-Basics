const fs = require("fs");

fs.readFile("./text.txt", "utf8", (err, text) => {
    console.log(text)
})

fs.readFile("./text2.txt", "utf8", (err, text2) => {
    console.log(text2)
})

fs.readFile("./text3.txt", "utf8", (err, text3) => {
    console.log(text3)
})
