import React, { Component } from 'react';
import styles from './Login.css';
import {connect } from 'dva';

 class Login extends Component{
    constructor(props){
        super(props)
        usermsg:""
    }
    getusermsg(){
        this.props.dispatch({
            type: 'LoginMsg/getUsermsg',
            payload: ""
          })
    }
    render(){
        return (
            <div className={styles.Login}>
                <input type="text" value="" plactholder="请输入用户名"/>
                <input type="text" value="" placeholder="请输入密码"/>
                <button className={styles.btn} onClick={()=>{
                    this.getusermsg()
                }}>登录</button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
      usermsg: state
    }
  }
  
  const _todoList = connect(mapStateToProps)(Login)
  
  export default _todoList