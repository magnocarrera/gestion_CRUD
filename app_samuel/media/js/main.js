// document.getElementById("botonEditar").addEventListener("click", insertar);
// //document.getElementById("btnMostrar").addEventListener("click",mostrarArray);
//
// var persona = new Array();
//
// function insertar(){
//
// 	var nombre = document.getElementById("nombre").value;
//
// 	var apellido = document.getElementById("apellido").value;
//
// 	var edad = document.getElementById("edad").value;
//
// 	persona.push({ 'nombre': nombre, 'apellido': apellido, 'edad': edad});
// 	document.getElementById("nombre").value="";
// 	document.getElementById("apellido").value="";
// 	document.getElementById("edad").value="";
//
// 	mostrarTabla();
// }
//
// function mostrarTabla(){
//
// 	var tabla=document.createElement("table");
// 	var fila;
// 	var celda;
// 	for(var i=0; i<persona.length; i++){
//
// 		var fila=document.createElement("tr");
//
// 		var celda=document.createElement("td");
//
// 		celda.appendChild(document.createTextNode(persona[i].nombre));
// 		celda.appendChild(document.createTextNode(persona[i].apellido));
// 		celda.appendChild(document.createTextNode(persona[i].edad));
//
// 	}
//
// 	fila.appendChild(celda);
//
// 	tabla.appendChild(fila);
// 	document.body.appendChild(tabla);
//
// }
//



// var xhttp = new XMLHttpRequest();
// xhttp.onreadystatechange = function() {
//   if (this.readyState == 4 && this.status == 200) {
//     var respuesta = JSON.parse(xhttp.responseText);
//     // var personas = respuesta.personas;
//     console.log(respuesta)
//
//     var salida = "";
//
//     for(var i = 0; i < respuesta.length; i++) {
//       salida += `<li>${respuesta[i].nombres} su nickname es ${respuesta[i].apellidos}</li>`;
//       }
//
//       document.write(salida);
//     }
// };
// xhttp.open("GET", "datos.json", true);
// xhttp.send();

$(function(){
  /* function que va por ajax hacia el archivo datos.json y trae su contenido
  . y lo imprime por consola */
  function carga_de_datos(){
    var datos = "";
    /*		var datos = $.param({"validar": true,"function": "ejemplo"});*/
    $.ajax({
      type: "POST",
      url: "datos.json",
      data: datos,
      statusCode: {
        404: function () {
          console.log("Ups! ha ocurrido un inconveniente, function ");
        }
      }
    }).done(function (resp){
      console.log(resp)
      var salida = "";
      for(var i = 0; i < resp.length; i++) {
        salida += `<tr>
        <td>${resp[i].nombres}</td> 
        <td>${resp[i].apellidos}</td>
        <td>${resp[i].edad}</td>
        </tr>`;
      }
      console.log(salida)
      document.getElementById("tabla").innerHTML = salida;
    });
  }
  carga_de_datos();
});

// document.getElementById("fila").innerHTML = `<td>${resp[i].nombres}</td> <td>${resp[i].apellidos}</td> <td>${resp[i].edad}</td>`;
// salida += `<li>${resp[i].nombres} su nickname es ${resp[i].apellidos}</li>`;
