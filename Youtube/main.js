//var { BrowserWindow, Tray, Menu, session } = require('electron')
//const url = 'https://web.whatsapp.com'
const url = 'https://www.youtube.com'
const path = require('path')
const iconpath = path.join(__dirname,'images/icon.png')
const wintitle = 'Youtube'

//const electron = require ('electron')
const electron = require ('electron')
const app = electron.app // electron module
//const BrowserWindow = electron.BrowserWindow //enables UI
//const Menu = electron.Menu // menu module


//app.userAgentFallback = userAgent;
app.on('ready', _ => {
  const { BrowserWindow, session } = require('electron');
  const {ElectronBlocker } = require('@cliqz/adblocker-electron');
  const fetch = require('cross-fetch'); // required 'fetch'
  //import { ElectronBlocker } from '@cliqz/adblocker-electron';
  //import fetch from 'cross-fetch'; // required 'fetch'
  let blocker = null;
  ElectronBlocker.fromPrebuiltAdsAndTracking(fetch).then((blocker) => {
    blocker.enableBlockingInSession(session.defaultSession);

    win = new BrowserWindow({
    icon: iconpath,
    title: wintitle,
    session: session,
    backgroundColor:'#ff0000',
    darkTheme:true,
    fullScreen:true,
    titleBarStyle:'hidden',
    kiosk:true,
    })

    let userAgent = win.webContents.getUserAgent();
    userAgent = userAgent.replace("/Youtube\/[0-9\.-]*/,''");
    userAgent = userAgent.replace("/Electron\/*/,''");

    win.webContents.setUserAgent(userAgent)

    win.loadURL(url)    // loads this URL
  }); // -> end of ElectronBlocker
}); // end of ready


