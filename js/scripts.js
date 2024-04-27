$(document).ready(function() {
    function newItem() {
        let inputValue = $('#input').val(); // Getting the value from the input field
        if (inputValue === '') {
            alert("You must write something!"); // Alert if the input is empty
        } else {
            let li = $('<li></li>').text(inputValue);
            let crossOutButton = $('<button></button>').text('X').addClass('delete-btn');

            crossOutButton.on('click', function() {
                $(this).parent().remove(); // Remove the list item
            });

            li.append(crossOutButton);
            $('#list').append(li);
            $('#input').val(''); // Clear the input field
            $('#list').sortable('refresh'); // Refresh sortable functionality
        }
    }

    // Bind click event to the button using jQuery
    $('#button').click(newItem);

    // Handle the Enter key in the input field
    $('#input').keypress(function(event) {
        if (event.keyCode === 13) { 
            event.preventDefault(); // Prevent the default form submit
            newItem();
        }
    });

    // Crossing out an item on double-click
    $(document).on('dblclick', 'li', function() {
        $(this).toggleClass('strike');
    });

    // Initialize sortable on the list
    $('#list').sortable();
    $('#list').disableSelection();
});
