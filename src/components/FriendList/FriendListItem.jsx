import friends from '../../json/friends.json';
import css from './FriendListItem.module.css'

export const FriendListItem = () => {
    return friends.map(({id,isOnline,name,avatar}) => (

        <li className={css.item} key={id}>
                <span className={isOnline ? `${css.status} ${css.green}` : `${css.status} ${css.red}`}>{isOnline}</span>
                <img className={css.avatar} src={avatar} alt={name} width="48"/>
                <p className={css.name}>{ name}</p>   
            </li>
    
    ))
}