import React from 'react';
import ReactDOM from 'react-dom';

import App from './app';

const app = (
  <App />
);

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    app, document.getElementById('project-name')
  );
});
