'use strict';
/*
 * BRICKPOP NOVA ULTIMATE — portable Windows shell
 * Copyright (c) 2026 Yasin Ullah — Bannu Software Solutions
 *
 * Loads the offline game from inside the executable, fullscreen, with no
 * network access, no menu bar and no Node.js exposure to the page.
 */
const { app, BrowserWindow, Menu, powerSaveBlocker } = require('electron');
const path = require('node:path');
const fs = require('node:fs');

const APP_TITLE = 'BrickPop Nova Ultimate — By Yasin Ullah';
const GAME_BG = '#0B0716';

/* -----------------------------------------------------------------------------
 * Portable save data: everything is written next to the .exe instead of
 * %APPDATA%, so the whole thing can live on a USB stick and be moved around.
 * -------------------------------------------------------------------------- */
const portableDir = process.env.PORTABLE_EXECUTABLE_DIR;
if (portableDir) {
  try {
    const dataDir = path.join(portableDir, 'BrickPop-Nova-SaveData');
    fs.mkdirSync(dataDir, { recursive: true });
    app.setPath('userData', dataDir);
    app.setPath('sessionData', dataDir);
  } catch (error) {
    console.warn('Portable save folder unavailable, using the default one:', error.message);
  }
}

// The game creates its audio context on the first tap; this keeps the Web Audio
// API unlocked on desktop too.
app.commandLine.appendSwitch('autoplay-policy', 'no-user-gesture-required');
app.setAppUserModelId('com.yasinullah.brickpopnova');

let mainWindow = null;

function createWindow() {
  const win = new BrowserWindow({
    width: 1280,
    height: 800,
    minWidth: 800,
    minHeight: 600,
    show: false,
    fullscreen: true,
    fullscreenable: true,
    autoHideMenuBar: true,
    backgroundColor: GAME_BG,
    title: APP_TITLE,
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: true,
      webviewTag: false,
      spellcheck: false,
      backgroundThrottling: false,
      // DevTools stay off in the shipped build; F11 handles fullscreen instead.
      devTools: false,
    },
  });

  mainWindow = win;

  Menu.setApplicationMenu(null);
  win.setMenuBarVisibility(false);
  win.loadFile(path.join(__dirname, 'www', 'index.html'));

  win.once('ready-to-show', () => {
    win.show();
    win.focus();
    if (!win.isFullScreen()) win.setFullScreen(true);
  });

  // 100% offline: never open new windows, never navigate away from the local game.
  win.webContents.setWindowOpenHandler(() => ({ action: 'deny' }));
  win.webContents.on('will-navigate', (event, url) => {
    if (!url.startsWith('file://')) event.preventDefault();
  });

  win.webContents.on('before-input-event', (event, input) => {
    if (input.type !== 'keyDown') return;
    if (input.key === 'F11') {
      event.preventDefault();
      win.setFullScreen(!win.isFullScreen());
    }
  });

  win.on('closed', () => {
    mainWindow = null;
  });
}

// Only one copy of the game at a time.
if (!app.requestSingleInstanceLock()) {
  app.quit();
} else {
  app.on('second-instance', () => {
    if (!mainWindow) return;
    if (mainWindow.isMinimized()) mainWindow.restore();
    mainWindow.focus();
  });

  app.whenReady().then(() => {
    createWindow();
    // Keep the screen awake while playing.
    powerSaveBlocker.start('prevent-display-sleep');
  });

  app.on('window-all-closed', () => {
    app.quit();
  });
}
