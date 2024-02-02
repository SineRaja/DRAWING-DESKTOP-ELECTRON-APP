// Imports the BrowserWindow class from the Electron module
const { BrowserWindow } = require('electron');

// Declares a variable to store the BrowserWindow instance
let app;

// Creates a function to create and configure the desktop window
function desktopWindow() {
  // Creates a new BrowserWindow instance
  app = new BrowserWindow({
    // Sets the window width to 800 pixels
    width: 800,
    // Sets the window height to 600 pixels
    height: 600,
    // Makes the window modal, so it cannot be interacted with while it is open
    modal: true,
    // Configures the webPreferences for the BrowserWindow instance
    webPreferences: {
      // Enables nodeIntegration, allowing Node.js APIs to be used in the renderer process
      nodeIntegration: true,
      // Disables contextIsolation, allowing direct access to the Electron API from the renderer process
      contextIsolation: false,
    },
  });

  // Loads the mainDesign.html file into the BrowserWindow instance
  app.loadFile('desktopapp/mainDesign/mainDesign.html');
}

// Exports the desktopWindow function as a module
module.exports = {
  desktopWindow,
};
