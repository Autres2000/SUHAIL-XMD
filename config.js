const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "50934251716";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "50934251716";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_06_49_10_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMSxcbiAgICAgICAgOSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDQzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDQ0LFxuICAgICAgICA2NyxcbiAgICAgICAgMzIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjksXG4gICAgICAgIDkwLFxuICAgICAgICAzOSxcbiAgICAgICAgMTAzLFxuICAgICAgICA4MyxcbiAgICAgICAgMjQxLFxuICAgICAgICA3OSxcbiAgICAgICAgMTI3LFxuICAgICAgICAzMyxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDYzLFxuICAgICAgICA3MSxcbiAgICAgICAgMTg4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDg0LFxuICAgICAgICA5OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzEsXG4gICAgICAgIDExOCxcbiAgICAgICAgNzcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMyxcbiAgICAgICAgMTM0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTMyLFxuICAgICAgICA0MSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMTEsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDY4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDEsXG4gICAgICAgIDEzMixcbiAgICAgICAgNDEsXG4gICAgICAgIDU3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDgzLFxuICAgICAgICAwLFxuICAgICAgICAxMixcbiAgICAgICAgOTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDAsXG4gICAgICAgIDg1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDk3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjAxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTUsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjEzLFxuICAgICAgICA3OCxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDk0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDk1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEyMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzgsXG4gICAgICAgIDI1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDcwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE5LFxuICAgICAgICA2NSxcbiAgICAgICAgMjMwLFxuICAgICAgICAyOSxcbiAgICAgICAgMjgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNjEsXG4gICAgICAgIDUyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTY2LFxuICAgICAgICA2MixcbiAgICAgICAgNDIsXG4gICAgICAgIDEzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNTcsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNDYsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMzMsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDUxLFxuICAgICAgICAxM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAzMSxcbiAgICAgICAgMTUsXG4gICAgICAgIDcsXG4gICAgICAgIDY1LFxuICAgICAgICAyMTksXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMixcbiAgICAgICAgNTksXG4gICAgICAgIDE2NCxcbiAgICAgICAgNjUsXG4gICAgICAgIDUyLFxuICAgICAgICAzNixcbiAgICAgICAgMTAxLFxuICAgICAgICAxMCxcbiAgICAgICAgODEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTgsXG4gICAgICAgIDc0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE5LFxuICAgICAgICA0NyxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDEwOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNyxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgODMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNjksXG4gICAgICAgIDE2MixcbiAgICAgICAgMjMyLFxuICAgICAgICAzMSxcbiAgICAgICAgNDIsXG4gICAgICAgIDY1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgOTgsXG4gICAgICAgIDYsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTk2LFxuICAgICAgICA5MyxcbiAgICAgICAgNzksXG4gICAgICAgIDAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxOSxcbiAgICAgICAgNjUsXG4gICAgICAgIDYsXG4gICAgICAgIDI1LFxuICAgICAgICA1OCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTAzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDgsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDY5XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDExMixcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTgsXG4gICAgICAgIDIwLFxuICAgICAgICAzNixcbiAgICAgICAgMTA4LFxuICAgICAgICA3NCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMDksXG4gICAgICAgIDMwLFxuICAgICAgICAxODAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTY0LFxuICAgICAgICA5NyxcbiAgICAgICAgMTk2LFxuICAgICAgICA2OSxcbiAgICAgICAgNTgsXG4gICAgICAgIDIyLFxuICAgICAgICA5NSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxODAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgOTcsXG4gICAgICAgIDgwLFxuICAgICAgICA0MCxcbiAgICAgICAgNyxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjA5LFxuICAgICAgICA1OCxcbiAgICAgICAgMTUzLFxuICAgICAgICA5NixcbiAgICAgICAgMTMyLFxuICAgICAgICA5MyxcbiAgICAgICAgMjQxLFxuICAgICAgICA5MixcbiAgICAgICAgMTAyLFxuICAgICAgICAzMSxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjAzLFxuICAgICAgICA1NixcbiAgICAgICAgMTMyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMjYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiaGRnU2lTcThHdWthTWdBc2RQam1FbHU0SzVYd3JvUy9uUkI3S2JQUVBWVT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwidklOWHdSQlZUQ084MnFYX2JkQ01EQVwiLFxuICBcInBob25lSWRcIjogXCIyOWI2ODYzYy02NTA3LTQ3M2UtYmI1OS00MDc5NmFkNTFlMTJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgODgsXG4gICAgICAxNTYsXG4gICAgICA1NCxcbiAgICAgIDMwLFxuICAgICAgMTEsXG4gICAgICA4OSxcbiAgICAgIDgwLFxuICAgICAgMTc1LFxuICAgICAgMTc0LFxuICAgICAgMTM4LFxuICAgICAgODIsXG4gICAgICAyMzksXG4gICAgICAxMixcbiAgICAgIDIwNixcbiAgICAgIDEyMixcbiAgICAgIDY5LFxuICAgICAgNzgsXG4gICAgICA0OSxcbiAgICAgIDE5NSxcbiAgICAgIDE3OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA0MCxcbiAgICAgIDE4NCxcbiAgICAgIDE0MSxcbiAgICAgIDQ5LFxuICAgICAgMjM3LFxuICAgICAgMTQ3LFxuICAgICAgOSxcbiAgICAgIDcxLFxuICAgICAgMzEsXG4gICAgICAxODMsXG4gICAgICAyMjksXG4gICAgICA1MCxcbiAgICAgIDc4LFxuICAgICAgMTg1LFxuICAgICAgMTk1LFxuICAgICAgMTA4LFxuICAgICAgNzIsXG4gICAgICAxNjIsXG4gICAgICA1MixcbiAgICAgIDIxN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJTUVcySlJOMlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiNTA5MzQyNTE3MTY6MTdAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJ0aGUgRnV0dXIgQmlsaW9ubmFpcmVcIixcbiAgICBcImxpZFwiOiBcIjE4MjI1NzI1NTk5NzQ1MDoxN0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNT2p2RkFRL1ovK3R3WVlCeUFBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjBSNHZCa0RkVnAyUEVRYUtYVzNjZENEYVRaaFdXWjc2dHBoZHJsc2VBeTA9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiN3JHZlBWSzRxWHlDR0w0anBnb3lXYnFzV3REVkxxU1dRWlZtcUY5dGd0NVpySnhzYUFLYzBTaGp5TzJDVjB2SHJ6TUowUjlUMmhZeWdmNE5GQitpRFE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiZnVqdktzSE1vUDBzelZYZUVhbnp5NHhKUUdCL3c4VVI4L0tFZlhFQ05nZ2FXZC9aMC9iNU5aalJCeXlIUXYwbkR1M3lxem9OT3BQUGtURzVPa210aVE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiNTA5MzQyNTE3MTY6MTdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgNixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA0NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI4MDI0NTc4XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
