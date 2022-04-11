const url = 'https://open.spotify.com'
const path = require('path')
const iconpath = path.join(__dirname,'images/spotify.png')
const wintitle = 'Spotify'
const userAgent="Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.174 Safari/537.36"

const {app, session, components, BrowserWindow} = require('electron')

let win = null

function createWindow () {

  session.defaultSession.webRequest.onBeforeSendHeaders((details, callback) => {
    details.requestHeaders['User-Agent'] = userAgent;
    callback({ cancel: false, requestHeaders: details.requestHeaders });
 });


  const  win = new BrowserWindow({
    icon: iconpath,
    title: wintitle,
    backgroundColor:'#00ff00',
    darkTheme:true,
//    fullScreen:true,
//    titleBarStyle:'hidden',
//    kiosk:true,
    })

   // let userAgent = win.webContents.getUserAgent();
   // userAgent = userAgent.replace("/Spotify\/[0-9\.-]*/,''");
   // userAgent = userAgent.replace("/Electron\/*/,''");
    //win.webContents.userAgent = ua;
   // win.webContents.setUserAgent(userAgent)
  console.log(win.webContents.getUserAgent());

    win.loadURL(url);
}

app.whenReady().then(async () => {
  await components.whenReady();
  console.log('components ready:', components.status());
  createWindow();
});

