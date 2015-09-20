sap.ui.jsview("Pages.Graph", {


	getControllerName : function() {
		return "Pages.Graph";
	},


	createContent : function(oController) {
		
		var htht = new sap.ui.core.HTML();
		htht.setContent("<div class=\"horizontal\"><div id=\"vrp-map-wrapper\"><div id=\"routing-map\" style=\"cursor: default; height:600px; width: 800px;\"></div></div><div id=\"instructions-header\">Instructions: <div id=\"instructions\" class=\"hide\"></div></div></div>");
		
		 var maps = new sap.ui.layout.HorizontalLayout({
	 			content: [htht]
	 		});
		 
		return new sap.m.Page({
			title: "Title",
			content: [
			          maps    
			]
		});
 		
		//new sap.ui.core.HTML().setContent("<div class=\"horizontal\"><div id=\"vrp-map-wrapper\"><div id=\"routing-map\" style=\"cursor: default; height:600px; width: 800px;\"></div></div><div id=\"instructions-header\">Instructions: <div id=\"instructions\" class=\"hide\"></div></div></div>");
 		
 		
	}

});