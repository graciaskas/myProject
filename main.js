const electron = require('electron')
const url = require('url')
const path = require('path')
const {app,BrowserWindow} = electron;
const express = require('./express'); //your express app
let mainWindow;
app.on('ready', function() {
    mainWindow = new BrowserWindow({
    width: 1500,
    height: 800,
    frame:false,
    resizable: false,
  });
  mainWindow.loadURL('http://localhost:90');
  mainWindow.focus();

});