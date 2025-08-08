// src/Components/UserCard.jsx

import styles from './UserCard.module.css';

function UserCard({ user }) {
  return (
    <div className={styles.card}>
      <img src={user.image} alt={user.name} className={styles.avatar} />
      <h2 className={styles.name}>{user.name}</h2>
      <p className={styles.email}>{user.email}</p>
    </div>
  );
}

export default UserCard;
