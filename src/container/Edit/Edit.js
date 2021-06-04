import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios'; 

import styles from './Edit.module.css';
import Modal from '../../UI/Modal/Modal'
import * as actions from '../../store/actions/auth'

class Edit extends Component {

    state = {
        name: null,
        password: null
    }

    onNameChangeHandler = (event) => {
        this.setState({name: event.target.value})
    }

    onNameSubmit = () => {
        let config = {
            headers: {
                token: localStorage.getItem("token")
            }
          }
        
        if (this.state.name == null){
            alert("please enter a valid name")
        }else{

            axios.patch('http://localhost:9000/user/name', {name: this.state.name}, config)
            .then(response => {
                
               
                localStorage.setItem("name", response.data.name)
                this.props.switch();
                window.location.reload(false);

            }).catch( e => {
                console.log(e)
            })
        }
    }

    onUploadHandler = (event) => {

        const formData = new FormData();

        formData.append(
          "avatar",
          event.target.files[0],
          event.target.files[0].name
        );

        let config = {
            headers: {
                token: localStorage.getItem("token")
            }
          }
        
        axios.post('http://localhost:9000/upload', formData, config)
        .then( response =>{
            console.log(response)
        }).catch( e => {
            console.log(e)
        })

        this.props.switch();

        setTimeout(() =>{
            window.location.reload(false);
           },500)
    }

    onDeleteHandler = () => {
        this.props.switch();
        this.props.deleteAcc();
       
    }

    render(){

        return(

            <div className={styles.cont}>
                {this.props.isAuth ? null  : <Redirect to="/auth" />}
                <Modal show={this.props.show} switch={this.props.switch} >

                    <div className={styles.dp}>
                        <div className={styles.change}>
                            <i className="fa fa-camera edit"> Edit DP
                                <input type="file" className={styles.upload} onChange={this.onUploadHandler}></input>
                               
                            </i>
                        </div>
                            
                        <div className={`${styles.change} ${styles.delete}`} onClick={this.onDeleteHandler}>
                            <i className="fa fa-trash edit"> Delete DP
                            </i>
                        </div>
                    </div>

                    <div className={styles.txt}>
                        <input type="text" placeholder="type new name here" className={styles.input} onChange={this.onNameChangeHandler}></input>
                        <button className={styles.bttn} onClick={this.onNameSubmit}>change name</button>
                    </div>

                    <div className={styles.delete}  onClick={this.onDeleteHandler}>Delete Account !</div>

                </Modal>
            </div>
           
        )
    }
}

const mapStateToProps = state => {
    return{
        isAuth: state.auth.auth
    }
}

const mapDispatchToProps = dispatch => {
    return {
        deleteAcc: () => dispatch(actions.deleteAcc())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Edit);