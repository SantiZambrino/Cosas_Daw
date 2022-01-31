window.onload = ()=>{
    const body = document.body;
    const p = document.querySelector('p')

    body.addEventListener('keydown', (e)=>{
        p.textContent += `${e.code}`
    })
}