 /*tooltip jquery script
    $(document).ready(function(){
     $('[data-toggle="tooltip"]').tooltip(); 
    }); */
    $(document).ready(function(){
        $("#mycarousel").carousel( { interval: 2000 } );  
       
      $("#carouselButton").click(function(){
          if ($("#carouselButton").children("span").hasClass('fa-pause')) {
              $("#mycarousel").carousel('pause');
              $("#carouselButton").children("span").removeClass('fa-pause');
              $("#carouselButton").children("span").addClass('fa-play');
          }
          else if ($("#carouselButton").children("span").hasClass('fa-play')){
              $("#mycarousel").carousel('cycle');
              $("#carouselButton").children("span").removeClass('fa-play');
              $("#carouselButton").children("span").addClass('fa-pause');                    
          }
      });

     $('.open').click(function(){
         $('#loginModal').modal('show'); });
         
      $('.ropen').click(function(){
        $('#modalref').modal('show');});

      $('.close').click(function(){
        $('#loginModal').modal('hide');
        $('#modalref').modal('hide');});

       $('#close').click(function(){
        $('#loginModal').modal('hide');});

       $('#2close').click(function(){
        $('#modalref').modal('hide'); });

  });

