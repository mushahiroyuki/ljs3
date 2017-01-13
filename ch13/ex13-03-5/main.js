// #@@range_begin(list2)
const rainbowIterator = getRainbowIterator();
setInterval(function() {
  document.querySelector('.rainbow')
    .style['background-color'] = rainbowIterator.next().value;
}, 500);
// #@@range_end(list2)

// #@@range_begin(list1)
function getRainbowIterator() {
  const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
  let colorIndex = -1;
  return {
    next() {
      if(++colorIndex >= colors.length) colorIndex = 0;
      console.log("in iterator: "+colors[colorIndex])
      return { value: colors[colorIndex], done: false };
    }
  };
}
// #@@range_end(list1)