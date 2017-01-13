// #@@range_begin(list1)
const EventEmitter = require('events').EventEmitter;

class Countdown extends EventEmitter {
  constructor(seconds, superstitious) { /* superstitious: 迷信深い */ 
    super();
    this.seconds = seconds;
    this.superstitious = !!superstitious; /* 「!!」は3章参照 */
  }
  go() { /* メソッドgoの定義 */
    const countdown = this;
    return new Promise(function(resolve, reject) {
      for(let i=countdown.seconds; i>=0; i--) {
        setTimeout(function() {
          if(countdown.superstitious && i===13)
            return reject(new Error(`${i}という数は不吉過ぎます`));
          countdown.emit('tick', i);
          if(i===0) resolve();
        }, (countdown.seconds-i)*1000);
      }
    });
  }
}
// #@@range_end(list1)

// #@@range_begin(list2)
const c = new Countdown(15);

c.on('tick', function(i) {
  if(i>0) console.log(i + '...');
});

c.go()
  .then(function() {
    console.log('GO!');
  })
  .catch(function(err) {
    console.error(err.message);
  })
// #@@range_end(list2)
