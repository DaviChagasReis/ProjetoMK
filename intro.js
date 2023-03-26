$(document).ready(function(){
    $("#flex1").hide();

    $('#btnsubzero').click(function(event){
        event.preventDefault ();
        $("#flex3").hide('slow');
        $("#flex2").hide('slow');
        $("#flex1").toggle('slow');
    });
    



    $("#flex2").hide();

    $('#btnraiden').click(function(event){
        event.preventDefault ();
        $("#flex1").hide('slow');
        $("#flex3").hide('slow');
        $("#flex2").toggle('slow');
    });



    $("#flex3").hide();

    $('#btnscorpion').click(function(event){
        event.preventDefault ();
        $("#flex1").hide('slow');
        $("#flex2").hide('slow');
        $("#flex3").toggle('slow');
    }); 

})