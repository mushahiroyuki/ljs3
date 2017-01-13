/* Node 未対応の場合 →  traceur --async-functions true main.js */
'use strict';
function カウントダウンする(秒数) {
  return new Promise(function(成功時の関数, 失敗時の関数) {
    const タイムアウトID配列 = [];
    for (let i=秒数; i>=0; i--) {
      const タイムアウトID = setTimeout( () => {
	if(i===13) {
          タイムアウトID配列.forEach(clearTimeout); /* すべてクリア */
	  return 失敗時の関数(new Error(`${i}という数は不吉過ぎます`));
	}
        i>0 ? console.log(i + '...') : 成功時の関数(console.log("GO!"));},
					 (秒数-i)*1000)
      タイムアウトID配列.push(タイムアウトID);
    }
  });
}

function ロケットを打ち上げる() {
  return new Promise(function(成功時の関数, 失敗時の関数) {
    if(Math.random() < 0.5) return 失敗時の関数(new Error("打ち上げ失敗"));
    console.log("発射!");
    setTimeout(function() {
      成功時の関数("周回軌道に乗った！");
    }, 2*1000); /* 超速のロケット */
  });
}

async function カウントダウン後ロケットを打ち上げる(カウントダウンの秒数) {
  try {
    await カウントダウンする(カウントダウンの秒数);
    console.log(await ロケットを打ち上げる());
  } catch (err) {
    console.error("管制塔、管制塔。トラブル発生... " + err.message);    
  }
}

カウントダウン後ロケットを打ち上げる(15);
