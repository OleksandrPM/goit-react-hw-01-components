import { Profile } from '../Profile/Profile';
import user from '../../components/Profile/user.json';
import { Statistics } from '../Statistics/Statistics';
import data from '../../components/Statistics/data.json';
import { FriendList } from '../FriendList/FriendList';
import friends from '../../components/FriendList/friends.json';
import { TransactionHistory } from '../TransactionHistory/TransactionHistory';
import transactions from '../../components/TransactionHistory/transactions.json';

import css from './Panel.module.css';

export { Panel };

function Panel() {
  return (
    <main>
      <h1>goit-react-hw-01-components</h1>
      <div className={css.container}>
        <div className={css.block}>
          <Profile
            username={user.username}
            tag={user.tag}
            location={user.location}
            avatar={user.avatar}
            stats={user.stats}
          />
        </div>
        <div className={css.block}>
          <Statistics title="Upload stats" stats={data} />
          <Statistics stats={data} />
        </div>
        <div className={css.block}>
          <FriendList friends={friends} />
        </div>
        <div className={css.block}>
          <TransactionHistory items={transactions} />
        </div>
      </div>
    </main>
  );
}
