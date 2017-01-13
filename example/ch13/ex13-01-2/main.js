function printLeapYearStatus() {
  const year = new Date().getFullYear();
  if(year % 4 !== 0) console.log(`${year}年は閏年ではない。`)
  else if(year % 100 !== 0) console.log(`${year}年は閏年である。`)
  else if(year % 400 !== 0) console.log(`${year}年は閏年ではない。`)
  else console.log(`{$year}年は閏年である。`);
}

printLeapYearStatus();
