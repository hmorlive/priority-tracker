// main.js

// Modules to control application life and create native browser window
const { app, BrowserWindow } = require('electron')
const path = require('path')

let loadingWindow = false;

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    fullscreen: false,
    maximizable: false
  })
  mainWindow.loadFile('out/index.html')
  //mainWindow.loadURL('http://localhost:3000');
}

const createLoader = () => {
    loadingWindow = new BrowserWindow({
        width: 200,
        height: 200,
        fullscreen: false,
        frame: false,
        maximizable: false,
        transparent: true
      })
      loadingWindow.loadFile('out/index.html')
}

app.whenReady().then(() => {
  createLoader();

  setTimeout(() => {
    loadingWindow.close();
    createWindow();
  }, 5000);

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})