/* eslint-disable array-callback-return */
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Banner from './Banner';
import HowItWorks from './HowItWorks';
import Templates from './Templates';
// import WppButton from '../components/WppButton';
import Contact from './Contact';

const Home = () => {

  return (
    <>
      <Header />
      <Banner />
      <HowItWorks />
      <Templates />
      <Contact />
      <Footer />
      {/* <WppButton /> */}
    </>
  );
}

export default Home;