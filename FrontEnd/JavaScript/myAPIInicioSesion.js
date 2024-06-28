$(document).ready(function () {
    $("#loginForm").validate({
        submitHandler: function (form) {
            var data = {
                username: $("#loginUsername").val(),
                password: $("#loginPassword").val()
            };
            $.ajax({
                url: 'http://localhost:8000/BiblioMania/users/login/',
                type: 'POST',
                data: JSON.stringify(data),
                contentType: 'application/json',
                success: function (response) {
                    localStorage.setItem("access", response.access);
                    localStorage.setItem("refresh", response.refresh);
                    alert('Sesión iniciada correctamente');
                    // Redireccionar o realizar acciones adicionales después del inicio de sesión
                },
                error: function (error) {
                    console.log('Error al iniciar sesión:', error);
                    alert('Error al iniciar sesión. Verifica tus credenciales.');
                }
            });
        }
    });
});