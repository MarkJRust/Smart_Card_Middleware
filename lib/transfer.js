define('transfer', function (require) {
    "use strict";
 	var Config = require('capital_one');

    var Transfer = {
		initWithKey: function(apiKey) {
			Config.setApiKey(apiKey);
			return this;
		},
		urlWithEntity: function() {
			return Config.baseUrl+'/transfers/';
		},
		urlWithAccountEntity: function() {
			return Config.baseUrl+'/accounts/';
		},
		apiKey: function() {
			return Config.apiKey;
		},
		/**
		  # @Method: createTransfer
		  # @Parameters: AccountId
		  # @Returns a JSON Object
		**/
		createTransfer: function(id,json) {
			var transfer;
			var request = $.ajax({ 
				url: this.urlWithAccountEntity()+id+'/transfers?key='+this.apiKey(),
				data: json,
				contentType: 'application/json',
				async: false,
				type: 'POST'
			});
			request.complete(function(results) {
				transfer = results.responseJSON;
			});
			return transfer;
		}
	};
    return Transfer;
});
