const o = {
  name: 'Julie',
  greetBackwards: function() {
    const self = this; // thisを覚えておく

    function getReverseName() {
      let nameBackwards = '';
      for(let i=self.name.length-1; i>=0; i--) {
        nameBackwards += self.name[i];
      }
      return nameBackwards;
    } // getReverseNameの定義の終わり

    return `${getReverseName()} si eman ym ,olleH`;
  },
};
console.log(o.greetBackwards());
