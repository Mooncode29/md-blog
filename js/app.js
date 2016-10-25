(function(){
	"use strict";
	var app = {
		init:function(){
			// let's go
			app.listners();
		},

		listners : function(){
			$("#recuperer").on('click', app.getFichier );

		},

		getFichier : function(){
			var addressIp = ("http://192.168.1.21:1337/alice.md"); 
			$.ajax(addressIp)
			.done(app.ajaxDone)
			.fail(app.ajaxFail);
		},
		ajaxDone : function(mdFile){
			console.log(mdFile);
			var converter = new showdown.Converter();
			var htmlFile = converter.makeHtml(mdFile);
			$("#md").append(htmlFile);

		}

	};


	$(document).ready(function(){
		app.init();
	});
})();