
function addUserToken(e){

//Get the details from the spreadsheet
var userName = e.values[1];
var userEmail = e.values[3];
//var userName = "Heramb Jadhav";  
//var userEmail = "carina.round21@gmail.com";  
var randomToken = makeid(20);
  
//create a token for the currentuser  
// postData(userEmail,randomToken);  
var randomText = "?randID="+randomToken;
var userQuerystring = "&user_email="+userEmail;
var queryString="https://gdsouza1992.github.io/ModakSSO/"+randomText+userQuerystring;
var html =  '<body> <h2> Test </h2><br /> <a href="'+queryString+'">Link goes here</a></body>';    

var subject = "Form Submitted";
var message = "Thank you," + userName + " for registering";
MailApp.sendEmail (userEmail, subject, 'test', {htmlBody: html});
  
}
  

function makeid(size)
{
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < size; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

function postData(userEmail,randomToken) {

 // Make a POST request with a JSON payload.
 var data = {
   'useremail': userEmail,
   'token':randomToken,
   'valid':'VALID'
 };
 var options = {
   'method' : 'post',
   'contentType': 'application/json',
   // Convert the JavaScript object to a JSON string.
   'payload' : JSON.stringify(data)
 };
  
 url = 'http://ec2-54-183-70-200.us-west-1.compute.amazonaws.com/modak/newregisteruser.php';
 UrlFetchApp.fetch(url,options);
 
}
