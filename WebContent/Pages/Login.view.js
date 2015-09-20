var user = new String;
var oListCount;
var filterU;
var filterP;
var itemCount;
var globalC;
var filterCT;

sap.ui.jsview("Pages.Login", {

	getControllerName : function() {
		return "Pages.Login";
	},

	createContent : function(oController) {
 		
		var labelUN = new sap.m.Label({
		      text: 'Username'
		//      design: 'Bold'
		    });
		
		var cti = new sap.m.Text("cti");
		
		var sep1 = new sap.m.Label({
		      text: ' '
		//      design: 'Bold'
		    });
		var sep5 = new sap.m.Label({
		      text: ' '
		//      design: 'Bold'
		    });
		var sep2 = new sap.m.Label({
		      text: ' '
		//      design: 'Bold'
		    });
		
		var sep6 = new sap.m.Label({
		      text: ' '
		//      design: 'Bold'
		    });
		
		 var username = new sap.m.Input("username",{
		     type: sap.m.InputType.Text,
		      placeholder: 'Enter Username ...',
		      width:"400px",
		      valueStateText: "Name must not be empty."
		     // valueState:"Success"
		    });
		 username.setValueState("Success");
		 	
		 
		var labelPW = new sap.m.Label({
		      text: 'Password'
		     // design: 'Bold'
		    });
		var password = new sap.m.Input("password",{
		      type: sap.m.InputType.Password,
		      width:"400px",
		      placeholder: 'Enter password ...'
		    });
		password.setValueState("Success");
		
		var lButton = new sap.m.Button({
	     	   text : "Login",
	     	   type: "Accept",
	     	  width:"200px",
	     	   press : function (evt) {
	     		  app.to("homePage");
	     		   /*
	     			if(username.getValue()==""||password.getValue()=="")
	     			{
	     			//	sap.m.MessageBox.alert(Math.random());
	     				sap.m.MessageBox.alert("Please Enter a valid username and password."); 
	     				username.setValueState("Error");
	     				password.setValueState("Error");
	     			}
	     			else
	     				{
	     			oStorage.put("uName",username.getValue());
	     				globalC = "Italian";
	     				 
	     				 filterU = new sap.ui.model.Filter("username", "EQ", username.getValue());
	     				 filterP = new sap.ui.model.Filter("password", "EQ", password.getValue()); 
	     				
	     				
	     				var modelx = sap.ui.getCore().getModel();
	     				oBinding = modelx.bindList("/people");
	     			//	alert(oBinding.filter([filterU,filterP]).getLength());
	     				
	     				if(oBinding.filter([filterU,filterP]).getLength()==1)
	     					{
	     					
	     					filterCT = new sap.ui.model.Filter("owner", "EQ", username.getValue()); 
	     					//sap.m.MessageBox.alert(sap.ui.getCore().getModel().bindList("/feed").filter([filterCT]).getLength());
	     					
	     					app = sap.ui.getCore().byId("App");  
				               app.to("homePage");
				           }
	     				else
	     				{
	     				sap.m.MessageBox.alert("Please Enter a valid username and password."); 
	     				username.setValueState("Error");
	     				password.setValueState("Error");
	     				}
	     				}
		     			*/
	     			 	//var checkl = oListCount.getMetadata
	     		// jQuery.sap.require("sap.m.MessageBox");
	     		//      sap.m.MessageBox.alert(checkl);
	     		      }
	     	   
		});
		
		var rButton = new sap.m.Button({
	     	   text : "New User?",
	     	  width:"150px",
	     	   press : function (evt) {
	     		   
	     		     app = sap.ui.getCore().byId("App");  
                  app.to("register");  
	     		  
	     	   }});
		var logo3 = new sap.m.Image("logo3",
				{
				src: "images/dcode.png"
				}
			);
		
		var logo4 = new sap.m.Image("logo4",
				{
				src: "images/step0003.png"
				}
			);
		
		var oFlexBox0 = new sap.m.FlexBox("flexbox0", {
		    items:[
labelUN,username,labelPW,password, lButton, rButton, sep5, logo3, sep6, logo4
		    ]
		  });
		  oFlexBox0.setJustifyContent('Center');
		  oFlexBox0.setAlignItems('Center');
		  oFlexBox0.setDirection('Column');
			
		  var logo1 = new sap.m.Image("log12",
					{
					src: "images/lss2.png"
					}
				);
			var logo2 = new sap.m.Image("logo2",
					{
					src: "images/lss1.png"
					}
				);
			var sep3 = new sap.m.Image("sep3",
					{
					src: "images/sep.png"
					}
				);
			var logo33 = new sap.m.Image("logo33",
					{
					src: "images/welcome.jpg"
					}
				)
			
			var oFlexBoxL = new sap.m.FlexBox("flexboxL", {
	 		    items:[
	 		         //  logo1,sep3, logo2
	 		         logo33
	 		    ]
	 		  });
			
			
	 		  oFlexBoxL.setJustifyContent('Center');
	 		  oFlexBoxL.setAlignItems('Center');
		  
	 		 this.page = new sap.m.Page("page0",{
	 			title : "IBM Smart Shopping",
	 			icon : "{img>/icon}",
	 			content :[sep1, oFlexBoxL,sep2, oFlexBox0]
	 		});
	 		 
		return this.page;
	}

});