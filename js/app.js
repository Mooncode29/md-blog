(function(){
	"use strict";
	console.log("start");
	var app = {
		url :'http://192.168.1.40:1337/',
		initMenu : function(){
			var urlJson = "menu.json";
			$.ajax(this.url + urlJson)
			.done(app.ajaxMenuDone)
			.fail(app.ajaxMenuFail);
		},
			
		ajaxMenuDone: function(dataJson){
			for (var i = 0; i < dataJson.menu.length; i++){
				var article = dataJson.menu[i];
				console.log(article);
				var lienHtml = '<li><a href="#" class="liens" data-path="' + article.path +'">';
				lienHtml += article.title;	
				lienHtml += '</a></li>';
				$('#liensArticles').append(lienHtml);
			};
			$('.liens').click(app.ouvreArticle);
		},

		ouvreArticle : function(){
			// console.log('ouvreArticle');
			// console.log(this);
			var lienJquery = $(this); //convertir notre noeud DOM en élément Jquery
			console.log(lienJquery);
			var path = lienJquery.data(path);
			// console.log(path);
			//faire requête ajax pour récupérer le fichier md
			$.ajax( app.url + path.path)
			.done(function(response){
				console.log(response);
			//convertir le response(fichier md) en html avec showdown;
				var converter = new showdown.Converter();
				var fichierHtml = converter.makeHtml(response);
				console.log(fichierHtml);
			//afficher le fichier html sur ma page web
				$('#md').html(fichierHtml);
			});
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