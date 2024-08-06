$(function(){
    $('#btnGuardar').on('click', function(){
        debugger
        const nombre = $('#txtNombre').val();
        const email = $('#txtEmail').val();
        const ntelefono = $('#txtNtelefono').val();
        const direccion = $('#txtDireccion').val();
        const nombremascota = $('#txtNombreMascota').val();
        const tipomascota = $('#txtTipoMascota').val();
        const raza = $('#txtRaza').val();
        const edad = $('#txtEdad').val();
 
        console.log('Nombres ' +nombre+ ', Email ' +email+ ', N°. de telefono ' +ntelefono+ ', Direccion '+direccion+
             ', Nombre de mascota '+nombremascota+ ', Tipo de mascota '+tipomascota+ ', Raza '+raza+ ', Edad '+edad);
        alert('Nombres ' +nombre+ ', Email ' +email+ ', Numero de telefono ' +ntelefono+ ', Direccion '+direccion+ 
            ', Nombre de mascota '+nombremascota+ ', Tipo de mascota '+tipomascota+ ', Raza '+raza+ ', Edad '+edad);
    });
});