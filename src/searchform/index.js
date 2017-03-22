
// Module Despendencies

import $ from 'jQuery'
import page from 'page'

$('#app-body')
.find('form')
.submit(function (ev){
  ev.preventDefault();

  var busqueda = $(this)
  .find('input[type="text"]')
  .val();

  page(`/search?q=${busqueda}`)
  // resultado de busqueda


})
