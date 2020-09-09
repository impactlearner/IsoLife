import React from 'react'

 class ProductCard extends React.Component {
    
     render () {
        // console.log(this.props)
        return(
            <div>
             <img src={this.props.product.imageUrl} alt={this.props.product.name} />
             <h2>{this.props.product.name}</h2>

         </div>

        )
     }
         
     
 }

// class ProductCard extends Component {
//     render(){
//     return (
//       <div>
//         <h1>ProductCard</h1>

        
        
//       </div>
//     )}
//   }
  
  export default ProductCard;