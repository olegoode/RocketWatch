import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import App from '../imports/ui/containers/App.jsx';

Meteor.startup(() => {
  render(<App />, document.getElementById('root'));

  if ('serviceWorker' in navigator && 'PushManager' in window) {
    console.log('SW and PushManager are supported');
    navigator.serviceWorker.register('js/worker.js')
      .then((swReg) => {
        console.log('serviceWorker is registered', swReg);
      });
  }
});
