import React, { useState, ChangeEvent } from 'react';
import Filtered from './components/Filtered'
import Other from './components/Other'
import './App.css';

function App() {
  const [search, setsearch] = useState('');
  const [friends, setFriends] = useState<string[]>([])
  const doChange = (event: ChangeEvent<HTMLInputElement>) => {
    setsearch(event.currentTarget.value)
  }

  const init = (event: any) => {
    event.preventDefault();
    setFriends([...friends, event.currentTarget[0].value]);
    event.currentTarget.reset();
  }

  return (
    <div className="App">

    <h2 className = "app-h1"> Add a friend </h2>
        <form onSubmit = {init}>
        <label htmlFor = "newFriend"> Enter friend name: </label>
        <input 
          type = "text"
          name = "newFriend"
        />
        <button type = "submit">Add</button>
        </form>

    <h2> Search for a friend </h2>
      <label htmlFor = "searchq"> Enter friend name: </label>
      
      <input
        type = "text"
        name = "searchq"
        value = {search}
        onChange = {doChange}
      
      />

    <h2> Friend list </h2>
      <div className = "lists">
        <Filtered 
          searchQuery = {search}
          friends = {friends}
        />

    <h2> Other friends </h2>
        <Other 
          searchQuery = {search}
          friends = {friends}
        />
      </div>
    </div>
  );
}

export default App;