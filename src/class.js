class cal {
    constructor() {
        this.name = '杨川';
        this.sex = '男';
        this.init();
    }
    init() {

    }
}

class MyArray extends Array {
    constructor(...args) {
      super(...args);
    }
  }
  
  var arr = new MyArray();
  arr[0] = 12;
  arr.length // 1
  
  

  console.log(arr);