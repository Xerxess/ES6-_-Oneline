
const timeout = 4000;
const promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve('异步操作成功');
    }, timeout)
});

const promise1 = function () {
    let promise = Promise.resolve({
        then: function (resolve, reject) {
            setTimeout(function () {
                resolve('转换成功');
            }, timeout)
        }
    });
    return promise;
}

const p2 = Promise.resolve(function(){
    alert('abc');
});

p2.then(function (s){
  console.log(typeof s)
});

export default function () {
    promise.then(function (res) {
        console.log(res);
    });

    promise1().then(function(){
        console.log('转换成功1');
    });
}