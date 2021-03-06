PackeryDocs['shift-layout'] = function( elem ) {
  'use strict';

  var grid = elem.querySelector('.grid');

  var pckry = new Packery( grid );

  filterBindEvent( grid, 'click', '.grid-item', function( event ) {
    event.target.classList.toggle('grid-item--large');
    pckry.shiftLayout();
  });

};
