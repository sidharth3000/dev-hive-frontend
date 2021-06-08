import axios from 'axios';
import React, {Component} from 'react';

import styles from './Post.module.css';
import classes from './Post.module.css';

class Post extends Component { 

    state = {
        comment: ""
    }

    onCommenrchangeHandler = (event) => {
        this.setState({comment: event.target.value})
    }

    onCommnetHandleer = (ev) => {

        console.log(ev.target.id)

        let config = {
            headers: {
                token: localStorage.getItem('token')
            }
        }

        var d = new Date(),
        minutes = d.getMinutes().toString().length === 1 ? '0'+d.getMinutes() : d.getMinutes(),
        hours = d.getHours().toString().length === 1 ? '0'+d.getHours() : d.getHours(),
        ampm = d.getHours() >= 12 ? 'pm' : 'am',
        months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
        days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
        const time =  days[d.getDay()]+' '+months[d.getMonth()]+' '+d.getDate()+' '+d.getFullYear()+' '+hours+':'+minutes+ampm;

        const data = {
            body: this.state.comment,
            time: d,
            post: ev.target.id,
            name: localStorage.getItem('name')
        }

        axios.post('http://localhost:9000/comment', data, config )
        .then((res) => {
            console.log(res.data)
        })
        .catch((event) => {
            console.log(event)
        })
    }

    onPostDeletehandler = (e) => {

        let config = {
            headers: {
                token: localStorage.getItem('token')
            }
        }

        const id = {
            id: e.target.id
        }
        
        axios.post('http://localhost:9000/post/del', id, config )
        .then((res) => {
            console.log(res.data)
            window.location.reload(false);
        }).catch((err) => {
            console.log(err)
        })
    }


    render() {

        return(

            <div className={classes.post}  >
        
                <div className={styles.up_cont}>

                    <img src={`data:image/jpg;base64,${this.props.profile}`} className={styles.user}></img>

                    <div className={styles.info}>
                        <div className={styles.name}>{this.props.name} <span style={{"color": "rgb(141, 141, 141)", "fontSize": "15px"}}>posted an update</span></div>
                        <div className={styles.time}>{this.props.time}</div>
                    </div>

                </div>
                    


                <div className={classes.content}>
                    {this.props.photo ? <img src={`data:image/jpg;base64,${this.props.photo}`} className={styles.post_img}></img> : null}

                    <div className={styles.title}>{this.props.title}</div>
                    <div className={styles.body}>{this.props.body}</div>
                    </div>

                <div>
                    <div className={styles.number}>{this.props.likes}</div>
                    <button className={styles.like}><i className="fa fa-heart"></i></button>
                    <button className={styles.full}>View Full Post</button>
<br/>
                    <div className={styles.cmmnt_cont}>
                        <input type="text" className={styles.cmmnt} placeholder="comment" onChange={this.onCommenrchangeHandler}></input>
                        <div className={styles.send}  onClick={this.onCommnetHandleer}><i class="fa fa-arrow-circle-right" id={this.props.id}></i></div>
                    </div>

                    {this.props.delete ?
                    <div className={styles.delete} id={this.props.id} onClick={this.onPostDeletehandler}>Delete Post</div>
                    :
                    null
                    }

                </div>
            </div>
        )
    }
}

export default Post;