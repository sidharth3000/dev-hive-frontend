import React, {Component} from 'react';
import axios from 'axios'; 

import Navbar from '../../components/Navbar/Navbar';
import Head from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import styles from './User.module.css';

class User extends Component {

    state = {
        avatar: null
    }

    componentDidMount () {

        axios.get('http://localhost:9000/avatar',  {
            headers: {
              id:  "60b53e7c0df96623c025eb0b" 
            }
           } )
        .then( res => {
            console.log(res.data.$binary)
           this.setState({avatar: res.$binary})
            console.log(res)
        }).catch(e => {
            console.log(e)
        })
    }

    onUploadHandler = (event) => {

        const formData = new FormData();
        const token = {token: "body_token"}

        formData.append(
          "avatar",
          event.target.files[0],
          event.target.files[0].name
        );


        // const data = JSON.stringify({
        //     description: 'description',
        //   })

        // formData.append('data', data);

        let config = {
            headers: {
              token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGI1M2U3YzBkZjk2NjIzYzAyNWViMGIiLCJpYXQiOjE2MjI0OTA3NDh9.YluAq5FAgnhOQPwnbY3NE3SiOBZFl8LtFlFIqF8C1ow",
            }
          }
        
        axios.post('http://localhost:9000/upload', formData, config)
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
                    <img className={styles.img} src={`data:image/jpeg;base64,${this.state.avatar}`} />
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