//-----------------------------------------------------------------------------------------------------------------------
//Creacion de las funciones para el modulo de CLIENTES
//-----------------------------------------------------------------------------------------------------------------------
//CREACIÓN FUNCIÓN PARA TRAER INFORMACIÓN
function traerInformacion() {
    $.ajax({
        url: "https://g02034ec2ca54d7-salonfiestasdb.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client",
        type: "GET",
        datatype: "JSON",
        success: function (respuesta) {
            console.log(respuesta);
            pintarRespuesta(respuesta.items);
        }
    });
}
//CREACIÓN FUNCIÓN PARA PINTAR LA RESPUESTA AL USUARIO
function pintarRespuesta(items) {
    let myTable = "<table>";
    for (i = 0; i < items.length; i++) {
        myTable += "<tr>";
        myTable += "<td>" + items[i].id + "</td>";
        myTable += "<td>" + items[i].name + "</td>";
        myTable += "<td>" + items[i].email + "</td>";
        myTable += "<td>" + items[i].age + "</td>";
        myTable += "<td> <button onclick='borrarElemento(" + items[i].id + ")'>Borrar</button>";
        myTable += "</tr>";
    }
    myTable += "</table>";
    $("#resultado").append(myTable);
}
//CREACIÓN FUNCIÓN PARA BUSCAR LOS DATOS POR ID
function obtenerItem() {
    $.ajax({
        dataType: 'json',
        url: 'https://g02034ec2ca54d7-salonfiestasdb.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client/' + $("#id").val(),
        type: 'GET',
        success: function (respuesta) {
            console.log(respuesta);

            var item = respuesta.items[0];
            $("#id").val(item.id);
            $("#name").val(item.name);
            $("#email").val(item.email);
            $("#age").val(item.age);
        },
        error: function (jqXHR, textStatus, errorThrown) {
        }
    });

}
//CREACIÓN FUNCIÓN PARA CREAR NUEVOS CLIENTES
function guardarInformacion() {
    let myData = {
        id: $("#id").val(),
        name: $("#name").val(),
        email: $("#email").val(),
        age: $("#age").val()
    };
    let dAtaToSend = JSON.stringify(myData);
    $.ajax({
        url: "https://g02034ec2ca54d7-salonfiestasdb.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client",
        type: "POST",
        data: myData,
        datatype: "JSON",
        success: function (respuesta) {
            $("#resultado").empty();
            $("#id").val("");
            $("#name").val("");
            $("#email").val("");
            $("#age").val("");
            traerInformacion();
            alert("se ha guardado el registro")
        }

    });
}
//CREACIÓN FUNCIÓN PARA ACTUALIZAR UN REGISTRO DE CLIENTES
function editarInformacion() {
    let = myData = {
        id: $("#id").val(),
        name: $("#name").val(),
        email: $("#email").val(),
        age: $("#age").val()
    };
    console.log(myData);
    let dAtaToSend = JSON.stringify(myData);
    $.ajax({
        url: "https://g02034ec2ca54d7-salonfiestasdb.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client",
        type: "PUT",
        data: dAtaToSend,
        contentType: "application/JSON",
        datatype: "JSON",
        success: function (respuesta) {
            $("#resultado").empty();
            $("#id").val("");
            $("#name").val("");
            $("#email").val("");
            $("#age").val("");
            traerInformacion();
            alert("se ha actualizado el registro")
        }
    }

    )
}
//CREACIÓN FUNCIÓN PARA BORRAR UN REGISTROS
function borrarElemento(idElemento) {
    let myData = {
        id: idElemento
    };
    let dAtaToSend = JSON.stringify(myData);
    $.ajax({
        url: "https://g02034ec2ca54d7-salonfiestasdb.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client",
        type: "DELETE",
        data: dAtaToSend,
        contentType: "application/JSON",
        datatype: "JSON",
        success: function (respuesta) {
            $("#resultado").empty();
            traerInformacion();
            alert("Se ha eliminado el registro")
        }
    }

    )
}
//-----------------------------------------------------------------------------------------------------------------------
//Creacion de las funciones para el modulo de MENSAJES
//-----------------------------------------------------------------------------------------------------------------------
//CREACIÓN FUNCIÓN PARA TRAER INFORMACIÓN
function traerInformacionM() {
    $.ajax({
        url: "https://g02034ec2ca54d7-salonfiestasdb.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/message/message",
        type: "GET",
        datatype: "JSON",
        success: function (respuestaM) {
            console.log(respuestaM);
            pintarRespuestaM(respuestaM.items);
        }
    });
}
//CREACIÓN FUNCIÓN PARA PINTAR LA RESPUESTA AL USUARIO
function pintarRespuestaM(items) {
    let myTable = "<tableM>";
    for (i = 0; i < items.length; i++) {
        myTable += "<tr>";
        myTable += "<td>" + items[i].id + "</td>";
        myTable += "<td>" + items[i].messagetext + "</td>";
        myTable += "<td> <button onclick='borrarElementoM(" + items[i].id + ")'>Borrar</button>";
        myTable += "</tr>";
    }
    myTable += "</tableM>";
    $("#resultadoM").append(myTable);
}
//CREACIÓN FUNCIÓN PARA BUSCAR LOS MENSAJES POR ID
function obtenerItemM() {
    $.ajax({
        dataType: 'json',
        url: 'https://g02034ec2ca54d7-salonfiestasdb.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/message/message/' + $("#idMensaje").val(),
        type: 'GET',
        success: function (respuestaM) {
            console.log(respuestaM);

            var item = respuestaM.items[0];
            $("#idMensaje").val(item.id);
            $("#messagetext").val(item.messagetext);
        },
        error: function (jqXHR, textStatus, errorThrown) {
        }
    });

}

