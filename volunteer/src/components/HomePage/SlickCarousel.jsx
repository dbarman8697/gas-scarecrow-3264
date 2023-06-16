import React from 'react'
import "./SlickCarousel.css";

var images = [
  "https://images.squarespace-cdn.com/content/v1/5c9001be7fdcb89c5f59bc3f/1683295470538-N34A8RL56FEGXIPAELCX/looking-to-volunteer-texas-75204.jpg?format=1500w",
  "https://images.squarespace-cdn.com/content/v1/5c9001be7fdcb89c5f59bc3f/1683295473750-HWE21R3I2203TPBY8AFN/apply-csr-online.jpg?format=1500w",
  "https://images.squarespace-cdn.com/content/v1/5c9001be7fdcb89c5f59bc3f/1683295471208-LBROMK5MRJBGFM5ZO4EI/schedule-demo-voly.jpg?format=1500w",
  "https://images.squarespace-cdn.com/content/v1/5c9001be7fdcb89c5f59bc3f/1683295471406-ZFGI1QJ0HZBV9H0E5WEG/volunteernow-voly-discount-depot-sign-up-sales.jpg?format=1500w"
];

class ImageList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images,
      fadedleft: true,
      fadedright: false,
      start: 0,
      finish: 5
    }
  }
  leftClick() {
    let start = this.state.start;
    let finish = this.state.finish;
    if (start > 0 && finish > 0) {
      this.setState({
        start: start - 5,
        finish: finish - 5,
      });
    } else {
      this.setState({
        fadedleft: true
      });
    }
    this.setState({
      fadedright: false
    })
  }
  rightClick() {
    let start = this.state.start;
    let finish = this.state.finish;
    if (finish < images.length) {
      this.setState({
        start: start + 5,
        finish: finish + 5
      });
    } else {
      this.setState({
        fadedright: true
      });
    }
    
    this.setState({
      fadedleft: false
    });
  }
  render() {
    var startindex = this.state.start;
    var finishindex = this.state.finish;
    const fadedleft = this.state.fadedleft ? "arrow-left faded-left" : "arrow-left";
    const fadedright = this.state.fadedright ? "arrow-right faded-right" : "arrow-right";
    return (
      <div className="container">
        <div className="slideshow row col-md-12">
          <div className={fadedleft} onClick={this.leftClick.bind(this)}></div>
          {
            this.state.images.slice(startindex, finishindex).map((image, imageindex) => {
              return (
                <div key={imageindex}>
                  <img className="image" src={image} />
                </div>
              )
            })
           }
          <div className={fadedright} onClick={this.rightClick.bind(this)}></div>
        </div>
      </div>
    )
  }
};


export default ImageList;