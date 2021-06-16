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

    onSendMessage = (event) => {

        // console.log(event.target.value)

        event.preventDefault();

        socket.emit('sendMessage', this.state.mssg, (err) => {
           if(err) {
               console.log(err)
           }else{
               console.log('message delivered!')
               this.setState({mssg: ''})
               this.nameInput.focus();
            //    console.log(this.state.mssg)
           }
        });

      

       

    }

    onSendLocation = () => {

        if(!navigator.geolocation){
            return alert("This feature is not supported on your browser!")
        }

        navigator.geolocation.getCurrentPosition((position) => {

            socket.emit('sendLocation', {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            }, () => {
                console.log('Location sent!')
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

                        <form onSubmit={this.onSendMessage}>
                        <input autoFocus type="text" value={this.state.mssg} onChange={this.onInputChangeHandler} 
                                ref={(input) => { this.nameInput = input; }}
                                defaultValue="It will focus"/>
                        <input type="submit"></input>
                        <button onClick={this.onSendLocation}>Send Location</button>
                        </form>
                       
                    </div>
                <Footer/>

            </div>

        )
    }
}

export default Chat;