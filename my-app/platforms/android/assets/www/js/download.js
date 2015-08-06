function f(){
	
var url = 'http://www.eventek-tn.com/test/E-adv/file-uploading/uploads/77863-interactions-_-offre-technique-projet-e-adv--v-1-0-2.pdf';
   var filePath = 'C:\Users\dev2\sqliteProj\phonegap-sqlite\my-app\platforms\android\assets\www\img';
   var fileTransfer = new FileTransfer();
   var uri = encodeURI(url);
    fileTransfer.download(         uri,         filePath,         function(entry) {
           console.log("download complete: " + entry.fullPath);
       },         function(error) {
           console.log("download error source " + error.source);
           console.log("download error target " + error.target);
           console.log("upload error code" + error.code);
       },         false,         {
           headers: {
               "Authorization": "Basic dGVzdHVzZXJuYW1lOnRlc3RwYXNzd29yZA=="             }
       }
   );
}