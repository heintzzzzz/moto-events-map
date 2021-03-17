import './App.css';
import React from 'react';

import Footer from './components/Footer/Footer';
import Map from './components/Map/Map';
import Header from './components/Header/Header';
import MessageSidebar from './components/MessageSidebar/MessageSidebar';

function App() {

  const user = {
      id: 1,
      login: 'login1',
  };

  const messages = [
      {id: 1, title: 'title1'},
      {id: 2, title: 'title2'},
      {id: 3, title: 'title3'},
  ];

  const [expandedSidebar, setExpandedSidebar] = React.useState(false);
  //const [expandedSidebar, setExpandedSidebar] = React.useState(false);

  const expandedMenu = () => {
      //let test = 1111;

      console.log(expandedSidebar);
      setExpandedSidebar(!expandedSidebar);
     // return test;
  }

  return (
    <div className="App">
      <Header toggleChat={expandedMenu} />
      <MessageSidebar
        expandedSidebar={expandedSidebar}
        user={user}
        messages={messages} />
      <div className={'AppBody'}>
            <Map />
      </div>
      <Footer />
    </div>
  );
}

export default App;
