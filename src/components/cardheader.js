import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './cardheader.css';



function CardHeader() {
    const goBack = () => {
        window.history.back();
    };

    const openCart = () => {
        // Replace with your cart opening logic.
        alert("Cart opened");
    };

    return (
        <div className='card-header'>
            
        </div>
    );
}

export default CardHeader;