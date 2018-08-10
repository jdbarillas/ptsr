HTMLWidgets.widget({

  name: 'ptsr',

  type: 'output',

  factory: function(el, width, height) {

    // TODO: define shared variables for this instance
    //Pts.namespace( this );
  
    // create Space and Form
    var space = new CanvasSpace(el);
    
    return {

      renderValue: function(x) {
        
        // apply settings
        for (var name in x.settings)
          space.setup(name, x.settings[name]);
        
        var form = space.getForm();


        // TODO: code to render the widget, e.g.
        space.add( () => form.point( space.pointer, 10 ) );
        
        // start
        space.playOnce(200).bindMouse();

      
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