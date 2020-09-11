import React from 'react'
import { Divider, Image, Card } from 'semantic-ui-react'
import { Button, Segment } from 'semantic-ui-react'

 class ProductCard extends React.Component {


    handleClick = (evt) => {
        console.log("Revisit this")
    }
    handleDelete = (evt) => {
        console.log(this.props.key)
        console.log(this.props)
        // Delete Fetch
        // Delete from frontend

    }
    
     render () {
        console.log(this.props)
        return(
            <div>
            <Card className="productcard">
             <Image src={this.props.product.imageUrl} alt={this.props.product.title} />
             <Card.Content>
             <h2>{this.props.product.title}</h2>
             <h3>${this.props.product.price}</h3>
             
             <Button className="delButton" onClick={this.handleDelete} inverted color='blue'>Delete</Button>
             </ Card.Content>
            </Card>
            

         </div>

        )
     }
         
     
 }


  export default ProductCard;