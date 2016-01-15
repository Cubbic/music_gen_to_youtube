var request = require('request');
var cheerio = require('cheerio');

request('http://www.fakemusicgenerator.com/', function (error, response, html) {
  if (error) throw error;
  var $ = cheerio.load(html);

  $('tr').each(function(index,object){
  	var current_tr = $(this).html();
  	console.log(current_tr)
  })
  
});