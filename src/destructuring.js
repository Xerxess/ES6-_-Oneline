/**
 * 解构
 *
 * @export
 */

const myset = new Set();
const arrayInit = function () {
    /**数据解构*/
    let a, b;
    [a = 'default_a', b = 'default_b'] = [1, 2];
    console.log('info:Array');
    console.log(a, b);
    //默认值
    [a = 5, b = 7] = [1];
    console.log(a); // 1
    console.log(b); // 7

    let [...[x1,x2,x3]]=[]
}


const objectInit = function () {
    /**Object解构*/
    let { obj_a, obj_b: a = {} } = { 'obj_a': ['obj_a', 'obj_b'] };
    console.log('info:Object');
    console.log(obj_a, a);

    let { ...obj_c } = { 'obj_c': ['obj_c'], 'obj_d': 'obj_d' };
    console.log('info:Object');
    console.log(obj_c);
}

myset.add(arrayInit);
myset.add(objectInit);
export default function () {
    for (let item of myset) {
        item();
    }

}