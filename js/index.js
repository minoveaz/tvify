$(function (){
  var $tvShowsContainer = $('#app-body2').find('.row-shows')

  // funcion para dar like al show
  $tvShowsContainer.on('click', 'i.like', function(ev){
    var $this = $(this);
    console.log($this)
    $this.closest('.fa').toggleClass('liked')
    $this.next('.card-block').toggleClass('text-liked')
  })

  function renderShows(shows){
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

  $('#app-body')
  .find('form')
  .submit(function (ev){
    ev.preventDefault();

    // resultado de busqueda
    var busqueda = $(this)
    .find('input[type="text"]')
    .val();
    var $loader = $('<div class="loader"></div>');
    $loader.appendTo($tvShowsContainer);
    $tvShowsContainer.find('.tv-show').remove();
    $.ajax({
      url:'http://api.tvmaze.com/search/shows',
      data: { q: busqueda},
      success: function (res, textStatus, xhr){
        $loader.remove();
        var shows = res.map(function(el){
          return el.show;
        })
        renderShows(shows);

      }
    })
  })

  //shows template html//
  var template = '<div class="col-xs-12 col-md-4 tv-show">'+
  '<div class="card" style="width: 15rem;">'+
  '<img class="card-img-top"src=":img:" alt=":img alt:"><i class="fa fa-heart like" aria-hidden="true"></i>'+
  '<div class="card-block" id="greetings">'+
  '<h4 class="card-title">:name:</h4><p class="card-text">:summary:</p>'+
  '<a href="#" class="btn btn-primary">Go somewhere</a></div></div></div>';

  //shows template html//

  // show request from API tvmaze

  $
  .ajax('http://api.tvmaze.com/shows')
  .then(function(shows){
    var $spinner = $('#app-body2').find('.loader').remove();
    renderShows(shows);
    // console.log(shows); para mirar JSON de datos del API
  })
})
