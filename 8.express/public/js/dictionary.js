$(document).ready(function () {

    $.getJSON('/dictionary', printTerms);
    $('form').submit(function (e) {
        e.preventDefault();
        $.post('/dictionary', {term: $('#term').val(), defined: $('#defined').val()}, printTerms);
        this.reset();
    });

});

function printTerms(terms) {
    $('body>dl').empty();
    $.each(terms, function () {
        $('<dt>').text(this.term).appendTo('body>dl');
        $('<dd>').text(this.defined).appendTo('body>dl');
    });
    $('dt').off('dblclick').dblclick(function() {
        $.ajax({
            url: '/dictionary/' + $(this).text(),
            type: 'DELETE',
            success: printTerms
        });
    });
}
