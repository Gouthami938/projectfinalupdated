import BaseUD from "../components/BaseUD";
import {Card, CardHeader, Col, Container, Form, FormGroup, Input, Row,Button, CardBody} from "reactstrap";
import { useState } from "react";
import {toast } from 'react-toastify';
import { loginUser } from "../services/user-service";
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
 import card from "./card.jpg";
import BaseMem from "../components/BaseMem";

function Platinum() {

        const navigate=useNavigate();
        const user= JSON.parse(localStorage.getItem('user-info'))
        console.warn(user)
        
        function redirectp()
        {
          
          navigate('/Payment')
        }


    return (
<div style={{
 backgroundImage:'url("https://cdn.anewmode.com/wp-content/uploads/2018/07/how-to-make-him-fall-for-you-4.jpg")',width:1240,height:605,backgroundSize:'Cover'
}}>
<BaseMem>
<Container>
        
        <Row className="mt-4">
        
                {/* {JSON.stringify(data)} */}
        
        
                <Col  sm={4}>
                <Card color="secondary" >
                <CardHeader>
        <h3>Platinum Subscription</h3>
       <h5>From USD</h5>  
        <h5>Local charges may apply</h5>
        <h3>$16.50/month</h3>
        <h5>#Full Profile can be viewed</h5>
        <Button onClick={redirectp} color={'dark'}>Pay$16.50</Button>

        
        
        </CardHeader>
           </Card>
           </Col>
           </Row>
        
            </Container>
{/* <Container > */}

{/* <Row className="mt-4">
        
        {/* {JSON.stringify(data)} */}

{/* 
        <Col  sm={{size:6,offset:3}}>
        <Card color="secondary" >
        <CardHeader>

<h3>Fill The Card Details</h3>   

<img src = {card}></img>
 */}



{/* </CardHeader> */}
{/* <Row className="mt-6" >
        
        {/* {JSON.stringify(data)} */}


        {/* <Col  sm={{size:6,offset:3}}> */}
        {/* <Col sm={4}>

        <Card>
 <CardHeader color="black">
        <h2> MEET ME</h2>
        </CardHeader> */}

</BaseMem>
</div>
    //     <div style={{
        
    //     backgroundImage:'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbSRXM2q7wqOzSjoTP03dcb-pk-J1BvB1tWA&usqp=CAU")',width:1277,height:750
        
    //     }}>
        
    //     <BaseUD>
    //     <Container>
        
    //     <Row className="mt-4">
        
    //             {/* {JSON.stringify(data)} */}
        
        
    //             <Col  sm={{size:6,offset:3}}>
    //             <Card color="secondary" >
    //             <CardHeader>
        
    //     <h3>Fill The Card Details</h3>   
        
    //     <img src = {card}></img>


        
        
    //     </CardHeader>
           
    //     <CardBody>
    //         <Container>
    //         <Form>
    //         <FormGroup> 
    //        <Col >
           
    //            <Input type="text" name="username" id="loginUser" placeholder="Enter Card Number"
    //         //    required  value={register.username} 
    //         //    onChange={(e) => changeDetails(e)}
    //           />
    //           </Col>
    //           </FormGroup>
    //           </Form>
    //           </Container>
    //           <Container>
    //           <Form>
    //           <FormGroup>
    //             <Col >
    //            <Input type="email" name="email" id="email" required placeholder="Enter Card Holder Name" 
        
    //           //  value={email}
    //           //  onChange={emailValidation}
    //            />
    //             </Col>
    //             </FormGroup>
    //             </Form>
    //             </Container>
              
    //           {/* <div className="col-3">
    //                   <label for="password">Password : </label>
    //                 </div>
    //                 <div className="col-9">
    //                   <input type="password" name="password" id="loginPassword" value={register.password}  {...register1("password", { required: true, pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,32}$/ })} placeholder="Your password.."  onChange={(e) => changeDetails(e)}/>
    //                   {errors.password && <p className="error">Please enter valid Password !</p>}
    //                 </div> */}
           
    //     <Container >
    //          <Form>
    //          <FormGroup>
    //          <Col xs={8}>
    //             <Input
    //               type="int"
    //               name="loginPassword"
    //               id="loginPassword"
    //               placeholder="Expiration Date"
    //               required
    //             />
    //             </Col>
               

    //             </FormGroup>
    //             </Form>
    //     </Container>
    //     <Container >
    //          <Form>
    //          <FormGroup>
    //          <Col xs={8}>
    //             <Input
    //               type="int"
    //               name="loginPassword"
    //               id="loginPassword"
    //               placeholder="Expiration Year"
    //               required
    //             />
    //             </Col>
                
    //             </FormGroup>
    //             </Form>
    //     </Container>
    //     <Container >
    //          <Form>
    //          <FormGroup>
    //          <Col xs={4}>
    //             <Input
    //               type="int"
    //               name="loginPassword"
    //               id="loginPassword"
    //               placeholder="CVV(Security Code)"
    //               required
    //             />
    //             </Col>
                
    //             </FormGroup>
    //             </Form>
    //     </Container>
    //          <Container className="text-center">
        
    //  <Button color="dark">Confirm</Button> 
        
    //           </Container>
          
    //         </CardBody>
    //     </Card>
        
    //     </Col>
    //     </Row>
    //       </Container>
    //       </BaseUD>
    //     </div>
        
          );
        }
        export default Platinum;
        