const url = 'https://music.youtube.com'
const path = require('path')
const iconpath = path.join(__dirname,'images/icon.png')
const wintitle = 'Youtube Music'
const userAgent="Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.174 Safari/537.36"

const {app, session, components, BrowserWindow} = require('electron')

let win = null

function createWindow () {
  const { BrowserWindow, session } = require('electron');
  const {ElectronBlocker } = require('@cliqz/adblocker-electron');
  const fetch = require('cross-fetch'); // required 'fetch'
  //import { ElectronBlocker } from '@cliqz/adblocker-electron';
  //import fetch from 'cross-fetch'; // required 'fetch'
  let blocker = null;
  ElectronBlocker.fromPrebuiltAdsAndTracking(fetch).then((blocker) => {
    blocker.enableBlockingInSession(session.defaultSession);

  session.defaultSession.webRequest.onBeforeSendHeaders((details, callback) => {
    details.requestHeaders['User-Agent'] = userAgent;
    callback({ cancel: false, requestHeaders: details.requestHeaders });
  });

  const  win = new BrowserWindow({
    icon: iconpath,
    title: wintitle,
    backgroundColor:'#ff0000',
    darkTheme:true,
    fullScreen:true,
    titleBarStyle:'hidden',
    kiosk:true,
    })

    let userAgent = win.webContents.getUserAgent();
    userAgent = userAgent.replace("/Youtube Music\/[0-9\.-]*/,''");
    userAgent = userAgent.replace("/Electron\/*/,''");
    //win.webContents.userAgent = ua;
    win.webContents.setUserAgent(userAgent)

    win.loadURL(url);
  })

}

app.whenReady().then(async () => {
  await components.whenReady();
  console.log('components ready:', components.status());
  createWindow();
});

