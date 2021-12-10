window.onload = () => {
    let input;

    input = document.getElementsByTagName('input')[0];

    input.onclick = () => {
        let numFilas = 1;
        let numCeldas = 1;
        let padre;
        let nuevaTabla;
        let cuerpoTabla;
        let fila;
        let columna;
        let textoColumna;

        //Controlo que los numeros sean positivos y no pasen de 9
        do {
            if (numFilas < 1 || numFilas > 9)
                alert('ERROR NUMERO SUPERIOR A 9 O INFERIOR A 0');

            numFilas = parseInt(prompt("Dime un numero de filas menor de 9 y positivo;"))

        } while (numFilas < 1 || numFilas > 9);
        do {
            if (numCeldas < 1 || numCeldas > 9)
                alert('ERROR NUMERO SUPERIOR A 9 O INFERIOR A 0');

            numCeldas = parseInt(prompt("Dime un numero de celdas menor de 9 y positivo;"))

        } while (numCeldas < 1 || numCeldas > 9);

        //nodo padre
        padre = document.getElementsByClassName('solucion');
        //Creo la tabla
        nuevaTabla = document.createElement("table");
        cuerpoTabla = document.createElement("tbody");
        //Doy clase a la tabla
        nuevaTabla.className = "tabla";
        //Creo la fila
        for (let i = 0; i < numFilas; i++) {
            fila = document.createElement("tr");
            for (let y = 0; y < numCeldas; y++) {
                //Creo las columnas
                columna = document.createElement("td");
                //Creo un nodo de texto
                textoColumna = document.createTextNode(i);
                //lo incerto en la columna
                columna.appendChild(textoColumna);
                //incerto la columna en el texto
                fila.appendChild(columna);
            }
            //incerto la fila en el cuerpo de la tabla
            cuerpoTabla.appendChild(fila);
        }

        //Incerto el cuerpo de la tabla a la tabla
        nuevaTabla.appendChild(cuerpoTabla);
        //doy estilo a la tabla
        nuevaTabla.setAttribute("border", 2);
        nuevaTabla.style.textAlign = "center";

        //apunto al body
        padre = document.getElementsByClassName('solucion')[0];
        padre.appendChild(nuevaTabla);
  
    }
}