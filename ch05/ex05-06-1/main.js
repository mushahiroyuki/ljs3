if (undefined) console.log("t"); else console.log("f"); // f
if (null) console.log("t"); else console.log("f"); // f
if (0) console.log("t"); else console.log("f"); // f
if (NaN) console.log("t"); else console.log("f"); // f
if ('') console.log("t"); else console.log("f"); // f

console.log("------");
const obj1 = {};
if (obj1) console.log("t"); else console.log("f"); // t
const arr = [];
if (arr) console.log("t"); else console.log("f"); // t
if (' ') console.log("t"); else console.log("f"); // t
if ('false')  console.log("t"); else console.log("f"); // t
