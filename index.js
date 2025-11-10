function promise1() {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("amanda")
        }, 2000);
    })
}

function promise2() {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("this is the first first")
        }, 2000);
    })
}

function promise3() {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("this is the third first")
        }, 2000);
    })
}
Promise.race([promise1(), promise2(), promise3()])
.then((message)=>{console.log(message)})