//CREACIÓN FUNCIÓN PARA CREAR NUEVOS MENSAJES
function guardarInformacionM() {
    let myData = {
        id: $("#idMensaje").val(),
        messagetext: $("#messagetext").val(),
    };
    let dAtaToSend = JSON.stringify(myData);
    $.ajax({
        url: "https://g02034ec2ca54d7-salonfiestasdb.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/message/message",
        type: "POST",
        data: myData,
        datatype: "JSON",
        success: function (respuestaM) {
            $("#resultadoM").empty();
            $("#id").val("");
            $("#messagetext").val("");
            traerInformacionM();
            alert("se ha guardado el registro")
        }

    });
}
//CREACIÓN FUNCIÓN PARA ACTUALIZAR UN REGISTRO DE MENSAJES
function editarInformacionM() {
    let = myData = {
        id: $("#idMensaje").val(),
        messagetext: $("#messagetext").val()
    };
    console.log(myData);
    let dAtaToSend = JSON.stringify(myData);
    $.ajax({
        url: "https://g02034ec2ca54d7-salonfiestasdb.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/message/message",
        type: "PUT",
        data: dAtaToSend,
        contentType: "application/JSON",
        datatype: "JSON",
        success: function (respuestaM) {
            $("#resultadoM").empty();
            $("#id").val("");
            $("#messagetext").val("");
            traerInformacionM();
            alert("se ha actualizado el registro")
        }
    });
}
//CREACIÓN FUNCIÓN PARA BORRAR UN MENSAJE
function borrarElementoM(idElementoM) {
    let myData = {
        id: idElementoM
    };
    let dAtaToSend = JSON.stringify(myData);
    $.ajax({
        url: "https://g02034ec2ca54d7-salonfiestasdb.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/message/message",
        type: "DELETE",
        data: dAtaToSend,
        contentType: "application/JSON",
        datatype: "JSON",
        success: function (respuestaM) {
            $("#resultadoM").empty();
            traerInformacionM();
            alert("Se ha eliminado el Mensaje")
        }
    }

    )
}

