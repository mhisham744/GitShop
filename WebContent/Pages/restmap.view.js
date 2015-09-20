sap.ui.jsview("Pages.restmap", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf Pages.restmap
	*/ 
	getControllerName : function() {
		
		return "Pages.restmap";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf Pages.restmap
	*/ 
	createContent : function(oController) {
		
		
		jQuery.sap.require("sap.demo.cart.common");
		
		var mapapp =  new sap.m.Shell("Shell", {
            
            
			app: new sap.ui.core.ComponentContainer({
				name: 'sap.demo.cart'
			})
        });
		
		
 		return new sap.m.Page({
			title: "IBM LSS Client Center - Smart Shopping",
			icon : "{img>/icon}",
			showNavButton : true,
			navButtonText : "Home",
			navButtonTap : function() {
				app = sap.ui.getCore().byId("App");  
                app.to("homePage");   
			},headerContent: [new sap.m.Image({src:"images/step0005.png"}),
new sap.m.Button({ 
    icon: "sap-icon://drop-down-list",
    press : function (evt) {
  	  oActionSheet.openBy(evt.getSource());
   	   }
  })
				              ],
			content: [
			          mapapp
			]
		});
	}

});