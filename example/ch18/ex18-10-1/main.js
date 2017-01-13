function refreshServerInfo() {
  const req = new XMLHttpRequest();
  req.addEventListener('load', function() {
    // *** 値を埋め込むコードをここに追加する ***
    console.log(this.responseText);
  });
  req.open('GET', 'http://localhost:7070', true);
  req.send();
}

refreshServerInfo();
