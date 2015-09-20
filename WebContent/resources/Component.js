jQuery.sap.declare("Component");

sap.ui.core.UIComponent.extend("Component",{
	
	metadata: {
		
		routing: {
			
			config: {
				viewType: "JS",
				viewPath: "Pages",
				targetControl: "splitApp",
				clearTarget: false,
				transition: "slide"
			},
			
			routes: [
			       {
			    	   pattern: "category/{catIndex}",
			    	   name: "category",
			    	   view: "SubCategory",
			    	   targetAggregation: "masterPages",
			    	   subroutes: [
			    	               {
			    	            	   pattern: "category/{catIndex}/subcat/{subCatIndex}",
			    			    	   name: "Products",
			    			    	   view: "Products",
			    			    	   targetAggregation: "detailPages",
			    	               },
			    	               {
			    	            	   pattern: "category/{catIndex}/subcat/{subCatIndex}/product/{productIndex}",
			    			    	   name: "ProductInfo",
			    			    	   view: "ProductInfo",
			    			    	   targetAggregation: "detailPages",
			    	               },
			    	               {
			    	            	   pattern: "Cart",
			    			    	   name: "Cart",
			    			    	   view: "Cart",
			    			    	   targetAggregation: "detailPages",
			    	               }
			    	               
    	               ]
			    	   
			       },
			       {
			    	   pattern: "",
			    	   name: "default",
			    	   view: "Category",
			    	   targetAggregation: "masterPages",
			    	   subroutes: [
			    	               {
			    	            	   pattern: "",
			    			    	   name: "Welcome",
			    			    	   view: "Welcome",
			    			    	   targetAggregation: "detailPages",
			    	               }
			    	               
			    	   ]
			       } 
	        ]
			
		}
		
	},
	
	init: function() {
		
		jQuery.sap.require("sap.m.routing.RouteMatchedHandler");
		jQuery.sap.require("sap.ui.core.routing.HashChanger");
		
		
		//call createContent
		sap.ui.core.UIComponent.prototype.init.apply(this, arguments);
		
		this._router = this.getRouter();
		
		//initlialize the router
		this._routeHandler = new sap.m.routing.RouteMatchedHandler(this._router);
		this._router.initialize();
		
		
	},
	
	createContent: function() {
		
		var oView = sap.ui.view({
			id: "app",
			viewName: "Pages.App",
			type: "JS",
			viewData: {component: this}
		});
		
		var oModel = new sap.ui.model.json.JSONModel('model/Product.json');
		oView.setModel(oModel,'products');
		
		var data = {
				
				items: []
				
		}
		
		var oCartModel = new sap.ui.model.json.JSONModel(data);
		oView.setModel(oCartModel,'cart');
		
		return oView;
		
	}
	
	
})
