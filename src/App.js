import { Badge,Card, Button} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState } from "react";
import Nav from 'react-bootstrap/Nav';

function App() {
  //state hook
  const data = [
    {
      productImage:
        "https://www.apple.com/in/iphone/home/images/meta/iphone__ky2k6x5u6vue_og.png",
      productName: "Iphone 14promax",
      price: 100000,
      rating: 91,
    },
    {
      productImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3jAmZcKm3NQoK8tlikVJsPAfm3cAhr_IKelWibDsJj3vgZ5BCZuvssOPGjIbljbkWR68&usqp=CAU",
      productName: "Samsung Galaxy",
      price: 95000,
      rating: 90,
    },
    {
      productImage:
        "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1723573867/Croma%20Assets/Communication/Mobiles/Images/309159_0_rzdw2t.png",
      productName: "Google Pixel 7pro",
      price: 70000,
      rating: 80,
    },
    {
      productImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7E5-6Ch9ZwdUEUsyiRXhKVAQWCbwiV74JdDy5WAm4W6OQDCeOMsuIlBf8naBblaviCXU&usqp=CAU",
      productName: "Oneplus 11",
      price: 64000,
      rating: 50,
    },
  ];

  const [count, setCount] = useState(0)
  return (
    <div className="App">
       <Nav
      activeKey="/home"
    >
      <Nav.Item>
        <Nav.Link href="/home">welcome</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">New Arrrivals</Nav.Link>
      </Nav.Item>
    </Nav>
      <div className="cart-value">
      <Badge bg="success">
        CART {count}
      </Badge>
      </div>

     <div className="card-container">
      {data.map((prod, idx)=> <Cards
      idx = {idx}
      prod = {prod}
      setCount= {setCount}
      count = {count}
      />)}
      </div>
      <footer class="py-5 bg-dark">
        <div class="container">
          <p class="m-0 text-center text-white">
            Copyright &copy; DIGITALLY YOURS showroom <span>2023</span>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;

function Cards({prod, idx, setCount, count}){
  const [show, setShow] = useState(false);

  function addToCart(){
    setShow(!show)
    setCount(count + 1)
  }

  function removeFromCart(){
    setShow(!show)
    setCount(count - 1)
  }

  return (
      <Card key = {idx} style={{ width: "18rem" }}>
        <Card.Img variant="top" src={prod.productImage} />
        <Card.Body>
          <Card.Title>{prod.productName}</Card.Title>
          <Card.Text>{prod.price} RS</Card.Text>
          <Card.Text>{prod.rating} ♥</Card.Text>
        {/* conditional rendering */}

         {!show ? <Button
           variant="primary"
           onClick={addToCart}
           >Add cart</Button> : ""}


           {show ? <Button 
           variant="danger"
           onClick={removeFromCart}
           >remove cart</Button> : ""}
        </Card.Body>
      </Card>
  )
}
