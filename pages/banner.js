import React from "react"; 
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row} from 'react-bootstrap';
import Image from 'next/image';
import Logo from '../components/assets/img/logobcs.svg';



const banner=()=>(
    <div>
    <Container className="logo">
     < Image src={Logo} alt='logo_bcs'/>
    </Container>
    </div>
    )
  export default banner;