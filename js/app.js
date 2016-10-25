(function(){
	"use strict";
	var app = {
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
		app.init();
	});
})();
			// var converter = new showdown.Converter();
			// var htmlFile = converter.makeHtml(mdFile);
			// $("#md").append(htmlFile)		