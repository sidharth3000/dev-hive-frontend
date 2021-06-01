import React, {Component} from 'react'

import styles from './Signin.module.css'
import Modal from '../../../UI/Modal/Modal'
import Usser from '../../../'

class Signin extends Component {

    render() {
         return(
             <div>

                 <Modal show={true}>
                     <div className={styles.cont}>
                        <div className={styles.header}>
                            <img src={'Assets/dp.jpg'} className={styles.image}></img>
                        </div>

                        <div className={styles.text}>Login to continue</div>

                        <div className={styles.input}>
                            <div className={styles.icon}><i className="fa fa-user-circle"></i></div>
                            <input type="text" className={styles.txt} placeholder="username"></input>
                        </div>
<br></br>
                        <div className={styles.input}>
                            <div className={styles.icon}><i className="fa fa-key"></i></div>
                            <input type="text" className={styles.txt} placeholder="password"></input>
                        </div>
<br></br>
                        <button className={styles.button}>Singn up</button>
                     </div>
                     
                 </Modal>

             </div>
         )
    }
}

export default Signin