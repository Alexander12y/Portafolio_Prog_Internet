var tablaHTML = "<tr><th>Nombre</th><th>Publisher</th><th>Plataforma</th><th>Medio</th><th>Fecha</th><th>Color</th><th>Calificación</th></tr>";
var estilo = 0;

function registro(){
    //Validacion de los campos del formulario 
    if(document.getElementById("nombre").value == false){
        alert("Nombre vacio. Llenar campo.");
    }else if(document.getElementById("publisher").value == false){
        alert("Publisher (Email) vacio. Llenar campo.");
    }else if(!validarEmail(document.getElementById("publisher").value)){
        alert("Por favor ingresa un email válido en el campo Publisher.");
    }else if(document.getElementById("fecha").value == false){
        alert("Fecha vacia. Llenar campo.");
    }else {

        //Checkbox
        z = document.querySelectorAll("input[name='consola']:checked");
        consola = "<td>";
        for(var v of z){
            consola += v.value + " ";
        }
        consola += "</td>";

        //Radio button
        y = document.querySelectorAll("input[name='medio']:checked");
        if(y.length > 0){
            consola += "<td>" + y[0].value + "</td>";
        }else{
            consola += "<td></td>";
        }

        //input fecha
        if(!document.getElementById("fecha").value == false){
            fecha = "<td>" + document.getElementById("fecha").value + "</td>";
        }

        //Todos los campos han sido llenados 
        if(estilo %2 == 0){
            tablaHTML += "<tr class='renglon1'>";
        }else{
            tablaHTML += "<tr class='renglon2'>";
        }
        
        estilo++;

        //Agregar el nombre del juego 
        tablaHTML += "<td>" + document.getElementById("nombre").value + "</td>";

        //Agregar publisher 
        tablaHTML += "<td>" + document.getElementById("publisher").value + "</td>";

        //Agregar consola (checkbox)
        tablaHTML += consola;

        //Agregar fecha
        tablaHTML += fecha;

        //Agregar color
        var colorSeleccionado = document.getElementById("color").value;
        tablaHTML += "<td><div style='width: 20px; height: 20px; background-color: " + colorSeleccionado + "; border: 1px solid #000; display: inline-block; margin-right: 5px;'></div>" + colorSeleccionado + "</td>";

        //Agregar calificación
        var calificacion = document.getElementById("calificacion").value;
        tablaHTML += "<td>" + calificacion + "/10</td>";

        //Finalizacion del renglon 
        tablaHTML += "</tr>";
        
        //Agregar todo a la tabla 
        document.getElementById("consolas").innerHTML = tablaHTML;

        //Limpiar el formulario
        limpiarFormulario();

        document.getElementById("formulario").reset();
    }
}

function limpiarFormulario(){
    document.getElementById("nombre").value = "";
    document.getElementById("publisher").value = "";
    document.getElementById("fecha").value = "";
    document.getElementById("color").value = "#ff0000";
    document.getElementById("calificacion").value = "5";
    document.getElementById("valorCalificacion").textContent = "5";
    
    // Desmarcar checkboxes
    var checkboxes = document.querySelectorAll('input[name="consola"]:checked');
    for(var i = 0; i < checkboxes.length; i++){
        checkboxes[i].checked = false;
    }
    
    // Desmarcar radio buttons
    var radios = document.querySelectorAll('input[name="medio"]:checked');
    for(var i = 0; i < radios.length; i++){
        radios[i].checked = false;
    }
}


function validarEmail(email) {
    var patron = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return patron.test(email);
}