import axios from 'axios';
import React, {Component} from 'react';

import styles from './Post.module.css';
import classes from './Post.module.css';

class Post extends Component { 

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
                        <div className={styles.name}>{localStorage.getItem('name')} <span style={{"color": "rgb(141, 141, 141)", "fontSize": "15px"}}>posted an update</span></div>
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
                    <button className={styles.like}><i className="fa fa-thumbs-up"></i></button>
                    <button className={styles.full}>View Full Post</button>
                    <div className={styles.delete} key={this.props.id} id={this.props.id} onClick={this.onPostDeletehandler}>Delete</div>

                </div>
            </div>
        )
    }
}

export default Post;