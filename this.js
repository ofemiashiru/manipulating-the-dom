$(document).ready(()=>{

    $('p').click(function(){ // 'p' refers to all paragraphs
        $(this).slideToggle('slow'); // this keyword refers to the individual p element clicked
    })

    $('button').on({
        mouseenter: function(){
            $(this).removeClass('make-red').addClass('make-blue')
        },
        mouseleave: function(){
            $(this).removeClass('make-blue').addClass('make-red')
        },
        click: function(){
            $(this.previousElementSibling).slideToggle('slow')// using this and tapping into a property 
        }
    })

})