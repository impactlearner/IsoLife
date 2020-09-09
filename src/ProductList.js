import React from 'react'

import ProductCard from './ProductCard'
import CategoryFilter from './CategoryFilter';

import PRODUCTS from './data'

// console.log(PRODUCTS)

const firstProduct = PRODUCTS[0]
// ProductPage passed down the state of Products to ProductList (a functional component)
const ProductList = (props) => {
    
const renderProducts = () => {
    return props.products.map(product => <ProductCard key={product.id} product={product} />)
}

    return (
        <>
        <h1>ProductList</h1>
        <CategoryFilter />
        
        {renderProducts()}

        </>
    )
}

// class ProductList extends Component {
//     render(){
//     return (
//       <div>
//         <h1>ProductList</h1>

//         <ProductCard />
        
//       </div>
//     )}
//   }
  
  export default ProductList;