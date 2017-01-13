const o = {
  name: 'Julie',
  greetBackwards: function() {

    const getReverseName = function() {
      console.log(this); // { name: 'Julie', greetBackwards: [Function] } ◆→出力と違うけどOK？←◆
      let nameBackwards = '';
      for(let i=this.name.length-1; i>=0; i--) {
        nameBackwards += this.name[i];
      }
      return nameBackwards;
    };

    return `${getReverseName()} si eman ym ,olleH`;
  }, // greetBackwards のプロパティの関数の終わり
};

console.log(o.greetBackwards()); // eiluJ si eman ym ,olleH
