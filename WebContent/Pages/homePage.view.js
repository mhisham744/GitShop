var oActionSheet;
//var sliderX;
var  slidevX;

sap.ui.jsview("Pages.homePage", {

	
	getControllerName : function() {
		return "Pages.homePage";
	},

	createContent : function(oController) {
		
		 slidevX = new sap.m.Text({text: "30"});
		
		 oActionSheet = new sap.m.ActionSheet({
		     // title: "Action",
		      showCancelButton: true,
		      placement: sap.m.PlacementType.Bottom,
		      buttons: [
		        new sap.m.Button({
		          icon: "sap-icon://home",
		          text: "Home",
		          press : function (evt) {
					 app = sap.ui.getCore().byId("App");  
	                     app.to("homePage");
		     	   }
		        }),
		        new sap.m.Button({
		          icon: "sap-icon://settings",
		          text: "settings",
		          press : function (evt) {
		        	  var dialogSET = new sap.m.Dialog({
		        	      title: 'IBM LSS Smart Shopping',
		        	      width: "auto",
		        	     // type: 'Message',
		        	        content: [
		        	                // 
		        	                 
											new sap.m.List({
												headerText: "User Settings",
												//inset: false
												items:[
												       
												       new sap.m.InputListItem({
												    	   label:"Location Services:",
												    	   content: [
												    	             new sap.m.Switch ({state: true})
												    	             ]}),
												    	             
												    	             new sap.m.InputListItem({
																    	   label:"Distance Control :",
																    	   content: [
																    	             
																    	             
																				new sap.m.Slider({
																					value:30,
																					min:1,
																					liveChange: function()
																					{
																						slidevX.setText(this.getValue());
																					}
																				})
																    	             
																    	             
																    	             ]}),
																    	             new sap.m.InputListItem({
																				    	   label:"Miles:",
																				    	   content: [
																				    	             	slidevX
																				    	             ]}),
																				    	             
																				    	             new sap.m.InputListItem({
																								    	   label:"Cuisine:",
																								    	   content: [
																								    	             	sap.ui.getCore().byId("cuisineIN")	
																								    	             ]}),
																								    	             new sap.m.InputListItem({
																												    	   label:"Price Range:",
																												    	   content: [
																												    	             	sap.ui.getCore().byId("PriceXIN")	
																												    	             ]})
																       
																       ]
												       
												       
												       
											})
		        	                  
		        	       ],
		        	      beginButton: new sap.m.Button({
		        	        text: 'Save',
		        	        press: function () {
		        	          dialogSET.close();
		        	        }
		        	      })
		        	      ,
		        	      endButton: 
		        	        new sap.m.Button({
			        	        text: 'Cancel',
			        	        press: function () {
			        	        	 dialogSET.close();
			        	        	//sap.m.URLHelper.redirect('http://www.ibm.com/solutions/sap/us/en/landing/centers_sap_solutions_consulting.html', true);
			        	        }
			        	      })
		        	    });

		        	    dialogSET.open();
			     	   }
		        }),
		        new sap.m.Button({
			          icon: "sap-icon://hint",
			          text: "About",
			          press : function (evt) {
			        	  var dialog = new sap.m.Dialog({
			        	      title: 'IBM Business Traveller',
			        	      type: 'Message',
			        	        content: [
			        	                  
										new sap.m.Image(
												{
													src: "images/lss1.png"
													}
												),
												new sap.m.Text({
										  text: '\n' + 'The IBM Client Center – Lab for SAP Solutions provides customized assistance to help customers fully leverage and exploit advanced technologies from IBM and SAP and drive innovation across their organizations.'
										})
													        	                  
			        	                  ]
			        	  ,
		        	      beginButton: new sap.m.Button({
		        	        text: 'Ok',
		        	        press: function () {
		        	          dialog.close();
		        	        }
		        	      })
			        	      ,
			        	      endButton: 
			        	        new sap.m.Button({
				        	        text: 'Visit LSS',
				        	        press: function () {
				        	        	sap.m.URLHelper.redirect('http://www.ibm.com/solutions/sap/us/en/landing/centers_sap_solutions_consulting.html', true);
				        	        	dialog.close();
				        	        }
				        	      }),
			        	      afterClose: function() {
			        	        dialog.close();
			        	      }
			        	    });

			        	    dialog.open();
				     	   }
			        }),
		        new sap.m.Button({
		          icon: "sap-icon://employee",
		          text: "Logout",
		          press : function (evt) {
		        	  app = sap.ui.getCore().byId("App");  
	                     app.to("Login");  
		     	   }
		        })
		      ]
		    });
		
	
		var editButton = new sap.m.Button({
			text : "Edit",
			icon : "sap-icon://edit",
			press : function (evt) {
				var newValue = !tileContainer.getEditable();
				tileContainer.setEditable(newValue);
				evt.getSource().setText((newValue) ? "Done" : "Edit");
				evt.getSource().setIcon((newValue) ? "sap-icon://accept" : "sap-icon://edit");
			}
		});
		
		
		

			
		//	var cti = sap.ui.getCore().getModel().bindList("/feed").filter([filterCT]).getLength();
		
		var tileContainer = new sap.m.TileContainer({
			//height: "280px",
			tileDelete : function (evt) {
				var tile = evt.getParameter("tile");
				evt.getSource().removeTile(tile);
			},
			tiles : [
				new sap.m.StandardTile({
					icon : "sap-icon://cart-approval",
					number : "3",
					title : "View my Lists",
					Type: "Monitor",
					info : "Overview of your lists.",
					//infoState : "Error"
					press : function (evt) 
					{ 
						app = sap.ui.getCore().byId("App");  
                    app.to("Graph");  
						}
				}),
				new sap.m.StandardTile({
					icon : "sap-icon://cart",
					//type : "Monitor",
					title : "Create Shopping List",
					info: "Start a shopping plan.",
					//number: '36',
						press : function (evt) 
						{ app = sap.ui.getCore().byId("App");  
	                   app.to("restmap");  
							}
				}),
				new sap.m.StandardTile({
					icon : "sap-icon://locate-me",
					title : "Find Nearest Store",
					info: "Search stores near you.",
					//number: '36',
					press : function (evt) 
					{
						app = sap.ui.getCore().byId("App");  
                   //app.to("restmap");  
						}
				})
				/*
				,
				new sap.m.StandardTile({
					icon : "sap-icon://travel-itinerary",
					title : "Preference Predictions",
					info: "Using SAP PAL 2.0",
					infoState: "Success",
					press : function (evt) 
					{ app = sap.ui.getCore().byId("App");  
                    app.to("hungry");  
						}
				}),
				new sap.m.StandardTile({
					icon : "sap-icon://message-information",
					title : "Rate Restaurants",
					info: "Give your Feedback",
					press : function (evt) 
					{ app = sap.ui.getCore().byId("App");  
                    app.to("howwasdinner");  
						}
				})*/
			]
		});
		
		var feedList = new sap.m.List("btFeed",
				{
					//headerText: "Welcome to LSS Demo, here are today's updates:",
				//width: "auto",
			//	fitContainer: true
			height: "400px",
				inset : false
				}
				);
		
		var feedItem = new sap.m.FeedListItem("feedListD",{
				  sender:"{invited}",
		          icon:"{pic}",
		          iconDensityAware:false,
		          info:"{title}",
		         // timestamp:"{time}",
		          text:"{comment}"
		          ,senderPress: function()
		          {
		        	  var listDetailXV2 = new sap.m.List({
			      			headerText: 'Restaurant Info',
			      			inset: false
			      		});
			        	  
			        	  var itemTemplateXV2 = new sap.m.StandardListItem({
				              title : "{name}",
				              description : "{zipcode} " +"{city}"+ ", {country} ",
				             icon : "sap-icon://meal",
				           //   iconInset: false,
				              infoState: "Success",
				            info: "Cuisine: "+"{cuisine} /" + " Rating: " + "{name1}"
							//type: "Navigation",
							
				          });
			        
			        	  listDetailXV2.bindItems({
			      		    path : "/beaches",
			      		   template : itemTemplateXV2,
			      		    filters:  [new sap.ui.model.Filter("name", sap.ui.model.FilterOperator.EQ, this.getSender())]  
			      		});
			      		
			      
			        	  
			        	  var dialogXV2 = new sap.m.Dialog({
			        	      title: 'IBM Business Traveller',
			        	      type: 'Message',
			        	        content: [listDetailXV2
			        	                /*  ,new sap.m.Button({
				        	        text: 'Visit on Yelp!',
				        	        press: function () {
				        	        	//sap.m.URLHelper.redirect('http://www.ibm.com/solutions/sap/us/en/landing/centers_sap_solutions_consulting.html', true);
				        	        	dialogXV.close();
				        	        }
				        	      })*/
			        	        ]
			        	      ,
			        	      endButton: 
			        	        new sap.m.Button({
				        	        text: 'Ok',
				        	        press: function () {
				        	        	//sap.m.URLHelper.redirect('http://www.ibm.com/solutions/sap/us/en/landing/centers_sap_solutions_consulting.html', true);
				        	        	dialogXV2.close();
				        	        }
				        	      }),
			        	      afterClose: function() {
			        	        dialogXV2.close();
			        	      }
			        	    });

			        	    dialogXV2.open();
		          }
		});
		
	//	feedList.bindItems("/tweets",feedItem,null,null);
		
		feedList.bindItems({
		    path : "/tweets",
		    template : feedItem,
		    sorter:  new sap.ui.model.Sorter("time",true) 
		});
		
		
		
		
		
		var welcomeB = new sap.m.Button({ 
		
            icon: "sap-icon://drop-down-list",
            press : function (evt) {
          	  oActionSheet.openBy(evt.getSource());
	     	   }
          });
		
		var tweets = new sap.ui.core.HTML();
		var tweets2 = new sap.ui.core.HTML();
		
		tweets.setContent("<div class='twitterfeed' id='twfeed'>Twitter updates </div>");
		tweets2.setContent("<div class='twitterfeed' id='twfeed2'> </div>");

		
	//	tweets.setContent("<a class=\"twitter-timeline\"  href=\"https://twitter.com/hashtag/LSSSapphire2015\" data-widget-id=\"592986012244004864\">#LSSSapphire2015 Tweets</a><script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+\"://platform.twitter.com/widgets.js\";fjs.parentNode.insertBefore(js,fjs);}}(document,\"script\",\"twitter-wjs\");</script>");
	//	oHTML.setContent("<a class=\"twitter-timeline\"  width=750  href=\"https://twitter.com/hashtag/LSSSapphire2015\" data-widget-id=\"593256720371093504\">#LSSSapphire2015 Tweets</a><script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+\"://platform.twitter.com/widgets.js\";fjs.parentNode.insertBefore(js,fjs);}}(document,\"script\",\"twitter-wjs\");</script>"); 
	//	tweets.setContent("<a class=\"twitter-timeline\"  style=\"width:500px\" href=\"https://twitter.com/hashtag/LSSSapphire2015" data-widget-id="593256720371093504">#LSSSapphire2015 Tweets</a><script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script> 
			
	//	tweets2.setContent("<a class=\"twitter-timeline\" width=750  href=\"https://twitter.com/IBMSAPAlliance\" data-widget-id=\"593051196530765824\">@IBMSAPAlliance</a><script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+\"://platform.twitter.com/widgets.js\";fjs.parentNode.insertBefore(js,fjs);}}(document,\"script\",\"twitter-wjs\");</script>");
		
	//	oHTML.setContent("<a class=\"twitter-timeline\"  width=750  href=\"https://twitter.com/hashtag/LSSSapphire2015\" data-widget-id=\"593256720371093504\">#LSSSapphire2015 Tweets</a><script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+\"://platform.twitter.com/widgets.js\";fjs.parentNode.insertBefore(js,fjs);}}(document,\"script\",\"twitter-wjs\");</script>"); 
		var oFlexBoxT = new sap.m.FlexBox("flexboxT", {
 		    items:[
 		       //    feedList	
			new sap.m.ScrollContainer({vertical : true, horizontal : false, height: "400px", content: [ new sap.m.Label({text: "Tweets from #LSSsapphire2015"}),new sap.m.PullToRefresh({id: "refresh1", refresh: function (evt) {
			    //var that = this;
			    setTimeout(function () {
			    	sap.ui.getCore().byId("refresh1").hide();
			    	//tweets.removeAllContent();
			    	tweets.setContent("<div class='twitterfeed' id='twfeed'>Twitter updates </div>");
			      window.twitterFetcher && window.twitterFetcher.fetch( 
			  			{
			  			"id": '593256720371093504', 
			  			"domId": 'twfeed',
			  			"maxTweets": 20,
			  			"enableLinks": true,
			  			"showImages": false,
			  			"showUser": true,
			  			"showTime": true,
			  			"showInteraction": false,
			  			"showRetweet": false
			  		      }
			  		);
			  		
			    }, 2000);
			  }}), tweets ]}),
			new sap.m.ScrollContainer({vertical : true, horizontal : false, height: "400px", content:  [  new sap.m.Label({text: "Tweets from #saphcp"}),new sap.m.PullToRefresh({id: "refresh2", refresh: function (evt) {
			    
			    setTimeout(function () {
			    	sap.ui.getCore().byId("refresh2").hide();
			    	//tweets2.removeAllContent();
			    	tweets2.setContent("<div class='twitterfeed' id='twfeed2'> </div>");
			      window.twitterFetcher && window.twitterFetcher.fetch( 
			  			{
			  			"id": '595168181829771265', 
			  			//"id": '593051196530765824', 
			  			"domId": 'twfeed2',
			  			"maxTweets": 20,
			  			"enableLinks": true,
			  			"showImages": true,
			  			"showUser": true,
			  			"showTime": true,
			  			"showInteraction": false,
			  			"showRetweet": false
			  		      }
			  		);
			  		
			    }, 2000);
			  }}),tweets2 ]})
 		    ],
		    fitContainer: true
 		  });
 		  oFlexBoxT.setJustifyContent('Center');
 		  oFlexBoxT.setAlignItems('Start');
 		  
 		 
 		  
 		 var feedLayout = new sap.ui.layout.HorizontalLayout({
 			content: [feedList]
 		});
 		 
 		 var feedLayout2 = new sap.ui.layout.HorizontalLayout({
  			content: [
  			          //tweets
  			          ]
  		});
 		 
 		 
 		 var panelT = new sap.m.Panel("livePanel",{
		      headerToolbar: new sap.m.Toolbar({
		    	  width:"auto",
		    	  
		        content: [
		          new sap.m.Label({ text: "Welcome to LSS Demo, here are the latest updates:" }),
		          new sap.m.ToolbarSpacer(),
		          new sap.m.Label({ text: "BT Updates" }),
		      	new sap.m.Switch("sTweet",{
					state:false,
					customTextOn:" ", 
					customTextOff:" ",
					change: function (){
						
								if(sap.ui.getCore().byId("sTweet").getState()==true)
								{
								//	tweets.removeAllContent();
								//	tweets2.removeAllContent();
									tweets.setContent("<div class='twitterfeed' id='twfeed'>Twitter updates </div>");
									tweets2.setContent("<div class='twitterfeed' id='twfeed2'> </div>");
									window.twitterFetcher && window.twitterFetcher.fetch( 
											{
											"id": '593256720371093504', 
											"domId": 'twfeed',
											"maxTweets": 20,
											"enableLinks": true,
											"showImages": false,
											"showUser": true,
											"showTime": true,
											"showInteraction": false,
											"showRetweet": false
										      }
										);
										window.twitterFetcher && window.twitterFetcher.fetch( 
											{
											"id": '595168181829771265', 
											//"id": '593051196530765824', 
											"domId": 'twfeed2',
											"maxTweets": 20,
											"enableLinks": true,
											"showImages": true,
											"showUser": true,
											"showTime": true,
											"showInteraction": false,
											"showRetweet": false
										      }
										);
									sap.ui.getCore().byId("livePanel").removeAllContent();
								sap.ui.getCore().byId("livePanel").addContent(oFlexBoxT);}
							else
								{sap.ui.getCore().byId("livePanel").removeAllContent();
								sap.ui.getCore().byId("livePanel").addContent(sap.ui.getCore().byId("btFeed"));}
					}
				}),
				new sap.m.Label({ text: "Live tweets!" })
		        ]
		      }),
		      content: [
		               //tweets,
		               //oHTML, 
		               feedList,
		               //feedLayout
		              oFlexBoxT
		              
		      ]
		    });
 		 var ibmimage = new sap.m.Image({src:"images/step0005.png"});
 		 var sapimage = new sap.m.Image({src:"images/step0004.png"});
		this.page = new sap.m.Page({
			title : "IBM LSS Client Center - Business Traveler",
			icon : "{img>/icon}",
			showNavButton : false,
			navButtonText : "Logout",
			tap: function(oEvent) {
			//	app = sap.ui.getCore().byId("App");   	
			//	app.back();
				},
				enableScrolling: false,
				content: [
				         // menuPanel,
					tileContainer,
					//oShell
				//panelT   Here is the one
				//	oFlexBoxT
					//feedList
					//tweets
				],
				footer: new sap.m.Bar({
					contentMiddle : [
						editButton
					]
				}),headerContent: [ibmimage,welcomeB]
		});
		
		return this.page;
		
	}

});