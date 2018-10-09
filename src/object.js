/**
 * Object
 */

/**
 * 对象合并
 */
export var assign = function () {
    const object1 = {
        a: 1,
        b: 2,
        c: 3
    };
    const object2 = Object.assign({ c: 4, d: 5 }, object1);
    console.log(object2.c, object2.d);
}

/**
 * 使用现有对象创建新对象，以提供新创建的对象__proto__。
 */
export var create = function () {
    const person = {
        isHuman: false,
        printIntroduction: function () {
            console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
        }
    };

    const me = Object.create(person);

    me.name = "Matthew"; // "name" is a property set on "me", but not on "person"
    me.isHuman = true; // inherited properties can be overwritten

    me.printIntroduction();
    // expected output: "My name is Matthew. Am I human? true"
}

/**
 * 给定对象的原型
 */
export var getPrototypeOf = function () {
    const prototype1 = {};
    const object1 = Object.create(prototype1);

    console.log(Object.getPrototypeOf(object1) === prototype1);
    // expected output: true
}

/**
 * 封闭对象，不得添加删除属性，但可以修改已存在的属性value
 */
export var seal = function () {
    const object1 = {
        property1: 42
    };

    Object.seal(object1);
    object1.property1 = 33;
    console.log(object1.property1);
    // expected output: 33
    object1.dd = 'a'
    delete object1.property1; // cannot delete when sealed
    console.log(object1.property1);
    console.log(object1.dd);
    // expected output: 33
}