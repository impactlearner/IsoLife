import React from 'react'
import { Divider, Image, Card } from 'semantic-ui-react'
import { Button, Segment } from 'semantic-ui-react'

 class ProductCard extends React.Component {
    
     render () {
        console.log(this.props)
        return(
            <div>
            <Card className="productcard">
             <Image src={this.props.product.imageUrl} alt={this.props.product.title} />
             <Card.Content>
             <h2>{this.props.product.title}</h2>
             <h3>${this.props.product.price}</h3>
             
             <Button inverted color='blue'>Delete</Button>
             </ Card.Content>
            </Card>
            

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