let [a, b, c] = [1, 2, 3];
const const1 = function () {
    console.log('const');
};



const1();

console.log(a, b, c);

let fun = function (a, ...s) {
    console.log(a);
    console.log(s);
}

let f1 = function ({ name, sex }) {
    console.log(name);
    console.log(sex);
}

function push(array, ...items) {
    items.forEach(function (item) {
        array.push(item);
        console.log(item);
    });
}


push([], 1, 2, 3);

fun('a', { name: '杨川', sex: '男' }, 'b', 'c');

f1({

    name: 'name',
    sex: 'sex'
});


@testable
class MyTestableClass {
    // ...
}

function testable(target) {
    target.isTestable = true;
}

MyTestableClass.isTestable // true

console.log(MyTestableClass.isTestable);