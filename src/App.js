import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter} from 'react-router-dom';
import { Template }   from './components/Maincomponents';

import './App.css';

import Header from './components/partial/Header';
import Footer from './components/partial/Footer';

import Routes from './Router'

const Page = (props) => {

  return ( 
    <BrowserRouter>
      <Template> 

        <Header/>

        <Routes />

        <Footer/>

      </Template> 
    </BrowserRouter>
  );
       
}

const mapStateToProps = ( state ) => {
  return {
      user:state.user
  };
}

const mapDispatchProps = (dispatch) => { 
  return {

  };
}

export default connect( mapStateToProps, mapDispatchProps)(Page);