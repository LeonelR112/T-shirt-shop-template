
$(document).ready(function(){

    $('body').ready(function(){
        let nav = document.querySelector('nav')
        let menu = document.getElementById('menuRes')

        if(window.innerWidth < 574){
            nav.style.visibility = 'hidden'
            menu.style.display = 'block'
        }
    })

    

    $(window).resize( function(e){
        let height = window.innerWidth
        let nav = document.querySelector('nav')
        let menu = document.getElementById('menuRes')
        console.log(height)

        if(height <= 574){
           nav.style.visibility = 'hidden'
           menu.style.display = 'block'
        }
        else{
            nav.style.visibility = 'visible'
            menu.style.display = 'none'
        }
    })
})

/*----------------------menu responsive----------------------- */
/*>>>>>>>>>>>>>>>>>>>> COPIAR EL HEADER DEL INDEX A LOS OTROS TEMPLATES<<<<<<<<<<<<<<<<<<<<< */

$(document.getElementById('menuRes')).click(function(e){
    e.preventDefault();
    console.log('button is working!')

    let menu = document.getElementById('menuResponsive');
    console.log(menu)
    menu.style.width = '100%'

    let links = menu.querySelectorAll('a')
    let linkExit = links[4];
    
        $(linkExit).click(function(e){
            e.preventDefault();
            menu.style.width = '0%'
        })
})
