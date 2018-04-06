/* Node 未対応の場合 →  traceur --async-functions true main.js */
'use strict';
function countDown(second) {
  return new Promise(function(funcSuccess, funcFail) {
    const timeOutIDs = [];
    for (let i=second; i>=0; i--) {
      const timeOutID = setTimeout( () => {
        if(i===13) {
          timeOutIDs.forEach(clearTimeout); /* すべてクリア */
    return funcFail(new Error(`${i}という数は不吉過ぎます`));
  }
        i>0 ? console.log(i + '...') : funcSuccess(console.log("GO!"));},
           (second-i)*1000)
      timeOutIDs.push(timeOutID);
    }
  });
}

function launchRocket() {
  return new Promise(function(funcSuccess, funcFail) {
    if(Math.random() < 0.5) return funcFail(new Error("打ち上げ失敗"));
    console.log("発射!");
    setTimeout(function() {
      funcSuccess("周回軌道に乗った！");
    }, 2*1000); /* 超速のロケット */
  });
}

async function countDownAndLaunchRocket(secondsCountingDown) {
  try {
    await countDown(secondsCountingDown);
    console.log(await launchRocket());
  } catch (err) {
    console.error("管制塔、管制塔。トラブル発生... " + err.message);    
  }
}

countDownAndLaunchRocket(15);
