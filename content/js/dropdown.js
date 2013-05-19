var $doc = $(document)

$('.dropdown-toggle').mouseover(function(e) {
  $container = $(this).next('.dropdown-container')
  $('.dropdown-container').not($container).hide() // Hide any open dropdowns
  $container.toggle();
  e.stopPropagation();

  $doc.on('click', function() {
    $container.hide();
    $doc.unbind('click');
  });
});
