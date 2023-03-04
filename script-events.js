$(document).ready(()=>{

    $("#stream1_btn").on("mouseover", function() {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream1").addClass('highlight_stream');
   });

   $("#stream2_btn").on("mouseover", function() {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream2").addClass('highlight_stream');
   });

   $("#stream3_btn").on("mouseover", function() {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream3").addClass('highlight_stream');
   });


   $('.btn1').on({
        mouseenter: function(){
            $(this).css('color', 'red')
        },
        mouseleave: function(){
            $(this).css('color', 'white')
        },
        click: function(){
            $('img').hide('fade',1000)
        }

   });

   $('.btn2').on({
        click: function(){
            $('img').toggle(1000)
        }
   })

   $('.btn3').on({
        click: function(){
            $('img').slideToggle(1000)
        }
   })

   $('.btn4').on({
        click: function(){
            $('img').fadeTo(2000, 0.1)
        }
   })

   $('.btn5').on({
        click: function(){
            $('img').fadeTo(1000, 0).fadeTo(1000, 1)
        }
   })

   console.log($('.btn1').attr('class'))
   $('.btn1').attr('class', 'redBox bottom_button')

})

