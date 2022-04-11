const url = 'https://www.netflix.com'
const path = require('path')
const iconpath = path.join(__dirname,'images/icon.png')
const wintitle = 'Netflix'
const userAgent="Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4896.81 Safari/537.36";

const {app, session, components, BrowserWindow} = require('electron')

let win = null

function createWindow () {
  const  win = new BrowserWindow({
    icon: iconpath,
    title: wintitle,
    backgroundColor:'#e50914',
    darkTheme:true,
    fullScreen:true,
    titleBarStyle:'hidden',
    kiosk:true,
    webPreferences: {
      // The `plugins` have to be enabled.
      plugins: true
      }
    })

  win.loadURL('http://www.netflix.com');
}

app.whenReady().then(async () => {
  await components.whenReady();
  console.log('components ready:', components.status());
  createWindow();
});

