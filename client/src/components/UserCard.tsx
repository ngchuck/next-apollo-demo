import {User} from '@/types/user';
import styles from './UserCard.module.css'

const UserCard = ({user}: { user: User }) => (
  <div className={styles.card} key={user.email}>
    <h3>{user.firstName} {user.lastName} - {user.age}</h3>
    <p>{user.address.streetName}</p>
    <p>{user.email}</p>
    <p>{user.phone}</p>
    <img src={user.avatar}/>
  </div>
);
export default UserCard;
