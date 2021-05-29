import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

import styles from './Navbar.module.css';

class Nav extends Component{

    render(){

        return(
            <div>
           <nav >
                <ul className={styles.main_nav}>
                    <li className={`${styles.link} ${styles.logoo}`}><NavLink activeClassName={styles.active} exact to='/'><img className={`${styles.logo}`} src={"Assets/logo.png"} /></NavLink></li>
                    <li className={`${styles.link} ${styles.name}`}>DEV-hive</li>
                    <li className={styles.link}><NavLink activeClassName={styles.active} exact to='/'>Feed</NavLink></li>
                    <li className={styles.link}><NavLink activeClassName={styles.active} exact to='/news'>News</NavLink></li>
                    <li className={styles.link}><NavLink activeClassName={styles.active} exact to='/chat'>Chat</NavLink></li>
                    <li className={`${styles.link} ${styles.push}`}><NavLink activeClassName={styles.active} exact to='/login'>Login</NavLink></li>
                </ul>
            </nav>
            </div>
           
        )
    }
}

export default Nav; 