// Imports the desktopWindow function from the './main' module
const { desktopWindow } = require('./main');

// Imports the app module from the Electron module
const { app } = require('electron');

// Enables electron-reload for hot reloading of the renderer process
require('electron-reload')(__dirname);

// Sets allowRendererProcessReuse to true to improve performance
app.allowRendererProcessReuse = true;

// Starts the desktop window when the app is ready
app.whenReady().then(desktopWindow);
