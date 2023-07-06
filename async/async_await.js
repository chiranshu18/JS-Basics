const fs = require("fs");
let ans = 1

function readFileCustom(filename) {
    return new Promise((resolve, reject) => {
      fs.readFile(`./${filename}`, 'utf8', (err, data) => {
        if(err) {
          reject(err);
        }
        else if(isNaN(data)){
            reject('Not a number')
        }
        else {
          resolve(data);
        }
      });
    });
  }

readFileCustom('text1.txt')
.then(data => {
    ans *= Number(data)
    console.log(ans)
    return readFileCustom('text2.txt')
})
.then(data => {
    ans *= Number(data)
    console.log(ans)
    return readFileCustom('text3.txt')
})
.then(data => {
    ans *= Number(data)
    console.log(ans)
    return readFileCustom('text4.txt')
})
.then(data => {
    ans *= Number(data);
    console.log(ans)
    return readFileCustom('text5.txt')
})
.then(data => {
    ans *= Number(data)
    console.log(ans)
})
.catch(err => {
    console.log(err)
})