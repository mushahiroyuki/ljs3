const input = "One line\nTwo lines\nThree lines\nFour";
const beginnings = input.match(/^\w+/mg);
console.log(beginnings); // [ 'One', 'Two', 'Three', 'Four' ]
const endings = input.match(/\w+$/mg);
console.log(endings); // [ 'line', 'lines', 'lines', 'Four' ]

const input2 = "あの頃が最高だったな〜。\nあの頃は最悪でもあったな〜。\n"
                + "あいつは元気かな〜。";
const beginning2 = input2.match(/^.*?[はが]/mg);
console.log(beginning2); // [ 'あの頃が', 'あの頃は', 'あいつは' ]
