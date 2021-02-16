var css_metronom = '../../reveal.js/css/print/pdf.css';
var css_paper = '../../reveal.js/css/print/paper.css';

var link = document.createElement('link');
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = window.location.search.match(/print-pdf/gi) ? css_metronom : css_paper;
document.getElementsByTagName('head')[0].appendChild(link);