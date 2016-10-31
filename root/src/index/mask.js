import $ from 'jquery'

require('./mask.scss');

$(document).ready(function(){
  let $mask = $('#mask');
  $('button', $mask).click(() => {
    $mask.remove();
  })
})