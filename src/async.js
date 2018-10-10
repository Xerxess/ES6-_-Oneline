let asyncfn = async function () {
    let promise1 = await new Promise(function (ok, error) {
        setTimeout(() => {
            error('执行成功');
        }, 4000);
    });
    console.log(promise1);
    let promise2 = await '已经完成了';
    console.log(promise2);
    return '已经完成了';
}

asyncfn().then(function (res) {
    console.log(res);
}).catch((error) => {
    console.log(error);
});

let asyncfn2 = async function () {
    let promise1 =  new Promise(function (ok, error) {
        setTimeout(() => {
            ok('执行1');
        }, 4000);
    });
    let promise2 =  new Promise(function (ok, error) {
        setTimeout(() => {
            ok('执行2');
        }, 3000);
    });
    await promise1;
    await promise2;
    return '已经完成了';
}

let asyncfn3 = async function () {
    await new Promise(function (ok, error) {
        setTimeout(() => {
            ok('执行1');
        }, 4000);
    });
    await new Promise(function (ok, error) {
        setTimeout(() => {
            ok('执行2');
        }, 3000);
    });
    return '已经完成了';
}

asyncfn2().then(function(){
    console.log('asyncfn2');
});
asyncfn3().then(function(){
    console.log('asyncfn3');
});
