sap.ui.jsview("Pages.SubCategory", {

	getControllerName : function() {
		return "Pages.SubCategory";
	},

	createContent : function(oController) {
		
		var oList = new sap.m.List({
			id: "slistId",
			mode: sap.m.ListMode.SingleSelect,
			select: function(evt) {
				oController.itemSelect(evt);
			}
		})
		
		oList.bindItems({
			path: "products>items/subcat",
			template: new sap.m.StandardListItem({
				title: "{products>subcatname}"
			})
		})
		
 		return new sap.m.Page({
			title: "Title",
			showNavButton: true,
			navButtonPress: function() {
				oController.goBack();
			},
			headerContent: new sap.m.Button({
				icon: "sap-icon://cart",
				press: function(evt) {
					sap.demo.cart.common.cartPress(evt,oController);
				}
			}),
			content: [oList]
		});
	}

});