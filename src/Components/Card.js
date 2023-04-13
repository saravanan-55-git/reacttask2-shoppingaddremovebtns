import { Button } from "react-bootstrap";

export function Cards(prod,idx,setCount){
    const[show, setShow] = useState(false);

    function addToCart(){
        setShow(!show)
        setCouont(count+1)
    }

    function removeFromCart(){
        setShow(!show)
        setCount(count-1)
    }

    return(
        <Card stle={{width: "18rem"}}>
        <Card.Img vraiant = "top" src={prod.productImage}></Card.Img>
        <Card.Body>
            <Card.Title>{prod.productName}</Card.Title>
            <Card.Text>{prod.price} RS </Card.Text>
            <Card.Text>{prod.rating}  </Card.Text>
            
            {!show ? <Button
            name="Add Cart"
            bgClr = "lightbluesky"
            onClick = {addToCart}
            /> : ""}

            {show ? <Button
            name="Remove Cart"
            bgClr = "crimson"
            onClick = {removeToCart}
            /> : ""}

        </Card.Body>
        </Card>

    )
}