var $doc = $(document),
    $allDropdowns = $('.dropdown-container');

// $('.dropdown-toggle').click(function(e) {
//   $container = $(this).next('.dropdown-container')
//   $allDropdowns.not($container).hide() // Hide any open dropdowns
//   $container.toggle();
//   e.stopPropagation();

//   $doc.on('click', function() {
//     $container.hide();
//     $doc.unbind('click');
//   });
// });


$('.dropdown-toggle').hover(
  function() {
    $container = $(this).next('.dropdown-container')
    $allDropdowns.not($container).hide() // Hide any open dropdowns
    $container.toggle();

    // Hide the dropdown if we move to somewhere besides the toggled dropdown
    $(this).on('mouseleave', function() {
      if (!$('.dropdown-container:hover').length) {
        $allDropdowns.hide();
        $(this).off('mouseleave');
      }
    });

    $container.on('mouseleave', function() {
      $allDropdowns.hide();
      $container.off('mouseleave');
    });

  }, function() {}
);
