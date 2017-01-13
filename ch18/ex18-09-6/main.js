/* イベントハンドラを生成して、それを返す */
function logEvent(handlerName, type, cancel,
		  stop, stopImmediate) {
  /* ここが実際のイベントハンドラ */
  return function(evt) {
    if(cancel) evt.preventDefault();
    if(stop) evt.stopPropagation();
    if(stopImmediate) evt.stopImmediatePropagation();
    console.log(`${type}: ${handlerName}` +
		(evt.defaultPrevented ? ' (キャンセルされた)' : ''));
  }
}

/* 要素にイベントロガーを付加 */
function addEventLogger(element, type, action) {
  const capture = type === 'capture';
  element.addEventListener(
    'click',
    logEvent(element.tagName, type, action==='cancel',
	     action==='stop', action==='stop!'), capture);
}

const body = document.querySelector('body');
const div = document.querySelector('div');
const button = document.querySelector('button');

// #@@range_begin(list1)
addEventLogger(body, 'capture');
addEventLogger(body, 'bubble');
addEventLogger(div, 'capture', 'cancel');
addEventLogger(div, 'bubble');
addEventLogger(button, 'capture', 'stop!');
addEventLogger(button, 'bubble');
// #@@range_end(list1)
