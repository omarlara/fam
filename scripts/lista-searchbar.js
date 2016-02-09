$(document).ready(function () {
    $('#table_id thead th.search-bar').each(function () {
        var title = $(this).text();
        $(this).html(title + '<br/><input type="text" placeholder="Buscar" />');
    });

    // DataTable
    var table = $('#table_id').DataTable();

    // Apply the search
    table.columns().every(function () {
        var that = this;

        $('input', this.header()).on('keyup change', function () {
            if (that.search() !== this.value) {
                that
                    .search(this.value)
                    .draw();
            }
        });
    });
});