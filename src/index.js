import get_set from './getter_setter_accessors';

console.log(get_set.x);
get_set.x = "test";
console.log(get_set.x);

var obj = {
    a: 'a'
}

Object.defineProperty(obj, 'b', {
    configurable:true,
    enumerable:true,
    get: function () {
        this.a;
    },
    set: function (v) {
        this.a = 'b';
    }
})

console.log(Object.getOwnPropertyDescriptor(obj, 'b'));


for(var key in obj){
    console.log(key);
}

console.log(Object.keys(obj));

const entries = new Map([
    ['foo', 'bar'],
    ['baz', 42]
  ]);
  
//   const obj1 = Object.fromEntries(entries);
  
//   console.log(obj1);

  let fooKey = Symbol("foo");

  let foo_obj={};
  foo_obj[fooKey]='Symbol';
  console.log(foo_obj[fooKey]);