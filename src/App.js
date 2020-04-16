import React from 'react';
import './App.css';
import Layout from './hoc/layout/Layout';

function App() {
  const fill ="hii ajay";
  return (
    <div className="App">
     <Layout>
       {fill}
       <p>Test Burger King</p>
     </Layout>
    </div>
  );
}

export default App;
