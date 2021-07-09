import React from 'react';
import Modal  from '../../components/UI/Modal/Modal';
import Aux from '../Auxillary';
import axios from '../../axios-orders';
const withErrorHandler =(WrappedComponent) =>{
  return class extends React.Component{
    state = {
      error:null
    }
    componentWillMount()
    { 
      this.reqInterceptors = axios.interceptors.request.use(req =>{
        this.setState({error:null});
        return req;
      })

     this.resInterceptors = axios.interceptors.response.use(res=>res,error =>{
        this.setState({error:error});
        
        
      })
    }
   /*  componentWillUnmount()
    { 
      console.log('Will unmount ')
      axios.interceptors.request.eject(this.reqInterceptors);
      axios.interceptors.response.eject(this.resInterceptors);

    } */
    errorConfirmHandler= ()=>{
      this.setState({error:null});
    }
    render()
    {
      return(<Aux>
        <Modal show={this.state.error}
        modalClosed={this.errorConfirmHandler}>
          {this.state.error?this.state.error.message:null}
        </Modal>
      <WrappedComponent {...this.props}/>
      </Aux>
    );
  }
}
}
    

export default withErrorHandler;