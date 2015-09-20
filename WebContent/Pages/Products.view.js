sap.ui.jsview("Pages.Products", {

	getControllerName : function() {
		return "Pages.Products";
	},

	createContent : function(oController) {
		
		var oTable = new sap.m.Table("productsTable",{
			inset: true,
			columns: [
			          //image
			         new sap.m.Column({
			        	 hAlign: "Left",
			        	 width: "100px",
			        	 demandPopin: true,
			        	 popinDisplay: "Block",
			        	 minScreenWidth: sap.m.ScreenSize.Medium
			         }),
			         //title/desc
			         new sap.m.Column({
			        	 hAlign: "Left",
			        	 demandPopin: true,
			        	 popinDisplay: "Block",
			        	 minScreenWidth: sap.m.ScreenSize.Medium
			         }),
			         //price
			         new sap.m.Column({
			        	 hAlign: "Left",
			        	 width: "100px",
			        	 demandPopin: true,
			        	 popinDisplay: "Block",
			        	 minScreenWidth: sap.m.ScreenSize.Medium
			         }),
			         //button
			         new sap.m.Column({
			        	 hAlign: "Left",
			        	 width: "100px",
			        	 demandPopin: true,
			        	 popinDisplay: "Block",
			        	 minScreenWidth: sap.m.ScreenSize.Medium
			         }) 
			          
			]
		});
		
		var oTemplate = new sap.m.ColumnListItem({
			type: sap.m.ListType.Active,
			cells: [
			        new sap.m.Image({
			        	src: "{products>image}",
			        	height: "100px"
			        }),
			        
			        new sap.m.Text({
			        	text: "{products>name} \n {products>title}"
			        }),
			        
			        new sap.m.Text({
			        	text: "{products>price} USD"
			        }),
			        
			        new sap.m.Button({
			        	text: "Add to Cart",
			        	press: function(e) {
			        		sap.demo.cart.common.addToCart(e,this);
			        	}
			        })
			]
		});
		
		oTemplate.attachPress(function(evt) {
			oController.productPress(evt);
		})
		
		oTable.bindAggregation("items","products>product",oTemplate);
		
		
 		return new sap.m.Page({
			title: "Collection",
			content: [oTable]
		});
	}

});