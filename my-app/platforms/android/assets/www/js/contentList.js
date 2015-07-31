$(document).ready(function() {
	document.addEventListener("deviceready", onDeviceReady, true); 
	
	function onDeviceReady() {
		var data = {
				"idProduit" : 22,
			};
			$.ajax({ // create an ajax request to load_page.php
				type : "POST",
				url : "http://eventek-tn.com/test/E-adv/file-uploading/view.php",
				dataType : "json", // expect json to be returned
				data : data,
				success : function(response) {

					for (var i = 0; i < response.d.length - 1; i++) {
						$('ul#contentList').append(
								'<li><a href="#" class="ui-btn ui-btn-icon-right ui-icon-carat-r">'
										+ response.d[i].file + '</a></li>');
					}
				}
			});
		}
	
	
} );