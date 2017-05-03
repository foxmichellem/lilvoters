window.onload = function() {
  document.querySelector( "form" )
      .addEventListener( "invalid", function( event ) {
          var el = event.target;
          el.className = 'invalid ';
          el.placeholder = 'Required';
          event.preventDefault();
      }, true );
}
