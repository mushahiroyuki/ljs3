// #@@range_begin(list1)
const EventEmitter = require('events').EventEmitter;

class Countdown extends EventEmitter {
  constructor(seconds, superstitious) {
    super();
    this.seconds = seconds;
    this.superstitious = !!superstitious;
  }
  go() {
    const countdown = this;
    const timeoutIds = [];
    return new Promise(function(resolve, reject) {
      for(let i=countdown.seconds; i>=0; i--) {
        timeoutIds.push(setTimeout(function() {
          if(countdown.superstitious && i===13) {
            /* ペンディング中のタイムアウトをすべてクリアする */
            timeoutIds.forEach(clearTimeout);
            return reject(new Error("この数は不吉過ぎます"));
          }
          countdown.emit('tick', i);
          if(i===0) resolve();
        }, (countdown.seconds-i)*1000));
      }
    });
  }
}

// #@@range_end(list1)

// #@@range_begin(list2)
const c = new Countdown(15, true) /* ←この数字を変更してテスト */
	.on('tick', function(i) {  /* 'on'にチェイン可能 */
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
