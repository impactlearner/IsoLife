import React from "react"

import CategoryFilter from './CategoryFilter'
import Search from './Search'
import ProductForm from './ProductForm'
import ProductList from './ProductList'

import PRODUCTS from './data'

class ProductPage extends React.Component {
    // this is the state of your product page pointing to your product array
    // I need to send this product array down to my product list and render a component for each product
    // This requires refactoring
    // Look at lecture video to see how to iterate through an array of props that ProductPage sends down
    // After the refactoring, build out the product form
    // In ProductForm, Create a JSX form; Use the angled <> brackets to create the HTML form - 
    // TRY to GET the JSX form built out even if it's not controlled
    // After that, control the component; Watch the Controlled Form Lecture to see what's needed in an HTML form
    state = {
        // products: PRODUCTS,
        products: []
       
    }
    // lifecycle method (componentDidMount)
    // when the component mounts(comes onto the DOM)
    // it will run this code
    componentDidMount() {
        console.log("componentDidMount")
        fetch ("http://localhost:4000/products")
            .then(r => r.json())
            .then(productArray => {
                this.setState({
                    products: productArray
                })
            })
        }

        addOneProductToArray = (productInstance) => {
            console.log(productInstance);
            console.log(this.state); 
            let newProductArray = [productInstance, ...this.state.products]
            this.setState({products: newProductArray})
        }

        // deleteProductFromArray = () => key={product.id} product={product}
        
        deleteProductFromArray = (idFromChild) => {
            console.log(idFromChild, "THIS IS IN APP")
        }


    render() {
        console.log("APP STATE:", this.state);
        return (
       
      <div className="ProductPage">
        {/* <button onClick={this.handleFetchClick}>Click 2 Fetch</button>
        <h1>ProductPage</h1> */}
        <Search />
        <ProductForm addOneProductToArray = {this.addOneProductToArray}/> {/* sending arrow function down to ProductForm from ProductPage */}
        <ProductList
            products={this.state.products}
            deleteProductFromArray={this.deleteProductFromArray}
        /> {/* This is sending state of product array down to ProductList from ProductPage */}
        <CategoryFilter />
        
      </div>
    )}
  }
  
  export default ProductPage;
  