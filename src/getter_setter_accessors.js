/**
 * es5中，对象的Getter访问者，Setter访问者
 */
var getter_setter = {
    get x() { return this.logs; },
    set x(val) {
        this.logs = val + '已修改值';
    },
    logs:null
}
export default getter_setter;