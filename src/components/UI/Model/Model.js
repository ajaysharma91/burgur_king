import React, { Component } from 'react';
// import Aux from '../../../Aux';
import Backdrop from '../Backdrop/Backdrop';
import './Model.css'
class Model extends Component {
    shouldComponentUpdate(nextProps,nextState){
      return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
    }
    componentWillUpdate(){
        console.log("[Model] Component will update");
    }
    render(){
        return(
            <>
            <Backdrop show={this.props.show} clicked={this.props.purchaseClosed} />
            <div className="Modal" 
                style={{transform:this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: this.props.show ? '1' :'0'}}>
            {this.props.children}
            </div>
        </>
        )
    }
   
}
export default Model;