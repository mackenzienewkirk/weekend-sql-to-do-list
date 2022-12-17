console.log( 'This is the client.js' );

$( document ).ready( function(){
console.log( 'ready function' );
$('body').on('click', '.readyToTransferButton', readyToTransferButton);
$('body').on('click', '.deleteButton', deleteButton);
  //Establishing each click listener
setupClickListeners()
getTasks();
// load existing koalas on page load

});

function setupClickListeners() {
    $( '#addButton' ).on( 'click', function(){
    console.log( 'in addButton on click' );
    let newTask = $('#newTask').val();
    let newNotes = $('#newNotes').val();
    let newStatus = $('#newStatus').val();

    let koalaToSend = {
        task: newName,
        notes: newAge,
        status: newGender,
    }
      // call saveTask with the new obejct
saveTask( koalaToSend );
}); 
}

