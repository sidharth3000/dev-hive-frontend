import React, {Component} from 'react';

import styles from './Chat.module.css'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
// import Header from '../../components/Header/Header'
import socket from '../../components/socket'


class Chat extends Component {

    state = {
        mssg: "",
        messages: [],
        room: "aa",
        users: []
    }

    onInputChangeHandler = (event) => {
        this.setState({mssg: event.target.value})
    }

    autoScroll = () => {

      const mssgs = document.getElementById("mssgs")

      mssgs.scrollTop = mssgs.scrollHeight;

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

        this.autoScroll();
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

        this.autoScroll();
       
    }

    componentDidMount() {

        socket.emit('join', localStorage.getItem("name"), this.props.match.params.room, (e) => {
            if(e){
                alert(e);
            }
        });
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


        socket.off('roomData').on('roomData', ({room, users}) => {
           
            console.log(room)
            console.log(users)
            this.setState({room: room});

            this.setState({users: []})
            
           users.map(user => {
               this.state.users.push(<div>{user.username}</div>);
           })

           console.log(this.state.users);
           
        })

        return(

            <div>

                <Navbar/>

                <div className={styles.chat}>

                    <div className={styles.side}>
                        <div className={styles.room}>{this.state.room}</div>
                        <div className={styles.users_list}>Users</div>
                        <div className={styles.users_cont}>{this.state.users}</div>                        
                    </div>
                       
                    <div>

                        <div className={styles.main_chat}>

                            <div className={styles.mssgs_cont} id="mssgs">
                                <div className={styles.chat_messages}>{this.state.messages}</div>
                            </div>

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

               
                {/* <Footer/> */}

            </div>

        )
    }
}

export default Chat;