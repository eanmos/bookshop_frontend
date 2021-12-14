class LikeButton extends React.Component {
  constructor() {
    super()
    this.state = { hover: false }
  }

  hoverOn(e) {
    console.log(e)
    e.setState({ hover: true })
  }

  hoverOff(e) {
    console.log(e)
    e.setState({ hover: false })
  }

  render() {
    if (this.state.hover === false) {
      return ( <i className="LikeButton far fa-heart" onMouseOver={this.hoverOn}></i>)
    } else {
      return ( <i className="LikeButton fas fa-heart" onMouseOut={this.hoverOff}></i>)
    }
  }
}
