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
        products: PRODUCTS,
        // products: [],
        startIndex: 0
    }
    // lifecycle method (componentDidMount)
    // when the component mounts(comes onto the DOM)
    // it will run this code
    // componentDidMount() {
    //     // console.log("componentDidMount")
    //     fetch ("http://localhost:3000/products")
    //         .then(r => r.json())
    //         .then(productArray => {

    //             this.setState({
    //                 products: productArray
    //             })
    //         })
    // }

    render(){
        // console.log("render")
    return (
       
      <div>
        <button onClick={this.handleFetchClick}>Click 2 Fetch</button>
        <h1>ProductPage</h1>
        <Search />
        <ProductForm helperMethod = {() => {}}/> {/* sending arrow function down to ProductForm from ProductPage */}
        <ProductList products={this.state.products}/> {/* This is sending state of product array down to ProductList from ProductPage */}
        <CategoryFilter />
        
      </div>
    )}
  }
  
  export default ProductPage;
  