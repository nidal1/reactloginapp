import React, { Component } from 'react'

export default class Alert extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }
    componentWillReceiveProps(nextProps) {
        this.setState({ showAlert: nextProps.display });  
      }
    
    render() {
        if (this.props.display) {
            if (this.props.isuserexist()) {
                const alertSetting = {
                    msg:'Connected',
                    classname:'success'
                };
                return <div className={'alert alert-' + alertSetting.classname} role="alert">{alertSetting.msg}</div>;
            }else{
                const alertSetting = {
                    msg:'Email or password is incorrect',
                    classname:'danger'
                });
                return <div className={'alert alert-' + alertSetting.classname} role="alert">{alertSetting.msg}</div>;
            }
        }else{
            return '';
        }
        
    }
}

/**
 * export default class Alert extends Component {
    constructor(props){
        super(props);
        this.state = {
            showAlert:props.display,
            msg:'',
            classname:''
        }
    }
    componentWillReceiveProps(nextProps) {
        this.setState({ showAlert: nextProps.display });  
      }
    
    render() {
        if (this.state.showAlert) {
            if (this.props.isuserexist()) {
                this.setState({
                    msg:'Connected',
                    classname:'success'
                });
                return <div className={'alert alert-' + this.state.classname} role="alert">{this.state.msg}</div>;
            }else{
                this.setState({
                    msg:'Email or password is incorrect',
                    classname:'danger'
                });
                return <div className={'alert alert-' + this.state.classname} role="alert">{this.state.msg}</div>;
            }
        }else{
            return '';
        }
        
    }
}
 */
