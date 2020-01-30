import React, { Component } from 'react'

export default class Alert extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }
    
    render() {
        if (this.props.display) {
            if (this.props.isuserexist()) {
                const alertSetting = {
                    msg:'Connected',
                    classname:'success'
                }
                return <div className={'alert alert-' + alertSetting.classname} role="alert">{alertSetting.msg}</div>;
            }else{
                const alertSetting = {
                    msg:'Email or password is incorrect',
                    classname:'danger'
                }
                return <div className={'alert alert-' + alertSetting.classname} role="alert">{alertSetting.msg}</div>;
            }
        }else{
            return '';
        }
        
    }
}
