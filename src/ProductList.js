import React from 'react'
import { Divider, Image, Card } from 'semantic-ui-react'

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
        <div>
        <h1></h1>
        <Card.Group size ="small">
        {/* deleteProductFromArray={props.deleteProductFromArray} */}
        {renderProducts()}
        </Card.Group>

        </div>
    )

// let products = props.products.map((product) => {
//     return <Card.Group
//         deleteProductFromArray={props.deleteProductFromArray}
//         product={product}
//         key={product.id}
//          {renderProducts()}
//     />
// })
}


  export default ProductList;