const html = 'HTML with <a href="/one">one link</a>, and some JavaScript.' +
   '<script src="stuff.js"></script>';
const matches = html.match(/<area|<a|<link|<script|<source/ig);
console.log(matches); // [ '<a', '<script' ]
