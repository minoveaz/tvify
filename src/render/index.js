
// Module Despendencies

import $ from 'jQuery'
import $tvShowsContainer from 'src/tv-shows-container'

var template = `<div class="col-xs-12 col-md-4 tv-show">
<div class="card" style="width: 15rem;">
<img class="card-img-top"src=":img:" alt=":img alt:"><i class="fa fa-heart like" aria-hidden="true"></i>
<div class="card-block" id="greetings">
<h4 class="card-title">:name:</h4><p class="card-text">:summary:</p>
<a href="#" class="btn btn-primary">Go somewhere</a></div></div></div>`

export default function renderShows(shows){
  $tvShowsContainer.find('.loader').remove();
  shows.forEach(function(show){
    var article = template
    .replace(':img:', show.image.medium)
    .replace(':name:', show.name)
    .replace(':summary:',show.summary)
    .replace('img alt', show.name +"Logo")

    var $article = $(article)
    $article.hide();
    $tvShowsContainer.append($article.slideDown())

  })
}
