cls 
@echo off

cd .
cd Backup

echo var d = new Date(); > tmp.js
echo var hours = d.getHours(); >> tmp.js
echo var minutes = d.getMinutes(); >> tmp.js
echo var seconds = d.getSeconds(); >> tmp.js
echo var date = d.getDate() + "-" + (d.getMonth() +1) + "-" + d.getFullYear(); >> tmp.js
echo var D = date; >> tmp.js
echo WScript.Echo( 'set YYYYMMDD='+D );  >> tmp.js

echo @echo off > tmp.bat 
cscript //nologo tmp.js >> tmp.bat 
call tmp.bat
mkdir %YYYYMMDD%

cd %YYYYMMDD%

set "backupPathName=%cd%" 
echo %backupPathName%

cd /D c:\Program Files\MongoDB\Server\4.0\bin

mongodump.exe -d qlikHrChatBot -o %backupPathName%

:: mongorestore.exe -d qlikHrChatBot %backupPathName%\qlikHrChatBot
@echo on
pause