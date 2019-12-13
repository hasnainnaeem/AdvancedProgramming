import React, {Component, useState} from 'react';
import {PFooter} from '../components/components';

import {
    Button, Form, Table, Modal, ModalHeader, ModalBody, ModalFooter
} from 'reactstrap';

import '../css/admin-panel.css';
import axios from "axios";

const CartContext = React.createContext({cartProducts: []});


const ShoppingCart = (props) => {
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);
    const cartContext = CartContext;

    return (
        <div>
            <p className="text-center">
                <Button color="primary" onClick={toggle}>
                    Open Cart
                </Button>
            </p>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Shopping Cart</ModalHeader>
                <ModalBody>
                    <ProductTable products={cartContext.cartProducts}/>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={toggle}>Proceed To Checkout</Button>{' '}
                    <Button color="secondary" onClick={toggle}>Close</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
};

class ProductTable extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return(
        <>
            <Table dark>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Description</th>
                    <th>Category</th>
                    <th>Seller</th>
                </tr>
                </thead>
                <tbody>
                {
                    this.props.products
                }
                </tbody>
            </Table>
        </>
        );
    }
}

class Product extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <tr>
                <td>{this.props.product.name}</td>
                <td>{this.props.product.price}</td>
                <td>{this.props.product.description}</td>
                <td>{this.props.product.category}</td>
                <td>{this.props.product.seller}</td>
                <Button color="success" onClick={this.props.addToCart}>Add To Cart</Button>
            </tr>
        )
    }
}

class BuyerPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {products: null, formattedProducts: null, cartProducts: []};
        this.displayProducts = this.displayProducts.bind(this);
        this.addToCart = this.addToCart.bind(this);
    }

    addToCart() {
        console.log("Added");
    }

    async displayProducts(e) {
        e.preventDefault();
        axios.post("/buyer-panel/fetch-products/")
            .then((res) => {
                this.setState({feedback: res.data.status, products: res.data.products});
                this.setState({
                    formattedProducts: this.state.products.map(function (product) {
                        function addToCart() {
                            
                        }

                        return (
                            <Product product={product} addToCart={addToCart}/>
                        );
                    })
                });
            });
    }

    render() {
        return (
            <>
                <br/>
                <div className="shadow-box container text-center">
                    <p className="dark">Welcome to the buyer panel.</p>
                </div>
                <br/><br/>
                <div className="display-section container" id="main-section">
                    <ShoppingCart products={this.state.cartProducts}/>
                    <h2 className="text-center">Display Products</h2><br/>
                    <div id="products" className="container-fluid">
                        {
                            this.state.products ? <ProductTable products={this.state.formattedProducts}/> : <div></div>
                        }
                        <Button outline color="primary" size="lg" block onClick={this.displayProducts}>
                            Display Products
                        </Button>
                    </div>
                </div>
                </>
        );
    }

}

export default BuyerPanel;