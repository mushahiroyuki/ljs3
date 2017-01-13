// "node ajaxServer.js" でサーバーを起動してから実行

$(function() {
  let TimerID = setInterval(refreshServerInfo, 200); // 自動更新

  function refreshServerInfo() {
    const $serverInfo = $('.serverInfo'); // htmlファイルのserverInfoの<div>を取得
    $.get('http://localhost:7070').then(
      function(data) { // 第1引数の関数 成功の時
        Object.keys(data).forEach(p => {
          $(`[data-replace="${p}"]`).text(data[p]);
        });
      },
      function(jqXHR, textStatus, err) { // 第2引数の関数 リジェクトされた時
	const $errorInfo = $('.error'); // htmlファイルのerrorの<div>を取得
        console.error("エラーが起こりました：" + err);
        $errorInfo.text("エラー：サーバーに接続できません。");
	clearInterval(TimerID);
      }
    );
  }

})
