const electron = require('electron')
const {app, BrowserWindow} = electron
var path = require('path')

app.on('ready', ()=>{
  let win = new BrowserWindow({titleBarStyle: 'hidden',
     width: 1281,
     height: 800,
     minWidth: 1281,
     minHeight: 800,
     backgroundColor: '#312450',
     show: true,
     icon: path.join(__dirname, 'assets/icons/png/64x64.png')})
  win.loadURL('file://' + __dirname + '/index.html')
})
