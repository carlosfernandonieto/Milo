//Custom JS
jQuery(document).ready(function($) {
    // init Isotope
    var $grid = $('.grid').isotope({
        itemSelector: '.element-item',
        layoutMode: 'fitRows',
        gutter: 10,
        getSortData: {
        name: '.name',
        symbol: '.symbol',
        number: '.number parseInt',
        category: '[data-category]',
        weight: function( itemElem ) {
            var weight = $( itemElem ).find('.weight').text();
            return parseFloat( weight.replace( /[\(\)]/g, '') );
        }
        }
    });

    $('.grid').imagesLoaded( function() {
      // images have loaded
    });

    // Lonchera
    var $gridLonchera = $('.grid-lonchera').isotope({
        itemSelector: '.element-item',
        layoutMode: 'fitRows',
        gutter: 10,
        getSortData: {
        name: '.name',
        symbol: '.symbol',
        number: '.number parseInt',
        category: '[data-category]',
        weight: function( itemElem ) {
            var weight = $( itemElem ).find('.weight').text();
            return parseFloat( weight.replace( /[\(\)]/g, '') );
        }
        }
    });

    // init Isotope
    var $gridBeneficios = $('.grid-beneficios').isotope({
      itemSelector: '.element-item',
      layoutMode: 'fitRows',
      gutter: 10,
      getSortData: {
      name: '.name',
      symbol: '.symbol',
      number: '.number parseInt',
      category: '[data-category]',
      weight: function( itemElem ) {
          var weight = $( itemElem ).find('.weight').text();
          return parseFloat( weight.replace( /[\(\)]/g, '') );
      }
      }
    });
    // layout Isotope after each image loads
    $grid.imagesLoaded().progress( function() {
      $grid.isotope('fitRows');
    }); 

    // filter functions
    var filterFns = {
        // show if number is greater than 50
        numberGreaterThan50: function() {
        var number = $(this).find('.number').text();
        return parseInt( number, 10 ) > 50;
        },
        // show if name ends with -ium
        ium: function() {
        var name = $(this).find('.name').text();
        return name.match( /ium$/ );
        }
    };
    
    // bind filter button click
    $('#filters').on( 'click', 'button', function() {
        var filterValue = $( this ).attr('data-filter');
        // use filterFn if matches value
        filterValue = filterFns[ filterValue ] || filterValue;
        $grid.isotope({ filter: filterValue });
    });

    // bind filter button click
    $('#filters').on( 'click', 'button', function() {
        var filterValue = $( this ).attr('data-filter');
        // use filterFn if matches value
        filterValue = filterFns[ filterValue ] || filterValue;
        $gridLonchera.isotope({ filter: filterValue });
    });

    // change is-checked class on buttons
    $('.button-group').each( function( i, buttonGroup ) {
        var $buttonGroup = $( buttonGroup );
        $buttonGroup.on( 'click', 'button', function() {
        $buttonGroup.find('.is-checked').removeClass('is-checked');
        $( this ).addClass('is-checked');
        });
    });

    // Slick

    $('.slides-evento').slick({
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
    });
    $('.slides-evento').slickLightbox({
        src: 'src',
        itemSelector: '.item img'
    });
});
