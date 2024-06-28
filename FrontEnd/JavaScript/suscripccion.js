function enviarSuscripcion() {
    const tipoSuscripcion = document.getElementById('tipo_suscripcion').value;
    const userId = 1;  // Reemplaza esto con el ID del usuario real si está disponible

    fetch('/BiblioMania/suscripcion/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Token YOUR_AUTH_TOKEN'  // Si usas token de autenticación
        },
        body: JSON.stringify({
            user: userId,
            tipo_suscripcion: tipoSuscripcion
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        alert('Suscripción exitosa!');
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('Error al suscribirse');
    });
}