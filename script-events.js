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
            $('img').toggle('blind', 1000)
        }
   })
})