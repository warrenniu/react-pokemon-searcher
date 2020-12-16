import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = { beenClicked: false }

  clickImageHandler = () => {
    this.setState((prevState) => ({ beenClicked: !prevState.beenClicked })
    )
  }

  renderBothImages = () => {
    if (this.state.beenClicked) {
      return <img src={this.props.pokeObj.sprites.back} alt="oh yes!" onClick={this.clickImageHandler} />
    }
    else if (this.state.beenClicked === false) {
      return <img src={this.props.pokeObj.sprites.front} alt="oh no!" onClick={this.clickImageHandler} />
    }
  }



  render() {
    return (
      <Card>
        <div>
          <div className="image">
            {this.renderBothImages()}
          </div>
          <div className="content">
            <div className="header">{this.props.pokeObj.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.pokeObj.hp} hp
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
