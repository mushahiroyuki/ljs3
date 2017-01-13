let suppliedOptions;
let options = suppliedOptions || { name: "デフォルト" }
console.log(options); // { name: 'デフォルト' }

suppliedOptions = null;
options = suppliedOptions || { name: "デフォルト" }
console.log(options); // { name: 'デフォルト' }

suppliedOptions = {name : "xxx"};
options = suppliedOptions || { name: "デフォルト" }
console.log(options); // { name: 'xxx' }



