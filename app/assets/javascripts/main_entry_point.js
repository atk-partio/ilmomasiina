// Load root React component to global in order for automatic mounting to work
import IlmomasiinaApp from 'components/public/IlmomasiinaApp';
window.IlmomasiinaApp = IlmomasiinaApp;

// Also load React to global
import React from 'react';
window.React = React;
