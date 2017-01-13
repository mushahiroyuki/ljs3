const year = new Date().getFullYear(); /* 年（西暦）を得る。詳しくは15章参照 */
if(year % 4 !== 0) console.log(`${year}年は閏年ではない。`)
else if(year % 100 !== 0) console.log(`${year}年は閏年である。`)
else if(year % 400 !== 0) console.log(`${year}年は閏年ではない。`)
else console.log(`{$year}年は閏年である。`);
