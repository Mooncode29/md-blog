(function(){
	"use strict";
	console.log("start");
	var app = {
		url :'http://192.168.1.40:1337/',
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
			app.initMenu();
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
		},

		initMenu : function(){
			var urlJson = "menu.json";
			$.ajax(this.url + urlJson)
			.done(app.ajaxMenuDone)
			.fail(app.ajaxMenuFail);
			//app.listner();
		},
		ajaxMenuDone: function(dataJson){
			console.log('ajaxMenuDone');
			console.log(dataJson);
			// for (var i = 0; i < dataJson.menu.length; i++){
			// 	$("#menu").append('<li>'<a href="#" data-path="+dataJson.menu[i].path+'">'+ dataJson.menu[i].title + '</a>'</li>');
			// 	}
// on clique sur le lien
// récupérer le fichier contenant ce titre 
// et on afficher le fichier
		},

		listner : function(){
			$("a").on('click',console.log('click') );
		},

		ajaxMenuFail : function(){
			console.log('ajaxMenuFail');
		},

	};


	$(document).ready(function(){
		//app.init();
		
		app.initMenu();
	});
})();