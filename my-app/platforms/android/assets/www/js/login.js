var db;
var dbCreated = false;
 

//document.addEventListener("deviceready", onDeviceReady, false);
function doLogin(){
	alert("entered in on device ready");
 db = window.openDatabase("db_e_adv", "1.0", "db_e_adv", 2000000);
 if (dbCreated)
  {
      // created
  }
  
 else{
 db.transaction(getregistdata, transaction_error);
 }
}
 
function getregistdata(tx){
  
  var sql = "select u.email,u.password,at_r_u.id_role from user u, role r, attr_role_user at_r_u";

  tx.executeSql(sql, [], getlogin_success);
}
 
function transaction_error(tx, error) {
 alert("Database Error: " + error);
}
 
function getlogin_success(tx, results){
   var len = results.rows.length;
   for (var i=0; i< len; i++) {  
    var user = results.rows.item(i);
    var username=document.getElementById("username").value;
    var password=document.getElementById("psw").value;
    var id_role_Delege=2;
    var uname=user.email;
    var pasw=user.password;
   	var id_role=user.id_role;
    
    if(username==uname && password==pasw && id_role==id_role_Delege){
     alert("Login Success");
     window.open("nosProduits.html","_top");
     break;
    }
    else{
        var status=1;
     }
   }
    
   if(status==1)
    {
       alert("login failed");
    }
}