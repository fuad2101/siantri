const { app, BrowserWindow } = require('electron')
const path = require ('path')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1000,
    height: 600
  })

  win.loadFile(path.join(app.getAppPath(),'src/electron/index.html'));
}

app.whenReady().then(() => {
  createWindow()
})