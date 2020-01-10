$( document ).ready(() => {

  $( '.hamburger' ).click(() => {
    $( '.hamburger' ).toggleClass( 'open' );
    $( '.main-nav' ).toggleClass( 'visible' );
  });
});
