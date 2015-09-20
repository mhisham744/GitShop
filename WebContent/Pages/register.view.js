jQuery.sap.require("sap.m.MessageBox");
var formr;
var gridr;
sap.ui.jsview("Pages.register", {

	getControllerName : function() {
		return "Pages.register";
	},

	createContent : function(oController) {
 		
		var usernameIN = new sap.m.Input("usernameIN" , {
	    	   type: sap.m.InputType.Text,
	    	   value: "",
	    	   placeholder: 'Enter Username...',
	    	   valueStateText: "Name must not be empty."
	       });
		
		var passwordIN = new sap.m.Input("passwordIN",{
			type: sap.m.InputType.Password,
			placeholder: 'Enter Password ...',
			value: "",
			valueStateText: "Name must not be empty."
			});
		
			var lastname = new sap.m.Input("lastname",{
				type: sap.m.InputType.Text,
				value: "",
				placeholder: 'Last Name'
			});
			
			var firstname = new sap.m.Input("firstname",{
				type: sap.m.InputType.Text,
				value: "",
				placeholder: 'First Name'
			});
		
		var loc = new sap.m.Switch;
		var slider = new sap.m.Slider({
			value:30,
			min:1,
			liveChange: function()
			{
				slidev.setText(slider.getValue()+" Miles");
			}
		});
		var slidev = new sap.m.Text({text:slider.getValue()+" Miles"})
		var countries = new sap.m.Select({width:"80%", items:[
				                                               new sap.ui.core.Item({text:"All"}),
				                                               new sap.ui.core.Item({text:"USA"}),
				                                               new sap.ui.core.Item({text:"Canada"}),
				                                               new sap.ui.core.Item({text:"Germany"})
				                                               ]});
		
		
		var cuisineSelect = new sap.m.Select("cuisineIN",{width:"80%", items:[
                                              new sap.ui.core.Item({text:"American"}),
                                              new sap.ui.core.Item({text:"Asian"}),
                                              new sap.ui.core.Item({text:"Latin"}),
                                              new sap.ui.core.Item({text:"Seafood"}),
                                              new sap.ui.core.Item({text:"Mexican"}),
                                              new sap.ui.core.Item({text:"Italian"}),
                                              new sap.ui.core.Item({text:"Indian"})
                                              ]});
		
		var priceSelect = new sap.m.Select("PriceXIN",{width:"80%", items:[
                                              new sap.ui.core.Item({text:"$1-10"}),
                                              new sap.ui.core.Item({text:"$10-20"}),
                                              new sap.ui.core.Item({text:"$20-30"}),
                                              new sap.ui.core.Item({text:"$50+"})
                                              ]});
		
		var oLayout1 = new sap.ui.layout.form.ResponsiveGridLayout("L1");
		var oForm1 = new sap.ui.layout.form.Form("F1",{
			title: new sap.ui.core.Title({text: "Create New Profile", tooltip: "Title tooltip"}),
			editable: true,
			layout: oLayout1,
			formContainers: [
			                 

				new sap.ui.layout.form.FormContainer("F1C5",{
					title: "User Credential Detail",
					formElements: [
						new sap.ui.layout.form.FormElement({
							//label: "User Name",
							label : new sap.m.Label({
								text : "User Name",
								required: true,
								labelFor : "usernameIN"
							}),
							fields: [
						       usernameIN
						       
							]
						}),
						new sap.ui.layout.form.FormElement({
							//label: "Password",
							label : new sap.m.Label({
									text : "Password",
									required: true,
									labelFor : "passwordIN"
								}),
							fields: [
							    passwordIN	
							    						
							]
						}),
						new sap.ui.layout.form.FormElement({
							//label: "Confirm Password",
							label : new sap.m.Label({
								text : "Confirm Password",
								required: true,
								labelFor : "inpConfPassword"
							}),
							fields: [
							    new sap.m.Input("inpConfPassword", {
							      type : sap.m.InputType.Password,
							      placeholder: 'Confirm Password'
							    })							
							]
						})
					]
				}),
				new sap.ui.layout.form.FormContainer("F1C1",{
					title: "Personal Data",
					formElements: [
						new sap.ui.layout.form.FormElement({
							//label: "Name",
							label : new sap.m.Label({
								text : "Name",
								required: true,
								labelFor : "firstname"
							}),
							fields: [
							
							lastname,firstname
								
	
							]
						}),
					/*	new sap.ui.layout.form.FormElement({
							label: "Date of Birth",
							fields: [new sap.m.DateTimeInput({
							      type: sap.m.DateTimeInputType.Date,
							      placeholder: 'Enter Date'
							    })							]
						}),*/
						
						new sap.ui.layout.form.FormElement({
							//label: "Name",
							label : new sap.m.Label({
								text : "Email",
								required: true
							}),
							fields: [
							
							new sap.m.Input("emailIN" , {
					    	   type: sap.m.InputType.Text,
					    	   value: "",
					    	   placeholder: 'Enter Email...',
					    	   valueStateText: "Email must not be empty.."
					       })
								
	
							]
						}),
						new sap.ui.layout.form.FormElement({
							//label: "Name",
							label : new sap.m.Label({
								text : "Phone",
								required: true,
								labelFor : "firstname"
							}),
							fields: [
							
							new sap.m.Input("phoneIN" , {
					    	   type: sap.m.InputType.Text,
					    	   value: "",
					    	   placeholder: 'Enter Phone...',
					    	   valueStateText: "Phone must not be empty.."
					       })
								
	
							]
						})
						
						
						
						
						/*
						new sap.ui.layout.form.FormElement({
							label: "Gender",
							fields: [new sap.m.RadioButtonGroup({
								columns: 2,
								width: "130px",
								class: "sapUiMediumMarginBottom",
								buttons: [new sap.m.RadioButton({text: "Male"}),
									new sap.m.RadioButton({text: "Female"})],
							})]
						})*/
						]
				}),
				new sap.ui.layout.form.FormContainer("F1C2",{
					title: "Location Settings",
					formElements: [
						 new sap.ui.layout.form.FormElement({
							label: "Enable Location Services",
							fields: [
							 loc = 	new sap.m.Switch({
								state:true,
								customTextOn:" ", 
								customTextOff:" ",
								change: function (){
									
									if(loc.getState()==true)
									{slider.setEnabled(true);
									countries.setEnabled(true);}
								else
									{slider.setEnabled(false);
									countries.setEnabled(false);}
									
								}
							})
							]
						}),new sap.ui.layout.form.FormElement({
							label: "Distance Control",
							fields: [slider,slidev
							]
						}),
						
					/*	new sap.ui.layout.form.FormElement({
							label: "Country",
							fields: [countries
							]
						})*/
						
						]
				}),
				new sap.ui.layout.form.FormContainer("F1C3",{
					title: "Food Preferences",
					formElements: [
						new sap.ui.layout.form.FormElement({
							label: "Cuisine",
							fields: [cuisineSelect
							]
						}),
						new sap.ui.layout.form.FormElement({
							label: "Price Range",
							fields: [priceSelect
							]
						}),
						new sap.ui.layout.form.FormElement({
							label: "Details",
							fields: [new sap.m.Input({type: sap.m.InputType.Text,value: "",placeholder: 'Please enter your food hints..'})
							]
						})
					]
				})/*,
				new sap.ui.layout.form.FormContainer("F1C4",{
					title: "Social Media",
					formElements: [
						new sap.ui.layout.form.FormElement({
							label: "Facebook",
							fields: [ new sap.m.Switch({state:true,customTextOn:" ", customTextOff:" "})
							]
						}),
						new sap.ui.layout.form.FormElement({
							label: "LinkedIn",
							fields: [new sap.m.Switch({state:true,customTextOn:" ", customTextOff:" "})
							]
						}),
						new sap.ui.layout.form.FormElement({
							label: "Twitter",
							fields: [new sap.m.Switch({state:true,customTextOn:" ", customTextOff:" "})
							]
						})
					]
				})*/
			]
		});
		

		var regpanel2 = new sap.m.Panel({
		      headerToolbar: new sap.m.Toolbar({
		        content: [
		          new sap.m.Label({ text: "Create New Profile" })
		        ]
		      }),
		      infoToolbar: new sap.m.Toolbar({
		        content: [
		          new sap.m.Label({ text: "Access Details"}),
		          new sap.m.ToolbarSpacer(),
		          new sap.ui.core.Icon({ src: "sap-icon://add-filter" })
		        ]
		      }),
		      content: [
		      ]
		    });
		
		var flag = false;
		var regButton = new sap.m.Button({
	     	   text : "Create Account",
	     	   type: "Accept",
	     	   press : function (evt) {
	     	   
	     	   /* code for validation added */
	     	   	 if(sap.ui.getCore().byId("usernameIN").getValue() == ''){
	     			sap.m.MessageBox.alert("Please Enter a value for UserName"); 
	     			sap.ui.getCore().byId("usernameIN").setValueState("Error");
	     			
	     		 } else if (sap.ui.getCore().byId("passwordIN").getValue() == ''){
	     			 sap.m.MessageBox.alert("Please Enter a value for Password"); 
	     			 sap.ui.getCore().byId("passwordIN").setValueState("Error");
	     			 
	     		} else if (sap.ui.getCore().byId("emailIN").getValue() == ''){
	     			 sap.m.MessageBox.alert("Please Enter a value for Email"); 
	     			 sap.ui.getCore().byId("emailIN").setValueState("Error");
	     			 
	     		} else if (sap.ui.getCore().byId("phoneIN").getValue() == ''){
	     			 sap.m.MessageBox.alert("Please Enter a value for Phone"); 
	     			 sap.ui.getCore().byId("phoneIN").setValueState("Error");
	     			 
	     		 } else if (sap.ui.getCore().byId("inpConfPassword").getValue() == ''){
	     		 	sap.m.MessageBox.alert("Please re-enter the Password again "); 
	     			sap.ui.getCore().byId("inpConfPassword").setValueState("Error");
	     			 
	     		 } else if (sap.ui.getCore().byId("lastname").getValue() == ''){
	     		 	sap.m.MessageBox.alert("Please Enter a value for Last Name "); 
	     			sap.ui.getCore().byId("lastname").setValueState("Error");
	     			
	     		 } else if (sap.ui.getCore().byId("firstname").getValue() == ''){
	     		 	sap.m.MessageBox.alert("Please Enter a value for First Name "); 
	     			sap.ui.getCore().byId("firstname").setValueState("Error");
	     		 
	     		 }else{
	     		 
	     		 /* I have put your existing code in the else block */
	     		    var oEntry1 = {};
			 		 oEntry1.username = usernameIN.getValue();
			 		oEntry1.password = passwordIN.getValue();
			 			oEntry1.fname=firstname.getValue();
			 			oEntry1.lname=lastname.getValue();
			 			oEntry1.Phone=sap.ui.getCore().byId("phoneIN").getValue();
			 			oEntry1.pic= "null";
			 			oEntry1.email=sap.ui.getCore().byId("emailIN").getValue();
			 			oEntry1.food=sap.ui.getCore().byId("cuisineIN").getSelectedItem().getText();
			 			oEntry1.food2="Nothing";
			 			oEntry1.food3="Nothing";
			 			
			 			//var ilItem3 = new sap.m.DisplayListItem(	{ value: "{Ebeln}"});
			 			// alert(ilItem2.getValue());
			 		oModel.create("people",   
			 				oEntry1, null, null,  
		                           function(){  
		                        	   flag = true;
		                         	 // jQuery.sap.require("sap.m.MessageBox");
		     		     		      sap.m.MessageBox.alert("User creationFailed. Duplicate username: " + usernameIN.getValue());
		                 });
		     	//	  sap.m.MessageToast.show("Account was not created."); 
		     		
			 		if(!flag)
			 			{
			 			sap.ui.getCore().byId("username").setValue(usernameIN.getValue());
			 		//	oStorage.put("uName",username.getValue());
	    		      sap.m.MessageBox.alert("Username Created.");
		     			 app = sap.ui.getCore().byId("App");  
			               app.to("homePage");
			 			}
			 		else
			 			{flag = false;}

	     		}
	     		/* End of Chaange */
	     	   }});
		 
		 
		var canButton = new sap.m.Button({
	     	   text : "Cancel Account",
	     	   type: "Reject",
	     	   press : function (evt) {
	     		
	     		  sap.m.MessageToast.show("Account creation aborted."); 
	     		     app = sap.ui.getCore().byId("App");  
               app.to("Login"); 
               
	     	   }});
		var oFlexBox6 = new sap.m.FlexBox("flexbox6", {
		    items:[
		           regButton,canButton
		    ]
		  });
		  oFlexBox6.setJustifyContent('Center');
		  oFlexBox6.setAlignItems('Center');
		  
	 		 this.page = new sap.m.Page("page3",{
	 			title : "IBM LSS Client Center - Smart Shopping",
	 			icon : "{img>/icon}",
				showNavButton : true,
				navButtonText : "Home",
				navButtonTap : function() {
					app = sap.ui.getCore().byId("App");  
                    app.to("Login");   
				},
	 			content :[oForm1,oFlexBox6],
	 			headerContent:[new sap.m.Image({src:"images/step0005.png"})]
	 		});
	 		 
		return this.page;
	}

});
