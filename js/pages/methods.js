( function() {

var PS = window.PS;

function getItemElement() {
  var elem = document.createElement('div');
  var wRand = Math.random();
  var hRand = Math.random();
  var widthClass = wRand > 0.85 ? 'w4' : wRand > 0.7 ? 'w2' : '';
  var heightClass = hRand > 0.85 ? 'h4' : hRand > 0.7 ? 'h2' : '';
  elem.className = 'item ' + widthClass + ' ' + heightClass;
  return elem;
}

PS.methods = function() {

  // ----- appended ----- //

  ( function() {
    var demo = document.querySelector('#appended-demo');
    var container = demo.querySelector('.packery');
    var button = demo.querySelector('button');
    var pckry = new Packery( container );

    eventie.bind( button, 'click', function() {
      // create new item elements
      var elems = [];
      var fragment = document.createDocumentFragment();
      for ( var i = 0; i < 3; i++ ) {
        var elem = getItemElement();
        fragment.appendChild( elem );
        elems.push( elem );
      }
      // append elements to container
      container.appendChild( fragment );
      // add and lay out newly appended elements
      pckry.appended( elems );
    });
  })();

  // ----- bind Draggabilly ----- //

  ( function() {
    var container = document.querySelector('#bind-draggabilly-demo');
    var itemElems = container.querySelectorAll('.item');
    var pckry = new Packery( container, {
      columnWidth: 80,
      rowHeight: 80
    });
    // for each item element
    for ( var i=0, len = itemElems.length; i < len; i++ ) {
      var elem = itemElems[i];
      // make element draggable with Draggabilly
      var draggie = new Draggabilly( elem );
      // bind Draggabilly events to Packery
      pckry.bindDraggabillyEvents( draggie );
    }
  })();

  // ----- destroy demo ----- //

  ( function() {
    var demo = document.querySelector('#destroy-demo');
    var container = demo.querySelector('.packery');
    var button = demo.querySelector('button');
    var pckry = new Packery( container );
    var isActive = true;

    eventie.bind( button, 'click', function() {
      if ( isActive ) {
        pckry.destroy();
      } else {
        pckry = new Packery( container );
      }
      isActive = !isActive;
    });
  })();

  // ----- layout demo ----- //

  ( function() {
    var container = document.querySelector('#layout-demo .packery');
    var pckry = new Packery( container );

    eventie.bind( container, 'click', function( event ) {
      // don't proceed if item was not clicked on
      if ( !classie.has( event.target, 'item' ) ) {
        return;
      }
      // change size of item via class
      classie.toggle( event.target, 'gigante' );
      // trigger layout
      pckry.layout();
    });
  })();

  // ----- placed demo ----- //

  ( function() {
    var demo = document.querySelector('#place-demo');
    var placedElem = demo.querySelector('.placed');
    var button = demo.querySelector('button');
    var pckry = new Packery( demo.querySelector('.packery'), {
      itemSelector: '.item'
    });
    var isPlaced = false;

    eventie.bind( button, 'click', function() {
      // place or unplace element
      if ( isPlaced ) {
        pckry.unplace( placedElem );
      } else {
        pckry.place( placedElem );
      }
      // trigger layout
      pckry.layout();
      isPlaced = !isPlaced;
    });
  })();

  // ----- remove demo ----- //

  ( function() {
    var container = document.querySelector('#remove-demo .packery');
    var pckry = new Packery( container );

    eventie.bind( container, 'click', function() {
      // don't proceed if item was not clicked on
      if ( !classie.has( event.target, 'item' ) ) {
        return;
      }
      // remove clicked element
      pckry.remove( event.target );
      // layout remaining item elements
      pckry.layout();
    });
  })();

};

})( window );
