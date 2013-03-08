$doc       = $(document)
$toggle    = $('.dropdown-toggle')
$container = $('.dropdown-container')

$toggle.click(function(e) {
  $container.toggle();
  e.stopPropagation();

  $doc.on('click', function() {
    $container.hide();
    $doc.unbind('click');
  });
});
