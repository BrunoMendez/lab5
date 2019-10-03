function main() {
    $('#addForm').on('submit', function( event ) {
        event.preventDefault();
        let text = $('#itemInput').val();
        $('#items').append( `<li>
                                <div>${text}</div>
                                <button>Check</button>
                                <button>Delete</button>
                            </li>`)
    });
    $('#items').on('click','button', function( event ) {
        if ( $(this).text() == 'Check' ) {
            $(this).parent().find('div').wrap('<strike>');
        } else if ( $(this).text() == 'Delete' ) {
            $(this).parent().remove();
        }
    });
}

main();