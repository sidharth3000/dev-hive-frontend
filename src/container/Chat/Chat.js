import React, {Component} from 'react';
import socketIOClient from "socket.io-client";

import styles from './Chat.module.css'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import socket from '../../components/socket'


class Chat extends Component {
    

    state = {
        mssg: "",
        messages: []
    }

    onInputChangeHandler = (event) => {
        this.setState({mssg: event.target.value})
    }

    onSendMessage = (event) => {

        var today = new Date(),
        time = today.getHours() + ':' + today.getMinutes();

        const user = localStorage.getItem("name")

        event.preventDefault();

        socket.emit('sendMessage', this.state.mssg, time, user, (err) => {
           if(err) {
               console.log(err)
           }else{
               console.log('message delivered!')
               this.setState({mssg: ''})
               this.nameInput.focus();
           }
        });
    }

    onSendLocation = (event) => {

        var today = new Date(),
        time = today.getHours() + ':' + today.getMinutes();

        const user = localStorage.getItem("name")

        event.preventDefault();

        if(!navigator.geolocation){
            return alert("This feature is not supported on your browser!")
        }

        navigator.geolocation.getCurrentPosition((position) => {

            socket.emit('sendLocation', {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            }, time, user, () => {
                console.log('Location sent!')
            });
        })
       
    }

    render() {
    
        socket.off('connection').on('connection', (mssg) => {
            socket.emit('sendMessage', mssg, "time", "Admin", (err) => {
                if(err) {
                    console.log(err)
                }else{
                    this.setState({mssg: ''})
                }
             });
        });

        socket.off('message').on('message', (mssg, d, user) => {
            this.state.messages.push(
            <div className={styles.mssg}>
                <div className={styles.user}>{user}</div>
                <div className={styles.time}>{d}</div>
                <div className={styles.txt}>{mssg}</div> 
            </div>
           )
            this.setState({message : ""})
            console.log(this.state.messages);
          });

        socket.off('locationMessage').on('locationMessage', (mssg, time, user) => {
        this.state.messages.push(
            <div className={styles.mssg}>
                <div className={styles.user}>{user}</div>
                <div className={styles.time}>{time}</div>
                <a className={styles.txt_loc} href={mssg} target="_blank">
                    My Location <i class="fa fa-location-arrow"></i>
                </a>
            </div>
       )
        this.setState({message : ""})
        console.log(mssg);
        });

        // socket.emit('join', localStorage.getItem("name"), this.props.match.params.room)

        return(

            <div>

                <Navbar/>

                {/* <Header>Chat</Header> */}

                <div className={styles.chat}>

                    <div className={styles.side}></div>

                    <div>

                        <div className={styles.main_chat}>

                            <div className={styles.chat_messages}>{this.state.messages}</div>

                            <div className={styles.compose}>

                                    <form onSubmit={this.onSendMessage}>
                                    <input className={styles.inpu} autoFocus type="text" value={this.state.mssg} onChange={this.onInputChangeHandler} 
                                            ref={(input) => { this.nameInput = input; }}
                                            defaultValue="It will focus"/>
                                    <button onClick={this.onSendMessage} className={styles.send}>
                                    <i class="fa fa-arrow-circle-right"></i>
                                    </button>
                                    <button onClick={this.onSendLocation} className={styles.loc}>Send Location</button>

                                    </form>

                            </div>
                           
                        </div>
                       
                    </div>

                </div>

               
                <Footer/>

            </div>

        )
    }
}

export default Chat;