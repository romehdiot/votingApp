import React, { Fragment } from 'react';

import Header from './components/Header';
import Images from './components/Images';
import Footer from './components/Footer';
import configureStore from './store';

import { Provider } from 'react-redux';

const store = configureStore();

class App extends React.Component {
  render() {
    return (
      <Provider
      store = {store}
     >
       
         <Header />
         <Images />
       
     </Provider>
    )
  }
}

export default App;
