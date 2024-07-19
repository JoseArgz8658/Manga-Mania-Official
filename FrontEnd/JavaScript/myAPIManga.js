$(document).ready(function () {
    function cargarAutores() {
        $.ajax({
            url: 'http://localhost:8000/BiblioMania/autor/',
            type: 'GET',
            success: function (data) {
                var options = '<option value="">Selecciona un autor</option>';
                data.forEach(function (autor) {
                    options += '<option value="' + autor.id + '">' + autor.name + '</option>';
                });
                $('#author').html(options);
            },
            error: function (error) {
                console.log('Error al cargar autores:', error);
            }
        });
    }

    function cargarMangas() {
        $.ajax({
            url: 'http://localhost:8000/BiblioMania/manga/',
            type: 'GET',
            success: function (data) {
                var tableRows = '';
                data.forEach(function (manga) {
                    tableRows += '<tr>';
                    tableRows += '<td>' + manga.title + '</td>';
                    tableRows += '<td>' + manga.author.name + '</td>';
                    tableRows += '<td>' + manga.publication_date + '</td>';
                    tableRows += '<td>' + manga.description + '</td>';
                    tableRows += '<td>' + (manga.status === 'E' ? 'En emisión' : 'Finalizado') + '</td>';
                    tableRows += '</tr>';
                });
                $('#mangaTableBody').html(tableRows);
            },
            error: function (error) {
                console.log('Error al cargar mangas:', error);
            }
        });
    }

    cargarAutores();
    cargarMangas();

    $("#mangaForm").validate({
        submitHandler: function (form) {
            var data = {
                title: $("#title").val(),
                author: $("#author").val(),
                publication_date: $("#publication_date").val(),
                description: $("#description").val(),
                status: $("#status").val()
            };
            $.ajax({
                url: 'http://localhost:8000/BiblioMania/manga/',
                type: 'POST',
                data: JSON.stringify(data),
                contentType: 'application/json',
                success: function (response) {
                    alert('Manga guardado correctamente');
                    cargarMangas();
                },
                error: function (error) {
                    console.log('Error al guardar manga:', error);
                    alert('Error al guardar manga');
                }
            });
        }
    });
});