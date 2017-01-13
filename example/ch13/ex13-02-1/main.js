function isCurrentYearLeapYear() { /* 今年は閏年か？ */
  const year = new Date().getFullYear();
  if(year % 4 !== 0) return false;
  else if(year % 100 != 0) return true;
  else if(year % 400 != 0) return false;
  else return true;
}

console.log(isCurrentYearLeapYear()); // true  （閏年に実行した場合）
