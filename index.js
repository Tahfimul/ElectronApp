const electron = require('electron')
const {app, BrowserWindow} = electron
<<<<<<< HEAD
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
=======

app.on('ready', ()=>{
  let win = new BrowserWindow({width: 800, height: 800})
  win.loadURL(`file://${__dirname}/index.html`)
>>>>>>> 6dcd509bf49adc9d682068a6416958d600b0db43
})
