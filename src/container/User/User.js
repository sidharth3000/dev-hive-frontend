import React, {Component} from 'react';
import axios from 'axios'; 

import Navbar from '../../component/Navbar/Navbar';
import Head from '../../component/Header/Header';
import Footer from '../../component/Footer/Footer';
import styles from './User.module.css';

class User extends Component {


    onUploadHandler = (event) => {

        const formData = new FormData();

        formData.append(
          "avatar",
          event.target.files[0],
          event.target.files[0].name
        );
        
        axios.post('http://localhost:9000/upload', 
        formData)
        .then( response =>{
            console.log(response)
        }).catch( e => {
            console.log(e)
        })
    }

    render(){

        return(
            <React.Fragment>
                <Navbar/>

                <Head>Your Profile</Head>
                <div className={styles.dp}>
                    <img className={styles.img} src={"Assets/dp.jpg"} />
                        <div className={styles.change}>
                            <i className="fa fa-camera edit">
                               
                                <input type="file" className={styles.upload} onChange={this.onUploadHandler}></input>
                               
                            </i>
                        </div>
                </div>

                <Footer/>
            </React.Fragment>
        )
    }
}

export default User;