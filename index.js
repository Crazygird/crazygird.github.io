$(document).ready(function()
{
  var rld_cnt=parseInt($.cookie('rld_cnt')||0)+1;
  $.cookie('rld_cnt',rld_cnt);
  var text = ["Potato","RIP Internet Explorer"];
  $('#myTxt').html(text[rld_cnt%2]);

});