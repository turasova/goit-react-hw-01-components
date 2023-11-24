//import friends from '../json/friends.json';
import css from './FriendList.module.css';

import { FriendListItem } from "./FriendListItem"

 //<FriendList friends={friends} />;

export const FriendList = ({ id }) => {
    return <ul className={css.friendList} key={id}>
        <FriendListItem />
    </ul>      

}