import React, {Component} from 'react';
import socketIOClient from "socket.io-client";

// import styles from './Chat.module.css'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import socket from '../../components/socket'


class Chat extends Component {

    state = {
        mssg: ""
       
    }

    onInputChangeHandler = (event) => {
        this.setState({mssg: event.target.value})
    }

    onSendMessage = () => {

        socket.emit('sendMessage', this.state.mssg);

    }

    onSendLocation = () => {
        if(!navigator.geolocation){
            return alert("This feature is not supported on your browser!")
        }

        navigator.geolocation.getCurrentPosition((position) => {

            socket.emit('sendLocation', {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            });
        })
       
    }

    render() {
    
        socket.on('connection', (mssg) => {
          console.log(mssg);
        });

        socket.on('message', (mssg) => {
            console.log(mssg);
          });

        return(

            <div>

                <Navbar/>
                    <div>
                        <input type="text" onChange={this.onInputChangeHandler}></input>
                        <button onClick={this.onSendMessage}>send</button>
                        <button onClick={this.onSendLocation}>Send Location</button>
                    </div>
                <Footer/>

            </div>

        )
    }
}

export default Chat;