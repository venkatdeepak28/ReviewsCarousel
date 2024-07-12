// Write your code here
import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {value: 0}

  onDecrease = () => {
    const {value} = this.state
    if (value > 0) {
      this.setState(prevState => ({value: prevState.value - 1}))
    } else {
      this.setState({value: 0})
    }
  }

  onIncrease = () => {
    const {value} = this.state
    if (value < 3) {
      this.setState(prevState => ({value: prevState.value + 1}))
    } else {
      this.setState({value: 3})
    }
  }

  render() {
    const {value} = this.state
    const {reviewsList} = this.props
    const {imgUrl, username, companyName, description} = reviewsList[value]
    return (
      <div className="bg-container">
        <div>
          <button className="arrow" type="submit" onClick={this.onDecrease} data-testid="leftArrow">
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>
        </div>
        <div className="inner-container">
          <h1 className="main-heading">Reviews</h1>
          <img src={imgUrl} alt={username} />
          <p className="para">{username}</p>
          <p className="company-name">{companyName}</p>
          <p className="company-name">{description}</p>
        </div>
        <div>
          <button className="arrow" type="submit" onClick={this.onIncrease} data-testid="rightArrow">
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
