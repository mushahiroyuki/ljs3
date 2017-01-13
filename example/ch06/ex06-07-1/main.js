const o = {
  name: 'Julie',
  greetBackwards: function() { /* オブジェクトoのプロパティgreetBackwards */
    const getReverseName = () => {  /* アロー関数 */
      console.log(this); // { name: 'Julie', greetBackwards: [Function: greetBackwards] }
      let nameBackwards = '';
      for(let i=this.name.length-1; i>=0; i--) {
        nameBackwards += this.name[i];
      }
      return nameBackwards;
    }; /* ここまでアロー関数の定義 */

    return `${getReverseName()} si eman ym ,olleH`;
  }, /* オブジェクトoのプロパティgreetBackwardsの値の関数の定義の終わり */
}; /* オブジェクトoの定義の終わり */

console.log(o.greetBackwards()); // eiluJ si eman ym ,olleH
