import logo from './logo.svg';
import './App.css';
import React from 'react'
import PostList from './PostList'
import Form from './Form'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Form/>
      <PostList
        />
      </header>
    </div>
  );
}

export default App;
