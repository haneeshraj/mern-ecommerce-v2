import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Button, Col, Row, ListGroup, Image, Card } from 'react-bootstrap';

import CheckOutSteps from '../components/CheckoutStep';

const PlaceOrderScreen = () => {
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    if (!cart.shippingAddress.address) {
      navigate('/shipping');
    } else if (!cart.paymentMethod) {
      navigate('/payment');
    }
  }, [navigate, cart.shippingAddress, cart.paymentMethod]);

  return (
    <>
      <CheckOutSteps step1 step2 step3 step4 />
      <Row>
        <Col md={8}>Col</Col>
        <Col md={4}>Col</Col>
      </Row>
    </>
  );
};

export default PlaceOrderScreen;
