function getFiles() {
	// if(sessionStorage.getItem("UserLogged") == null){
		// alert("Permission non accordée !\nVeuillez saisir vos paramètres d'accès");
// 	
		// window.location.replace("index.html");
		// sessionStorage.clear();
	// }else{
		var data = {
      "idProduit": 22,
      
    };
	
	$.ajax({    //create an ajax request to load_page.php
        type: "POST",
        url: "http://eventek-tn.com/test/E-adv/file-uploading/view.php",             
        dataType: "json",   //expect json to be returned                
        data: data,
        success: function(response){                   

            
            for (var i = 0; i < response.d.length-1; i++) { 
            	
            	$('ul#contentList').append('<li><a href="#" class="ui-btn ui-btn-icon-right ui-icon-carat-r">'+response.d[i].file+'</a></li>');
                // t.row.add( [
                    // response.d[i].id_file,
                    // response.d[i].file,
                    // response.d[i].content_type,
                    // response.d[i].size,
                    // '<input type="button"  class="btn btn-primary btn-xs" value = "Afficher" onClick="Javascript:doGetPDF(this)" >',
                    // '<input type="button" class="btn btn-danger btn-xs" value = "Supprimer" data-title="Delete" data-toggle="modal" onClick="Javascript:doDeletePDF(this)" data-target="#delete" >'
//                     
                    // // '<input type="button"  class="btn btn-primary btn-xs" value = "Afficher" onClick="Javascript:changeScreanToEdit(this)" >',
                // ] ).draw();
         
            }
        }

    });
	
 }
// } 