const electron = require("electron"),
    {app, BrowserWindow} = electron;

let mainWindow
app.on('ready', () => {
    mainWindow = new BrowserWindow({
        width: 500,
        height: 500,
        title: "Main Window"
    });
    mainWindow.loadURL('file:///'+ __dirname +'/index.html'); // Or mainWindow.loadFile('index.html')
    mainWindow.on('closed', () => {app.quit()});
})