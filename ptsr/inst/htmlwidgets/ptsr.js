HTMLWidgets.widget({

  name: 'ptsr',

  type: 'output',

  factory: function(el, width, height) {

    // TODO: define shared variables for this instance
    Pts.namespace( window );
  
    // create Space and Form
    var space = new CanvasSpace(el.id);
    
    return {

      renderValue: function(x) {
        
        // apply settings
        for (var name in x.settings)
          space.setup(name, x.settings[name]);
        
        var form = space.getForm();


        // TODO: code to render the widget, e.g.
        // animation
        space.add( (time, ftime) => {

        // rectangle
        var rect = Rectangle.fromCenter( space.center, space.size.$divide(2) );
        var poly = Rectangle.corners( rect );
        poly.shear2D( Num.cycle( time%5000/5000 ) - 0.5, space.center );
        
        // triangle
        var tris = poly.segments( 2, 1, true );
        tris.map( (t) => t.push( space.pointer ) );
        
        // circle
        var circles = tris.map( (t) => Triangle.incircle( t ) );
        
        // drawing
        form.fillOnly("#123").polygon( poly );
        form.fill("#f05").circles( circles );
        form.strokeOnly("#fff ", 3 ).polygons( tris );
        form.fill("#123").point( space.pointer, 5 );
        
     });
        
        // start
        space.play().bindMouse().bindTouch();

      
      },

      resize: function(width, height) {

        // TODO: code to re-render the widget with a new size

      },
      
      // Make the space object available as a property on the widget
      // instance we're returning from factory(). This is generally a
      // good idea for extensibility--it helps users of this widget
      // interact directly with sigma, if needed.
      s: space

    };
  }
});