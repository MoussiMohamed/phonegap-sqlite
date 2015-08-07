alert("here");
var fileTransfer = new FileTransfer();
		    	var filesPath = "http://eventek-tn.com/test/E-adv/file-uploading/uploads/";
		    	var responseVal="";
		    	var urlFile="";
		    	var jsonArray="";
		    	var jsonArrayForDb = "";
var db;
var dbCreated = false;
    function synchroData(){
    	
    	   $.ajax({ // create an ajax request to load_page.php
			 type : "POST",
			 url : "http://eventek-tn.com/test/E-adv/file-uploading/view.php",
			 dataType : "json", // expect json to be returned
 
			 success : function(response) {
				 jsonArray=response;
					 window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function (fs) {
						 for (var i = 0; i < jsonArray.d.length - 1; i++) {
					 responseVal=jsonArray.d[i].file;
						 urlFile=filesPath+responseVal;
			    	       var fileSystemPath = fs.root.toURL() + responseVal; // full file path
			    	       fileTransfer.download(urlFile, fileSystemPath, function (entry) {
			    	                console.log(entry.fullPath); // entry is fileEntry object
			    	       }, function (error) {
			    	                console.log("Some error");
			    	       });
			    	    }
			    	    });
				 }
 			
		 });
		
		$.ajax({ // create an ajax request to get all Data for synchronization
			type : "POST",
			url : "http://eventek-tn.com/test/E-adv/file-uploading/SychnronizeDB.php",
			dataType : "json", // expect json to be returned

	success : function(responseData) {
		jsonArrayForDb=responseData;
		db = window.openDatabase("db_e_adv", "1.0", "db_e_adv", 2000000);
		if (dbCreated) {

		} else {
			db.transaction(populateDB, transaction_error, populateDB_success);
		}
		
	}

	});

	}
	
	function populateDB(tx) {
	tx.executeSql('DROP TABLE IF EXISTS user');
		var SqlStringUser="CREATE TABLE IF NOT EXISTS user (
  "id_user int(11) NOT NULL, "+
  "name varchar(50) NOT NULL, "+
  "surname varchar(50) NOT NULL, "+
  "email varchar(60) NOT NULL, "+
  "password varchar(50) NOT NULL, "+
  "dateInsert datetime DEFAULT NULL, "+
  "PRIMARY KEY ('id_user')) ";
 
 tx.executeSql(SqlStringUser);
 // for (var i = 0; i < jsonArrayForDb.user.length - 1; i++) {
// 			
		// }
		alert(jsonArrayForDb.user[1].id_user);
 //tx.executeSql("INSERT INTO Registration (firstname,lastname,age,username,password) VALUES ('"+ fname +"','"+ lname +"' , "+ age+", '"+ uname +"','"+ pwrd +"' )");
  
}
 
function transaction_error(tx, error) {
 alert("Database Error: " + error);
}
   
function populateDB_success() {
 dbCreated = true;

 alert("Data Synchronized Successfully");
  
}
	
