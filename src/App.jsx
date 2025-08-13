// src/App.jsx

import './App.css';
import EmployeeCard from './Components/EmployeeCard';

const users = [
  {
    name: "Anna Virtanen",
    email: "anna@example.com",
    title: "Frontend Developer",
    department: "IT",
    phone: "+358 40 123 4567",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    name: "Mikko Miettinen",
    email: "mikko@example.com",
    title: "Backend Developer",
    department: "IT",
    phone: "+358 50 234 5678",
    image: "https://randomuser.me/api/portraits/men/46.jpg"
  },
  {
    name: "Liisa Korhonen",
    email: "liisa@example.com",
    title: "Project Manager",
    department: "Management",
    phone: "+358 45 345 6789",
    image: "https://randomuser.me/api/portraits/women/65.jpg"
  }
];

function App() {
  return (
    <div className="App">
      <h1>Käyttäjät</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {users.map((user, index) => (
          <EmployeeCard key={index} user={user} />
        ))}
      </div>
    </div>
  );
}

export default App;
