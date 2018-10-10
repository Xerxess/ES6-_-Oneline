
var generator = function* () {
    yield 'hello';
    yield 'snrkthh';
    return 'over';
}

var hw = generator();

console.log(hw.next());
console.log(hw.next());
console.log(hw.next());

function* gen() {
    yield 123 + 456;
}

function* gen2() {
    yield function () {
        return 'backcall';
    };
}

var hw1 = gen();
var hw2 = gen2();

console.log(hw1.next());
console.log(hw2.next().value());

function* f() {
    var reset
    console.log(reset + 'a');
    reset = yield '第一次next';
    console.log(reset + 'a');
    reset = yield '第二次next';
    console.log(reset);
}

var g = f();

console.log(g.next('第一次'));
g.next('第二次');
g.next('第三次');

function* logGenerator() {
    console.log(0);
    console.log(1, yield);
    console.log(2, yield);
    console.log(3, yield);
}

var gen = logGenerator();

// the first call of next executes from the start of the function
// until the first yield statement
gen.next();             // 0
console.log(gen.next('pretzel'));
gen.next('california'); // 2 california
gen.next('mayonnaise'); // 3 mayonnaise


let gen_1 = function* () {
    yield 'abc';
}
let gen_2 = function* () {
    yield 'abc';
}


// -----------------------------------------------------------

const generator = function* () {
    let s = [];
    let fn = yield function () {
        s.push('开始操作')
    };
    yield setTimeout(() => {
        s.push('异步操作成功');
        fn();
    }, 500);
    yield function () {
        s.push('结束');
    }();
    console.log(s.join(','));
}

let g = generator();
g.next().value();
g.next(function () {
    console.log(g.next());
    g.next();
});