
// Module Despendencies

import $ from 'jQuery'

var $tvShowsContainer = $('#app-body2').find('.row-shows')

$tvShowsContainer.on('click', 'i.like', function(ev){
  var $this = $(this);
  console.log($this)
  $this.closest('.fa').toggleClass('liked')
  $this.next('.card-block').toggleClass('text-liked')
})

export default $tvShowsContainer
