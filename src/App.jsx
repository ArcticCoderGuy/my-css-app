// src/App.jsx

import './App.css';
import UserCard from './Components/UserCard';

const users = [
  {
    name: "Anna Virtanen",
    email: "anna@example.com",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    name: "Mikko Miettinen",
    email: "mikko@example.com",
    image: "https://randomuser.me/api/portraits/men/46.jpg"
  },
  {
    name: "Liisa Korhonen",
    email: "liisa@example.com",
    image: "https://randomuser.me/api/portraits/women/65.jpg"
  }
];

function App() {
  return (
    <div className="App">
      <h1>Käyttäjät</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {users.map((user, index) => (
          <UserCard key={index} user={user} />
        ))}
      </div>
    </div>
  );
}

export default App;
