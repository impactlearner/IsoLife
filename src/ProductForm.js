import React from 'react'

// const defaultState = {
//     title: "",
//     price: 0,
//     imageUrl: "",
//     category: "Office"
// }

class ProductForm extends React.Component {
   
        state={
            title: "tv",
            price: 19.99,
            imageUrl: "",
            category: "Office"
         }

      
        // handleChange = (event) => {
        //   console.log(event.target.name) // "title"
        //   if (event.target.type === "number") {
        //     this.setState({
        //       [event.target.name]: parseInt(event.target.value)
        //     })
        //   } else {
        //     this.setState({
        //       [event.target.name]: event.target.value
        //     })
        //   }
        // }
        handleChange = (evt) => {
            this.setState({
            [evt.target.name]: evt.target.value
            })
        }

      
        handleSubmit = (evt) => {
          evt.preventDefault()
      
        //   fetch("http://localhost:3000/products", {
        //     method: "POST",
        //     headers: {
        //       "Content-Type": "application/json"
        //     },
        //     body: JSON.stringify(this.state)
        //   })
        //     .then(r => r.json())
        //     .then(newProduct => {
        //       this.props.onFormSubmit(this.state)
        //       this.setState(defaultState)
        //     })
            fetch("http://localhost:4000/products", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    
                    title: this.state.title,
                    price: this.state.price,
                    imageUrl: this.state.imageUrl,
                    category: this.state.category

                })
            })
            .then(r => r.json())
            .then((newlyCreatedProduct) => {
                this.props.addOneProductToArray(newlyCreatedProduct);
            })
                

        }

        // Inverse Data: Send down a function from ProductPage to ProductForm 1) first send a function down from ProductPage to Product Form;
        // 2) The function that is being sent down should accept one parameter
        // 3) in the body of that fn, add the parameter to the state of Products in the ProductPage
        // 4) Make HandleSubmit work in your ProductForm - if steps 1, 2 and 3 are done right, this should work

    render(){
        // console.log(this.state)
        return (
            <div className="form-container">
              <h2>New Listing</h2>
              <form onSubmit={this.handleSubmit}>
                <label htmlFor="title">Title: </label>
                <input type="text" name="title" value={this.state.title} onChange={this.handleChange} />
      
                <label htmlFor="price">Price: </label>
                <input type="number" name="price" value={this.state.price} onChange={this.handleChange} />
      
                <label htmlFor="imageUrl">Image URL: </label>
                <input type="text" name="imageUrl" value={this.state.imageUrl} onChange={this.handleChange} />
      
                <label htmlFor="category">Category: </label>
                <select name="category" value={this.state.category} onChange={this.handleChange}>
                  <option value="Office">Office</option>
                  <option value="Personal">Personal</option>
                  <option value="Fitness">Fitness</option>
                  <option value="Education">Education</option>
                  <option value="Entertainment">Entertainment</option>
                </select>
      
                <input type="submit" value="Submit" />
              </form>
            </div>
          )
        }
  }
  
  export default ProductForm;