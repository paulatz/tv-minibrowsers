//var { BrowserWindow, Tray, Menu, session } = require('electron')
//const url = 'https://web.whatsapp.com'
const url = 'https://play.geforcenow.com'
const path = require('path')
const iconpath = path.join(__dirname,'images/geforce-now.png')
const wintitle = 'GeForce NOW'
//const userAgent="Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4896.81 Safari/537.36";

const electron = require ('electron')
const app = electron.app // electron module
const BrowserWindow = electron.BrowserWindow //enables UI
//const Menu = electron.Menu // menu module

const { session } = require('electron');

//app.userAgentFallback = userAgent;
app.on('ready', _ => {

    /*session.defaultSession.webRequest.onBeforeSendHeaders((details, callback) => {
            details.requestHeaders["User-Agent"] = userAgent;
            callback({ cancel: false, requestHeaders: details.requestHeaders });
        });

    session.defaultSession.setUserAgent(userAgent);*/

    win = new BrowserWindow({
    icon: iconpath,
    title: wintitle,
    session: session,
    backgroundColor:'#76b900',
    darkTheme:true,
    fullScreen:true,
    titleBarStyle:'hidden',
    kiosk:true,
    })

    let userAgent = win.webContents.getUserAgent();
    userAgent = userAgent.replace("/GeForce NOW\/[0-9\.-]*/,''");
    userAgent = userAgent.replace("/Electron\/*/,''");
    //win.webContents.userAgent = ua;
    win.webContents.setUserAgent(userAgent)

    console.log(win.webContents.getUserAgent())
//    win.webContents.setUserAgent(userAgent)

    win.loadURL(url)    // loads this URL
//    win.loadURL(url, {userAgent:'Chrome'})    // loads this URL
})



