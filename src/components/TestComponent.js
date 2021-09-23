import React from "react";

class TestComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            element: ""
        };
    }

    testA = (x, y = 7, z = 42, ...a) => {
        return x + y + z + a;
    }

    functionTest = () => {
        // const arraTest = [234, "4332"];
        // const agr = (...t) => {
        //     return t;
        // };
        // let a = this.testA(1, "asd", 1,"324", 4, "dfsd");
        //
        // let b = agr(23,54,546,654);
        //
        // for(let i=0; i < b.length; i++){
        //    console.log(b[i]);
        // }

        // console.log(a);

        // let params = [ "hello", true, 7 ];
        // const other = [1, 2, ...params]; // [ 1, 2, "hello", true, 7 ]
        //
        // console.log(other)

        // function f (x, y, ...a) {
        //     return (x + y) * a.length;
        // }
        // f(1, 2, ...params) === 9;
        //
        // var str = "foo";
        // var chars = [ ...str ]; // [ "f", "o", "o" ]


        // let customer = {
        //   name: "Razvan",
        //   job: "It",
        // };
        //
        // let message = `Hello ${customer.name} i know that you work in ${customer.job}`;
        // console.log(message);
        //
        // let bar = 1;
        // let baz = 2;
        // let quux = "asa"
        //
        // let link =`http://example.com/foo?bar=${bar + baz}&quux=${quux}`;
        //
        // console.log("test link => "+ link);

        // function altTest(strings, ...values) {
        //   return (
        //           // strings[0] === "foo\n";
        //           strings[1] === "bar";
        //           // strings.raw[0] === "foo\\n";
        //           // strings.raw[1] === "bar";
        //           // values[0] === 42;
        //     )
        // }
        //
        // let b = `foo\n${ 42 }bar`;
        // let a = altTest`foo\n${ 42 }bar`
        // console.log(b);
        // console.log(String.raw`foo\n${ 42 }bar` === "foo\\n42bar");

        // let x = "razvan", y = 2000
        // const obj = { x, y }
        //
        // console.log(obj.y);

        // function quux(){
        //     return "cheieObiect";
        // }
        //
        // let obj = {
        //     foo: "bar",
        //     [ "baz-" + quux() + "-aha"]: "valoarea la cheia compusa"
        // }
        //
        // console.log(obj[ "baz-" + quux() + "-aha"].length);

        // const obj = {
        //     foo (a, b) {
        //         return a + b;
        //     },
        //     multiply(a, b){
        //         return a*b;
        //     },
        // }
        //
        // console.log(obj.multiply(41,2))


        // let list = [ 1, 2, 3 ]
        // let [ a, , b ] = list

        // let obj = { a: 1 }
        // let list = [ 1 ]
        // let { a, b = 2 } = obj
        // let [ x, y = 2 ] = list

        // function f ([ name, val ]) {
        //     console.log(name, val)
        // }
        // function g ({ name: n, val: v }) {
        //     console.log(n, v)
        // }
        // function h ({ name, val }) {
        //     console.log(val, name)
        // }
        // f([ "bar", 42 ])
        // g({ name: "foo", val:  7 })
        // h({ name: "bar", val: 42 })

        // class Shape {
        //     constructor (id, x, y) {
        //         this.id = id
        //         this.move(x, y)
        //     }
        //     move (x, y) {
        //         this.x = x
        //         this.y = y
        //     }
        // }
        //
        // const obj = new Shape(2,"raz", "And")

        // const aggregation = (baseClass, ...mixins) => {
        //     let base = class _Combined extends baseClass {
        //         constructor(...args) {
        //             super(...args)
        //             mixins.forEach((mixin) => {
        //                 mixin.prototype.initializer.call(this)
        //             })
        //         }
        //     }
        //     let copyProps = (target, source) => {
        //         Object.getOwnPropertyNames(source)
        //             .concat(Object.getOwnPropertySymbols(source))
        //             .forEach((prop) => {
        //                 if (prop.match(/^(?:constructor|prototype|arguments|caller|name|bind|call|apply|toString|length)$/))
        //                     return
        //                 Object.defineProperty(target, prop, Object.getOwnPropertyDescriptor(source, prop))
        //             })
        //     }
        //     mixins.forEach((mixin) => {
        //         copyProps(base.prototype, mixin.prototype)
        //         copyProps(base, mixin)
        //     })
        //     return base
        // };
        //
        // class Colored {
        //     initializer ()     { this._color = "white" }
        //     get color ()       { return this._color }
        //     set color (v)      { this._color = v }
        // }
        //
        // class ZCoord {
        //     initializer ()     { this._z = 0 }
        //     get z ()           { return this._z }
        //     set z (v)          { this._z = v }
        // }
        //
        // class Shape {
        //     constructor (x, y) { this._x = x; this._y = y }
        //     get x ()           { return this._x }
        //     set x (v)          { this._x = v }
        //     get y ()           { return this._y }
        //     set y (v)          { this._y = v }
        // }
        //
        // class Rectangle extends aggregation(Shape, Colored, ZCoord) {}
        //
        // const rect = new Rectangle(7, 42);
        // rect.z     = 1000
        // rect.color = "red"
        // console.log(rect.x, rect.y, rect.z, rect.color)

        // class Rectangle {
        //     constructor (width, height) {
        //         this._width  = width
        //         this._height = height
        //     }
        //     set width  (width)  { this._width = width               }
        //     get width  ()       { return this._width                }
        //     set height (height) { this._height = height             }
        //     get height ()       { return this._height               }
        //     get area   ()       { return this._width * this._height }
        // }
        // let r = new Rectangle(5, String(2))
        //
        // let c = String(43);
        // r.width = c;
        // console.log(r.area);
        // console.log(r.width);

        // let fibonacci = function* (numbers) {
        //     let pre = 0, cur = 1
        //     while (numbers-- > 0) {
        //         [ pre, cur ] = [ cur, pre + cur ]
        //         yield cur
        //     }
        // }
        //
        // for (let n of fibonacci(10000))
        //     console.log(n)
        //
        // let numbers = [ ...fibonacci(10000) ]
        // console.log(numbers);
        // let [ n1, n2, n3, ...others ] = fibonacci(1000)

        // let m = new Map()
        // let s = "Symbol()"
        // m.set(" hello", 42)
        // m.set(s, 34)
        // m.set(s, "@#424")
        // // m.get(s) === 34
        // // m.size === 2
        // for (let [ key, val ] of m.entries())
        //     console.log(key + " = " + val)


        // let obj = {
        //   a: "test1",
        //   b: "test2",
        // };
        //
        // let b = '{"a":"test1","b":"test2"}';
        // let pars = JSON.parse(b);
        //
        // console.log(JSON.stringify(obj));
        // console.log(pars.b);

        // const dest = {quux: 0};
        // const src1 = {foo: 1, bar: 2};
        // const src2 = {foo: 3, baz: 4};
        // const obj = Object.assign(dest, src1, src2)
        // console.log(dest.quux);
        // console.log(dest.foo);
        // console.log(dest.bar);
        // console.log(dest.baz);
        // console.log(obj);

        // let arr = [3,45,5,6,75,6,7,5];
        //
        // let found = arr.find((el,index) => {
        //    return el === 45 ? `${index}`: "";
        // });
        //
        // console.log(found);

        // console.log("Razvan,".repeat(1000));

        "hello".startsWith("ello", 1) // true
        "hello".endsWith("hell", 4)   // true
        "hello".includes("ell")       // true
        "hello".includes("ell", 1)    // true
        "hello".includes("ell", 2)    // false
    }

    render() {
        return (
            <p onClick={this.functionTest}>Text</p>
        );
    }
}

export default TestComponent;