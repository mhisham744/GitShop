sap.ui.jsview("Pages.Welcome", {


	getControllerName : function() {
		return "Pages.Welcome";
	},


	createContent : function(oController) {
		
		var oImage = new sap.m.Image({
			src: "images/cart2.png"
			//width: '500px'
		});
	
		var oText = new sap.m.Text({
			text: "Beta Version"
		}).addStyleClass('bold');
		
 		return new sap.m.Page({
			title: "Welcome to Smart Shopping Demo",
			content: [
			          new sap.m.VBox({
			        	  items: [new sap.m.Image(
			      				{
			      					src: "images/sep2.png"
			      					}
			      				), oImage,oText],
			        	  alignItems: sap.m.FlexAlignItems.Center,
			        	  justifyContent: sap.m.FlexJustifyContent.Center
			          })
			]
		});
	}

});