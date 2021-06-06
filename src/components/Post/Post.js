import React from 'react';

import styles from './Post.module.css';
import image from '../../images/auth.jpg'
import classes from './Post.module.css';

const head = (props) => (

    <div className={classes.post}>
        
            <div className={styles.up_cont}>

                <img src={image} className={styles.user}></img>

                <div className={styles.info}>
                    <div className={styles.name}>{localStorage.getItem('name')} <span style={{"color": "rgb(141, 141, 141)", "fontSize": "15px"}}>posted an update</span></div>
                    <div className={styles.time}>{props.time}</div>
                </div>

            </div>
                
        

        <div>
            <img src={`data:image/jpg;base64,${props.photo}`} className={styles.post_img}></img>
            <div className={styles.title}>{props.title}</div>
            <div className={styles.body}>{props.body}</div>
        </div>

        <div>
            <div className={styles.number}>{props.likes}</div>
            <button className={styles.like}><i className="fa fa-thumbs-up"></i></button>
            <button className={styles.full}>View Full Post</button>
            <div className={styles.delete}>Delete</div>
            
        </div>
    </div>
);

export default head;