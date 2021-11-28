// ipc通信の勉強
// https://blog.katsubemakito.net/nodejs/electron/ipc-for-contextbridge

'use strict';

const { app, BrowserWindow, ipcMain, dialog } = require('electron');
const { PythonShell } = require('python-shell');
const path = require('path');


function createWindow() {
    const win = new BrowserWindow({
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
        }
    });

    win.loadFile('index.html');
}

app.whenReady().then(() => {
    createWindow();
});

ipcMain.handle('mama', (event, data) => {

    let pydata = ""

    let pyshell = new PythonShell("pyscript.py");

    pyshell.send(data);
    pyshell.on("message", function (message) {
        console.log(message);
    });

    console.log(pydata);
    // PythonShell.run("pyscript.py", data,
    //     function (err, result) {
    //         pydata = result;
    //     });
    // console.log(pydata);
    return (`${pydata} mama`);
});