//-----------------------------------------------------------------------------------------------------------------------
//Creacion de las funciones para el modulo de SALON DE FIESTAS
//-----------------------------------------------------------------------------------------------------------------------
//CREACIÓN FUNCIÓN PARA TRAER INFORMACIÓN
function traerInformacionS() {
    $.ajax({
        url: "https://g02034ec2ca54d7-salonfiestasdb.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/partyroom/partyroom",
        type: "GET",
        datatype: "JSON",
        success: function (respuestaS) {
            console.log(respuestaS);
            pintarRespuestaSalones(respuestaS.items);
        }
    });
}
//CREACIÓN FUNCIÓN PARA PINTAR LA RESPUESTA AL USUARIO
function pintarRespuestaSalones(items) {
    let myTable = "<table>";
    for (i = 0; i < items.length; i++) {
        myTable += "<tr>";
        myTable += "<td>" + items[i].id + "</td>";
        myTable += "<td>" + items[i].owner + "</td>";
        myTable += "<td>" + items[i].capacity + "</td>";
        myTable += "<td>" + items[i].category_id + "</td>";
        myTable += "<td>" + items[i].name + "</td>";
        myTable += "<td> <button onclick='borrarElementoS(" + items[i].id + ")'>Borrar</button>";
        myTable += "</tr>";
    }
    myTable += "</table>";
    $("#resultadoS").append(myTable);
}
//CREACIÓN FUNCIÓN PARA BUSCAR LOS SALONES POR ID
function obtenerItemS() {
    $.ajax({
        dataType: 'json',
        url: 'https://g02034ec2ca54d7-salonfiestasdb.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/partyroom/partyroom/' + $("#idSalones").val(),
        type: 'GET',
        success: function (respuestaS) {
            console.log(respuestaS);

            var item = respuestaS.items[0];
            $("#idSalones").val(item.id);
            $("#owner").val(item.owner);
            $("#capacity").val(item.capacity);
            $("#category_id").val(item.category_id);
            $("#nameSalones").val(item.name);
        },
        error: function (jqXHR, textStatus, errorThrown) {
        }
    });

}
//CREACIÓN FUNCIÓN PARA CREAR NUEVOS SALONES
function guardarInformacionS() {
    let myData = {
        id: $("#idSalones").val(),
        owner: $("#owner").val(),
        capacity: $("#capacity").val(),
        category_id: $("#category_id").val(),
        name: $("#nameSalones").val()
    };
    let dAtaToSend = JSON.stringify(myData);
    $.ajax({
        url: "https://g02034ec2ca54d7-salonfiestasdb.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/partyroom/partyroom",
        type: "POST",
        data: myData,
        datatype: "JSON",
        success: function (respuestaS) {
            $("#resultadoS").empty();
            $("#id").val("");
            $("#owner").val("");
            $("#capacity").val("");
            $("#category_id").val("");
            $("#name").val("");
            traerInformacionS();
            alert("se ha guardado el Salon")
        }

    });
}
//CREACIÓN FUNCIÓN PARA ACTUALIZAR UN REGISTRO DE SALON
function editarInformacionS() {
    let = myData = {
        id: $("#idSalones").val(),
        owner: $("#owner").val(),
        capacity: $("#capacity").val(),
        category_id: $("#category_id").val(),
        name: $("#nameSalones").val()
    };
    console.log(myData);
    let dAtaToSend = JSON.stringify(myData);
    $.ajax({
        url: "https://g02034ec2ca54d7-salonfiestasdb.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/partyroom/partyroom",
        type: "PUT",
        data: dAtaToSend,
        contentType: "application/JSON",
        datatype: "JSON",
        success: function (respuestaS) {
            $("#resultadoS").empty();
            $("#idSalones").val("");
            $("#owner").val("");
            $("#capacity").val("");
            $("#category_id").val("");
            $("#nameSalones").val("");
            traerInformacionS();
            alert("se ha actualizado el Salón")
        }
    }

    )
}

//CREACIÓN FUNCIÓN PARA BORRAR UN SALON
function borrarElementoS(idElementoS) {
    let myData = {
        id: idElementoS
    };
    let dAtaToSend = JSON.stringify(myData);
    $.ajax({
        url: "https://g02034ec2ca54d7-salonfiestasdb.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/partyroom/partyroom",
        type: "DELETE",
        data: dAtaToSend,
        contentType: "application/JSON",
        datatype: "JSON",
        success: function (respuestaS) {
            $("#resultadoS").empty();
            traerInformacionS();
            alert("Se ha eliminado el Salón")
        }
    }

    )
}
