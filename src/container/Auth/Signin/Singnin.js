import React, {Component} from 'react'

import styles from './Signin.module.css'
import Modal from '../../../UI/Modal/Modal'
import Usser from '../../../'

class Signin extends Component {

    state = {
        email: null,
        password: null
    }

    onEmailChange = (event) => {
        this.setState({email: event.target.value})
    }

    onPassChange = (event) => {
        this.setState({password: event.target.value})
    }

    onSubmitHandler = () => {
        this.props.onAuth(this.state.name, this.state.email, this.state.password)
    }

    render() {
         return(
             <div>

                 <Modal show={this.props.show} switch={this.props.switch}>
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