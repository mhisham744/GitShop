sap.ui.controller("Pages.ProductInfo", {

	onInit: function() {
		
		this.router = sap.ui.core.UIComponent.getRouterFor(this);
		this.router.attachRoutePatternMatched(this._handleRouteMatched, this);
		
	},
	
	_handleRouteMatched: function(evt) {
		
		if("ProductInfo" !== evt.getParameter("name")){
			return;
		} 
		
		this.catIndex = evt.getParameter("arguments").catIndex;
		this.subCatIndex = evt.getParameter("arguments").subCatIndex;
		this.productIndex = evt.getParameter("arguments").subCatIndex;
		
		var context = sap.ui.getCore().byId("app").getModel('products').getContext('/collection/' + this.catIndex + '/items/subcat/' + this.subCatIndex + '/product/'+ this.productIndex);
		
		this.getView().setBindingContext(context,'products');
		
		
	},

});