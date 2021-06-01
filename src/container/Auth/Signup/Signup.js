import React, {Component} from 'react';

import styles from './Signup.module.css'
import Login from "../Signin/Singnin"

class Signup extends Component {

    render () {

        return(

            <div className={styles.back}>

                <Login/>

                <div className={styles.nav}>
                    <img className={styles.logo} src={"Assets/logo.png"} />
                    <div className={styles.name}>DEV-hive</div>
                    <div className={styles.login}>Login</div>
                </div>

                <div className={styles.signup}>
                    <div className={styles.welcome}>WELCOME</div>
                    <div className={styles.text}>Consectetur exercitation duis consequat commodo excepteur ex adipisicing commodo non.</div>
                    <form>
                        <input type="text" className={`${styles.input} ${styles.email}`} placeholder="Email"></input><br/>
                        <input type="text" className={`${styles.input} ${styles.pass}`} placeholder="Password"></input><br/>
                    </form>

                    <button className={styles.button}>Singn up</button>
                    
                </div >

                <div className={styles.feat_cont}>
                    <div className={styles.feature}>
                        <div className={styles.cont}>
                            <div className={styles.icon}><i className="fa fa-laptop handle"></i></div>
                            <div className={styles.feat_txt}>news</div>
                        </div>
                        
                    </div>

                    <div className={styles.feature}>
                        <div className={styles.cont}>
                            <div className={styles.icon}><i className="fa fa-users handle"></i></div>
                            <div className={styles.feat_txt}>activity</div>
                        </div>
                        
                    </div>

                    <div className={styles.feature}>
                        <div className={styles.cont}>
                            <div className={styles.icon}><i className="fa fa-comments handle"></i></div>
                            <div className={styles.feat_txt}>chat</div>
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default Signup;