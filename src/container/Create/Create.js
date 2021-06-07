import React, {Component} from 'react';

import styles from './Create.module.css'
import Modal from '../../UI/Modal/Modal'
import axios from 'axios';

class Create extends Component {

    state = {
        title: "",
        body: "",
        photo: null
    }

    onTitleChangeHandler = (event) => {
        this.setState({title: event.target.value})
    }

    onBodyChangeHandler = (event) => {
        this.setState({body: event.target.value})
    }

    onUploadHandler = (event) => {
        this.setState({photo: event.target.files[0]})
       
    }

    onPublishHandler = () => {

        var d = new Date(),
        minutes = d.getMinutes().toString().length === 1 ? '0'+d.getMinutes() : d.getMinutes(),
        hours = d.getHours().toString().length === 1 ? '0'+d.getHours() : d.getHours(),
        ampm = d.getHours() >= 12 ? 'pm' : 'am',
        months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
        days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
        const time =  days[d.getDay()]+' '+months[d.getMonth()]+' '+d.getDate()+' '+d.getFullYear()+' '+hours+':'+minutes+ampm;


        let config = {
            headers: {
                token: localStorage.getItem('token')
            }
        }

        const formData = new FormData();

      
        formData.append("title", this.state.title)
        formData.append("body", this.state.body)
        formData.append("time", time)
        formData.append("photo", this.state.photo)

        axios.post('http://localhost:9000/create', formData, config)
        .then((response) => {
            console.log(response.data)
            window.location.reload(false);
        }).catch((e) =>{
            console.log(e)
        })

        this.props.switch()
    }

    render() {

        return(
            <div>
                <Modal show={this.props.show} switch={this.props.switch} >
                    <textarea cols="40" rows="1" className={`${styles.txt} ${styles.title}`} onChange={this.onTitleChangeHandler} placeholder="Title"></textarea>
                    <textarea cols="40" rows="15" className={styles.txt} onChange={this.onBodyChangeHandler} placeholder="Body"></textarea>

                    <div className={styles.change}>
                        <i className="fa fa-plus edit"> </i>  
                            <i className="fa fa-camera edit">
                            <input type="file" className={styles.upload} onChange={this.onUploadHandler}></input>
                        </i>
                    </div>

                   {this.state.title == "" && this.state.body == ""?
                   <button className={`${styles.publish} ${styles.disable}`}>PUBLISH</button> :
                   <button className={styles.publish} onClick={this.onPublishHandler}>PUBLISH</button>} 
                  
                  <button className={`${styles.publish} ${styles.cancel}`} onClick={this.props.switch}>Cancel</button>
                </Modal>
            </div>
        )
    }
}

export default Create