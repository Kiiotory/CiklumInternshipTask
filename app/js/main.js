$(document).ready(function() {


    $('#btn__call').click(function() {
        var id = $(this).data('id');
        $('.main-header--search__sm').toggleClass('show');
        $('.main-header--search__sm--wrapper').toggleClass('show');
        $('.drop-box').toggleClass('margin-db');
    });


    //-----------------------------

    $(document).on('click', function() {
        if ($(e.target).closest('.btn-menu').length || $(e.target).closest('.list--dropdown').length) return;
        $('.list--dropdown').hide();
        e.stopPropagation();
    });

    $('.main-header__sm--btn').on('click', function() {

        $('.nav-wrapper').toggleClass('nav-mobile');
    });
    
    //-----------------------------

    $('.btn-menu').on('click', function() {
        $(this).siblings('.list--dropdown').slideToggle(400);
    });

     //-----------------header-menu-------------

   

         var  memoria = $('.list--dropdown').height();
      $('.has-children').hover(function() {
          $('.child', this).show();
          memoria = $('.list--dropdown').height();
          var menuDropInner = $('.child', this).height();
          var menuDrop = $('.list--dropdown').height();
        
          if(menuDropInner > menuDrop) {  
              $('.list--dropdown').height(menuDropInner);
          } else {
              $('.child').height(menuDrop);
          }
              
      },  function() {
          $('.child', this).hide();
          $('.child').height('');
          $('.list--dropdown').height(memoria);

      });

     
    //-----------------------------
    
    $('.nav-columns__show').on('click', function () {
        if($(window).width() < 767) {
           $(this).next('ul').slideToggle('slow');
           $(this).children().toggleClass('rotate');

        } else {
           $(this).next('ul').show();
        }
      
    })

   

})
