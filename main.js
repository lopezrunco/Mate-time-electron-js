const { app, BrowserWindow } = require('electron')

const createWindow = () => {
    const win = new BrowserWindow({
        width: 380,
        height: 680,
        icon: __dirname + './assets/icon.png'
    })
    win.loadFile('index.html')
}

app.whenReady().then(() => {
    createWindow()
})