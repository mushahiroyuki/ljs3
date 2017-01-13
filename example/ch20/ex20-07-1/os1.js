const os = require('os');

console.log("ホスト名: " + os.hostname());
console.log("OSのタイプ: " + os.type());
console.log("OSのフラットフォーム: " + os.platform());
console.log("OSのリリース: " + os.release());
console.log("OSのuptime: " +
    (os.uptime()/60/60/24).toFixed(1) + " days");
console.log("CPUのアーキテクチャ: " + os.arch());
console.log("CPUの個数: " + os.cpus().length);
console.log("メモリ量: " +
    (os.totalmem()/1e6).toFixed(1) + " MB");
console.log("フリーメモリ: " +
    (os.freemem()/1e6).toFixed(1) + " MB");
