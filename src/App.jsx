import { FriendList } from "components/FriendList/FriendList";
import { Profile } from "components/Profile/Profile";
import { Statistics } from "components/Statistics/Statistics";
import { TransactionHistory } from "components/TransactionHistory/TransactionHistory";


export const App = () => {
  return (
    <>
      <Profile />
      <Statistics />
      <FriendList />
      <TransactionHistory />
    </>
  );
};
