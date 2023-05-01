import { Profile } from './Profile/Profile';
import user from '../components/Profile/user.json';
import { Statistics } from './Statistics/Statistics';
import data from '../components/Statistics/data.json';
import { FriendList } from './FriendList/FriendList';
import friends from '../components/FriendList/friends.json';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import transactions from '../components/TransactionHistory/transactions.json';

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <div className="statistics">
        <Statistics title="Upload stats" stats={data} />
        <Statistics stats={data} />
      </div>
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};
