/**
 * Module Dependencies
 */

import $ from 'jquery'
import page from 'page'
import { getShows, searchShows } from 'src/tvmaze-api-client'
import renderShows from 'src/render'
import $tvShowsContainer from 'src/tv-shows-container'
import 'src/searchform'
import qs from 'qs'

page('/', function (ctx, next) {
  $tvShowsContainer.find('.tv-show').remove()
    getShows(function (shows) {
      var $spinner = $('#app-body2').find('.loader').remove();
      renderShows(shows);
    })
})

page('/search', function (ctx, next) {
  $tvShowsContainer.find('.tv-show').remove()
  var $loader = $('<div class="loader">');
  $loader.appendTo($tvShowsContainer);
  const busqueda = qs.parse(ctx.querystring)
  searchShows(busqueda, function (res) {
    $loader.remove();
    var shows = res.map(function (el) {
      return el.show;
    })

    renderShows(shows);
  })
})

page()
