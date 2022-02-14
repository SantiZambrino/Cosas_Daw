window.onload = () => {
    const celdas = document.getElementsByTagName('td');
    const colores = ['blue','yellow','red','violet'];

    for (let i = 0; i < celdas.length; i++) {
            celdas[i].onclick = function () {
                console.log(this.style.backgroundColor);  
                switch (this.style.backgroundColor) {
                    case 'blue':
                        this.style.backgroundColor = colores[1];
                        break;
                    case 'yellow':
                        this.style.backgroundColor = colores[2];
                        break;
                    case 'red':
                        this.style.backgroundColor = colores[3];
                        break;
                    case 'violet':
                        this.style.backgroundColor = colores[0];
                        break;
                    default:
                        this.style.backgroundColor = colores[0];    
                        break;
                }
            }    
    }

    /*
    Super mejora: define una lista de 4 colores y ahora cada vez que se pulsa sobre una celda, esta va cambiando de color siguiendo la lista de colores definida (sillega al final de la lista, vuelve al principio)
    */
}