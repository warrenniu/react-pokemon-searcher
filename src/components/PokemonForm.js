import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {

  state = {
    name: "",
    hp: "",
    sprites: {
      front: "",
      back: ""
    }
  }

  localChangeHandler = (event) => {
    console.log(event.target.name)
    this.setState({ [event.target.name]: event.target.value })
  }

  localImageHandler = (event) => {
    if (event.target.name === "front") {
      this.setState({
        sprites: {
          ...this.state.sprites,
          front: event.target.value,
          
        },
      })
    } else {
    this.setState({
      sprites: {
        ...this.state.sprites,
        back: event.target.value,
        
      },
    })
  }
}


    localSubmitHandler = (event) => {
      event.preventDefault()
      this.props.submitHandler(this.state)
    }



    render() {
      return (
        <div>
          <h3>Add a Pokemon!</h3>
          <Form onSubmit={this.localSubmitHandler}>
            <Form.Group widths="equal">
              <Form.Input fluid label="Name" placeholder="Name" name="name" value={this.state.name} onChange={this.localChangeHandler} />
              <Form.Input fluid label="hp" placeholder="hp" name="hp" value={this.state.hp} onChange={this.localChangeHandler} />
              <Form.Input fluid label="Front Image URL" placeholder="url" name="front" value={this.state.sprites.front} onChange={this.localImageHandler} />
              <Form.Input fluid label="Back Image URL" placeholder="url" name="back" value={this.state.sprites.back} onChange={this.localImageHandler} />
            </Form.Group>
            <Form.Button>Submit</Form.Button>
          </Form>
        </div>
      )
    }
  }

  export default PokemonForm
