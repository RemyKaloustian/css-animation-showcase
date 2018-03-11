$(document).ready(function(){

    console.log('init');
    let ids = [
        {title:'left-popup', link:'haha', },

    ];

    for (let index = 0; index < ids.length; index++) {
        $('body').append('<div class="popup slide-from-left" id="'+ids[index].title+'">'+
            '<h3 class="popup-title">'+ ids[index].title+'</h3>'+
            '<a href="'+ ids[index].link+ '"> See the code <a/><br/>'+ 
            '<button>Hide this dude</button>'+       
        '</div>' );        
    }
 
 });