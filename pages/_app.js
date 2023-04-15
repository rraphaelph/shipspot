import './styles/App.css'
import React from 'react';
import App from 'next/app';

function _app({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default _app;
