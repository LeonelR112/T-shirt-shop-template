
$(document).ready(function(){
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
        console.log(height)

        if(height <= 574){
           nav.style.visibility = 'hidden'
        }
        else{
            nav.style.visibility = 'visible'
        }
    })
})
