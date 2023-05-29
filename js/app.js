const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', async(e) => {
    e.preventDefault();
    
    const respuesta = await fetch('https://sheet.best/api/sheets/234a057e-9dde-4456-b9d2-cd3350d0318c', {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "Nombre": formulario.nombre.value,
            "Correo": formulario.correo.value,
            "Telefono": formulario.telefono.value,
            "Mensaje":  formulario.mensaje.value
        })
    });

    const contenido = respuesta.json();
    console.log(contenido);
    if (respuesta.ok) {
        formulario.reset();
        alert('Mensaje enviado correctamente');
    }
    else {
        alert('Error al enviar el mensaje');
    }

});
