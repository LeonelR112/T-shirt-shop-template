
$(document).ready(function(){

    if(window.innerWidth < 574){
        document.querySelector('nav').style.visibility = 'hidden'
        document.getElementById('menuRes').style.display = 'block'
    }
/*
    let background1 = document.getElementById('background1')

    window.addEventListener('scroll', (e) => {
       let last_known_scroll_position = window.scrollY
       let bgpy = background1.style.backgroundPositionY

       background1.style.backgroundPositionY = 
       console.log('ultima posicion: '+ last_known_scroll_position)
       console.log(bgpy)
    })*/

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
