function mudarImg() {
    let msg = document.querySelector('#msg')
    let img = document.querySelector('#imagem')
    let data = new Date()
    let hora = data.getHours()

    msg.innerHTML = `Agora são ${hora}horas`
                                            
    if (hora >= 0 && hora < 12) { 
        img.src = 'fotomanha.jpg'
        document.body.style.background = '#efbb11'

    } else if (hora >= 12 && hora <= 18) {
        img.src = 'fototarde.jpg'
        document.body.style.background = '#ef7f07'

    } else if (hora >= 18 && hora < 24) {
        img.src = 'fotonoite.jpg' 
        document.body.style.background = '#0c1046'
        
    } else {
        img.src = 'fotomadrugada.jpg' 
        document.body.style.background = '#000000'
    }

}