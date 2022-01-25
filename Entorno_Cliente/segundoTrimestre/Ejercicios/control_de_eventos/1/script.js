window.onload = ()=>{
    const section = document.querySelector('section')
    const parrafo = document.querySelector('p');
    const enlace = document.querySelector('a');

    section.addEventListener('click', (e)=>{
        // e.stopPropagation()// opcion c fase 
        console.log('soy el section')
        section.style.backgroundColor='yellow';
    })

    parrafo.addEventListener('click', ()=>{
        console.log('soy el parrafo')
        parrafo.style.width  ='40%'
    })

    enlace.addEventListener('click', (e)=>{
        e.stopPropagation()
        console.log('soy el enlace')
        let confirmacion = confirm("Quieres ir al enlace");
        console.log({confirmacion})
        if (!confirmacion) e.preventDefault()
    })
}