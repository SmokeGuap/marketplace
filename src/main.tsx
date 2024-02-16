import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

import { StateProvider } from './context/StateContext.tsx';
import 'src/styles/index.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StateProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </StateProvider>
);
