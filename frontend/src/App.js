import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import DocumentList from './components/DocumentList';
import RegistrationForm from './components/RegistrationForm';
import VideoTutorials from './components/VideoTutorials';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="container mx-auto p-4">
        <RegistrationForm />
        <DocumentList />
        <VideoTutorials />
        <Chatbot />
      </main>
      <Footer />
    </div>
  );
}

export default App;