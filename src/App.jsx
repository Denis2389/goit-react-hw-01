import './App.css'
import FriendList from './components/FriendList/FriendList.jsx';
import Profile from './components/Profile.jsx'
import userData from './userData.json'
import friends from './components/FriendList/friends.json'
import transactions from './components/TransactionHistory/transactions.json'
import TransactionHistory from './components/TransactionHistory/TransactionHistory.jsx';


function App() {
  return (
    <>
      <div className="wrapper_profile">
        <Profile
          name={userData.username}
          tag={userData.tag}
          location={userData.location}
          image={userData.avatar}
          stats={userData.stats}
        />
      </div>
      <div>
        <FriendList friends={friends} />
        <TransactionHistory items={transactions} />
      </div>
    </>
  );
}

export default App
