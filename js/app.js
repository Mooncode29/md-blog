(function(){
	"use strict";
	console.log("start");
	var app = {
		init:function(){
			// let's go
			/*
				Récupérer le fichier example.md du serveur distant
					Serveur distant : */
			var url = "http://192.168.1.40:1337/";
			var urlExample = "example.md";
			$.ajax(url + urlExample)
			.done(app.ajaxDone)
			.fail(app.ajaxFail);

			/*
				Transformez le md en html
				Insérez le html dans la page dans  #md
			*/
		},
		ajaxDone : function(data){
			console.log("ajaxDone");
			var md = data;
			console.log(md);
			var converter = new showdown.Converter();
			var htmlexample = converter.makeHtml(md);
			console.log(htmlexample);
			$("#md").html(htmlexample);
			

		},
		ajaxFail : function(){
			console.log("ajaxFail");
		}

	};


	$(document).ready(function(){
		app.init();
	});
})();