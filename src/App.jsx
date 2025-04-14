import { useState } from "react";
import user from "./data/user.json";
import stats from "./data/stats.json";
import friends from "./data/friends.json";
import transiction from "./data/transiction.json";
import { TransactionHistory } from "./components/TransactionHistory/TransactionHistory";
import { FriendList } from "./components/Friends/FriendList";
import { Statistics } from "./components/Statistics/Statistics";
import { Profile } from "./components/Profile/Profile";
import "./App.css";

function App() {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title={"Upload stats"} stats={stats} />
      <FriendList friends={friends} />
      <TransactionHistory items={transiction} />
    </>
  );
}

export default App;
