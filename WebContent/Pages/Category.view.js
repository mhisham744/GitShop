sap.ui.jsview("Pages.Category", {

	getControllerName : function() {
		return "Pages.Category";
	},
 
	createContent : function(oController) {
		
		var oList = new sap.m.List({
			id: "listId"
		})
		
		oList.bindItems({
			path : "products>/collection", 
			template : new sap.m.StandardListItem({
				title: "{products>category}",
				type: sap.m.ListType.Navigation,
				press:function(evt){
					oController.categoryListItemPress(evt);
				}
			})
		});
		
 		return new sap.m.Page({
			title: "Category",
			content: [oList]
		});
	}

});