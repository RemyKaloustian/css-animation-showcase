let animations = [
    {show:'slide-from-left', hide:'slide-to-left'},
    {show:'slide-from-right', hide:'slide-to-right'},
    {show:'slide-from-top', hide:'slide-to-top'},
    {show:'slide-from-bottom', hide:'slide-to-bottom'},    
    {show:'pop', hide:'unpop'},
    {show:'fade-in', hide:'fade-out'},
    {show:'rotate-from-center', hide:'rotate-to-center'},
    {show:'tour-de-france', hide:'tour-de-flandres'},
    {show:'flip', hide:'unflip'},
    {show:'flash', hide:'unflash'},
    {show:'zoom-out', hide:'zoom-in'},
    {show:'breathe-in', hide:'breathe-out'},
    
];

$(document).ready(function(){

    displayButtons();

    $('#buttons button').on('click', function(event) {
        //Animating the popup
        animID = $(event.target).attr('data-anim');
        $('#popup').removeClass();
        $('#popup').addClass(animations[animID].show);        
        $('#popup').addClass(animations[animID].show);

        //When clicking the close button
        $('#popup button').on('click', function (event) {
            //Animating the popup back
            $('#popup').removeClass(animations[animID].show);
            $('#popup').addClass(animations[animID].hide);
            
        });
    });  
 });//ready()

 function displayButtons(){
    for (let index = 0; index < animations.length; index++) {
        $('#buttons').append('<button data-anim="'+index+'">'+animations[index].show +'</button>')
    }
 }