var d = new Date(); 
var hours = d.getHours(); 
var minutes = d.getMinutes(); 
var seconds = d.getSeconds(); 
var date = d.getDate() + "-" + (d.getMonth() +1) + "-" + d.getFullYear(); 
var D = date; 
WScript.Echo( 'set YYYYMMDD='+D );  
