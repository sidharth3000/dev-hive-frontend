import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import styles from './Room.module.css'
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer'

class Room extends Component {

    state = {
        room: ""
    }

    onRoomChangeHandler = (event) => {
        this.setState({room: event.target.value})
    }


    render() {
        
        return(
            <div>
                <Navbar/>

                <div className={styles.centered_form}>
                    <div className={styles.centered_form__box}>
                        <div>{localStorage.getItem("name")}</div>
                        <div>Enter Room no.</div>
                        <input type="text" onChange={this.onRoomChangeHandler}></input>

                        <Link to={'/chat/' + this.state.room}>
                            <div>JOIN</div>
                        </Link>
                    </div>
                </div>

                <Footer/>
            </div>
           
        )
    }
}

export default Room;
