import React from 'react';
import { render } from 'react-dom';

import Popup from './Popup';
import GlobalStyle from '../../common/GlobalStyle';

render(
  <>
    <GlobalStyle />
    <Popup />
  </>,
  window.document.querySelector('#app-container')
);
