sap.ui.jsview("Pages.ProductInfo", {

 
	getControllerName : function() {
		return "Pages.ProductInfo";
	},

 
	createContent : function(oController) {
 		return new sap.m.Page({
			title: "{products>name}",
			backgroundDesign: sap.m.PageBackgroundDesign.Solid,
			showNavButton: true,
			navButtonPress: function() {
				window.history.go(-1);
			},
			footer: new sap.m.Bar({
				contentLeft: [
				              new sap.m.Button({
				            	text: "Add to Cart",
				            	icon: "sap-icon://add",
				            	press: function(evt) {
				            		sap.demo.cart.common.addToCart(evt,this);
				            	}
				              })
				]
			}),
			content: [
			          
			          new sap.m.ObjectHeader({
			        	  title: "{products>name}",
			        	  number: "{products>price}",
			        	  numberUnit: "USD",
			        	  statuses: [
			        	         new sap.m.ObjectStatus({
			        	        	 text: "Item available",
			        	        	 state: sap.ui.core.ValueState.Success
			        	         }),
			        	         new sap.m.ObjectStatus({
			        	        	 text: "1 day delivery available",
			        	        	 state: sap.ui.core.ValueState.Error
			        	         }) 
			        	  ]
			          }),
			          
			          new sap.m.HBox({
			        	items: [new sap.m.Image({
			        		src: "{products>image}",
			        		height: "200px"
			        	})],
			        	alignItems: sap.m.FlexAlignItems.Center,
			        	justifyContent: sap.m.FlexJustifyContent.Center
			          }),
			          
			          new sap.m.Text({
			        	  text: "{products>description}"
			          }).addStyleClass('padding40').addStyleClass('justify').addStyleClass('marginTop20')
			]
		});
	}

});