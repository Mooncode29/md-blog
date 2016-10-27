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
				var lienHtml = '<li><a href="#" class="liens" data-path="' + article.path +'">';
				lienHtml += article.title;	
				lienHtml += '</a></li>';
				$('#liensArticles').append(lienHtml);
			};
			$('.liens').click(app.ouvreArticle);
		},

		ouvreArticle : function(){
			var lienJquery = $(this);
			var path = lienJquery.data(path);
			$.ajax( app.url + path.path)
			.done(function(response){
			var converter = new showdown.Converter();
			var fichierHtml = converter.makeHtml(response);
			$('#md').html(fichierHtml);
		});
		},

		ajaxMenuFail : function(){
			console.log('ajaxMenuFail');
		},
	};

	$(document).ready(function(){
		app.initMenu();
	});
})();