import React, { useRef } from 'react';
import {MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';
import login from "../../assets/img/login.jpg"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { notification } from 'antd';

function LoginPage() {
  const navigate = useNavigate();
  const usernameRef = useRef();
  const passwordRef = useRef();
  const [api, contextHolder] = notification.useNotification();

  const alertError = ()=>{
    api.error({
      message: "Invalid username or password",
      description: "Please enter a valid username or password"
    });
  }
  const alertSuccess = ()=>{
    api.success({
      message: "Login successfully",
      description: "successfully logged in"
    });
  }

  const loginHandle = ()=>{
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;
    axios.post( "/api/auth/", {
      name: username, 
      password : password
    })
      .then( response => {
        
        sessionStorage.setItem("token", response.data);
        console.log( sessionStorage.getItem("token"));
        // alertSuccess();
        navigate("/");
      })
      .catch( (error)=>{
        console.log("Log error : " + error);
        alertError();
      })
    
  }
  return (
    <>
      {contextHolder}
      <MDBContainer fluid className=" h-custom">
        <MDBRow className='p-16 h-screen'>
          <MDBCol col='10' md='8'>
            <img src={login} class="img-fluid" className="h-[100%] cover" alt="Sample image" />
          </MDBCol>
          <MDBCol col='4' md='4'>
            <div className="d-flex flex-row align-items-center justify-content-center">
              <p className="lead fw-normal mb-0 me-3">Sign in with</p>
              <MDBBtn floating size='md' tag='a' className='me-2'>
                <MDBIcon fab icon='facebook-f' />
              </MDBBtn>
              <MDBBtn floating size='md' tag='a'  className='me-2'>
                <MDBIcon fab icon='twitter' />
              </MDBBtn>
              <MDBBtn floating size='md' tag='a'  className='me-2'>
                <MDBIcon fab icon='linkedin-in' />
              </MDBBtn>
            </div>
            <div className="divider d-flex align-items-center my-4">
              <p className="text-center fw-bold mx-3 mb-0">Or</p>
            </div>
            <MDBInput ref={usernameRef} wrapperClass='mb-4' label='Username' id='formControlLg' type='email' size="lg"/>
            <MDBInput ref={passwordRef} wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg"/>
            <div className="d-flex justify-content-between mb-4">
              <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
              <a href="!#">Forgot password?</a>
            </div>
            <div className='text-center text-md-start mt-4 pt-2'>
              <MDBBtn className="mb-0 px-5" size='lg' onClick={loginHandle}>Login</MDBBtn>
              <p className="small fw-bold mt-2 pt-1 mb-2">Don't have an account? <a href="#!" className="link-danger">Register</a></p>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
}

export default LoginPage;