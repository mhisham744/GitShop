sap.ui.controller("Pages.homePage", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf Pages.homePage
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf Pages.homePage
*/
//	onBeforeRendering: function() {
//
//	},
	
	handleRefresh1 : function (evt) {
	    var that = this;
	    setTimeout(function () {
	      that.getView().byId("refresh1").hide();
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
	  },

	  handleRefresh2 : function (evt) {
		    var that = this;
		    setTimeout(function () {
		      that.getView().byId("refresh2").hide();
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
		  },
/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf Pages.homePage
*/
	onAfterRendering: function() {
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
			"showRetweet": true
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
			"showRetweet": true
		      }
		);
	}

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf Pages.homePage
*/
//	onExit: function() {
//
//	}

});