PD.modules['drag-item-positioned'] = function( elem ) {
  'use strict';

  var grid = elem.querySelector('.grid');

  var pckry = new Packery( grid, {
    columnWidth: 100
  });

  pckry.getItemElements().forEach( function( itemElem ) {
    var draggie = new Draggabilly( itemElem );
    pckry.bindDraggabillyEvents( draggie );
  });

  pckry.on( 'dragItemPositioned', function( laidOutItems ) {
    PD.notify('Packery drag positioned');
  });

};