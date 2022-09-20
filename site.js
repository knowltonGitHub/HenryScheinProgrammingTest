$( document ).ready(function() {
    // Handler for .ready() called.
    console.log("tom ready");

    $.post( "test.html", { name: "John", time: "2pm" })
  .done(function( data ) {
    alert( "Data Loaded: " + data );
  });

  $.getJSON( "test.html", function( json ) {
    console.log( "JSON Data: " + json.users[ 3 ].name );
   });

  });