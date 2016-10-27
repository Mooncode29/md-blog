(function(){
	"use strict";
	console.log("start");
	var app = {
<<<<<<< HEAD
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
=======
		ancre : null,
		len: null,
		objJson : null,

		init:function(){
		
			app.listners();
			app.getFichierJson();

			// app.getFichierJson();
			// app.ajaxDone2();

		},

		getFichierJson : function(){
			var lienJson = ("http://192.168.1.40:1337/menu.json");
			$.ajax(lienJson)
			.done(app.getTitle)
			.fail(console.log('fail'));
		},
		
		getTitle : function(json){
			app.objJson = json;
			console.log(app.objJson);
			app.len = json.menu.length;
			for(var i = 0; i < app.len; i++){
				var titre = json.menu[i].title;	
				var ancre = ' <a class="item">'+ titre + '</a>';
				$("#titre_articles").append(ancre);
			}
		},
>>>>>>> 95aae7917c41a76ab67cfeb6f048a60a7540f5aa

		listners : function(){
			$("a").on('click', function(){

				app.getPath();
			})
		},

		getPath : function(){
			app.len = app.objJson.menu.lenght;
			for(var i = 0; i < app.len; i++){
				var article = json.menu[i].path;
				console.log(article);

			}
		},

	};
	$(document).ready(function(){
		//app.init();
		app.initMenu();
	});
})();
			// var converter = new showdown.Converter();
			// var htmlFile = converter.makeHtml(mdFile);
			// $("#md").append(htmlFile)		