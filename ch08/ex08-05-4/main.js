// Donald Knuth's algorithm for calculating variance:
// Art of Computer Programming, Vol. 2: Seminumerical Algorithms, 3rd Ed., 1998
const data = [3.3, 5, 7.2, 12, 4, 6, 10.3];
const stats = data.reduce((a, x) => {
  a.N++;
  let delta = x - a.mean;
  a.mean += delta/a.N;
  a.M2 += delta*(x - a.mean);
  return a;
}, { N: 0, mean: 0, M2: 0 });
if(stats.N > 2) {
  stats.variance = stats.M2 / (stats.N - 1);
  stats.stdev = Math.sqrt(stats.variance);
}
console.log(stats);
/*　結果
{ N: 7,
  mean: 6.828571428571428,
  M2: 63.41428571428572,
  variance: 10.56904761904762,
  stdev: 3.2510071699471257 }  
*/
