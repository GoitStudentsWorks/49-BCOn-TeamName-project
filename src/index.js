import React from 'react';
import ReactDOM from 'react-dom/client';
import { StyleSheetManager } from 'styled-components';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from 'redux/store';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'components/App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <StyleSheetManager shouldForwardProp={() => true}>
    {/* styled components warning cleaning */}
    <PersistGate loading={null} persistor={persistor}>
      <Provider store={store}>
        <BrowserRouter basename="/49-BCOn-TeamName-project">
          <App />
        </BrowserRouter>
      </Provider>
    </PersistGate>
  </StyleSheetManager>
);
