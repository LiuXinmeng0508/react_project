import React, {Component} from 'react';
import { Carousel} from 'antd-mobile';

export default class AppPics extends React.Component {
    state = {
      data: ['1', '2', '3'],
      imgHeight: 176,
    }
    componentDidMount() {
      // simulate img loading
      setTimeout(() => {
        this.setState({
          data: ['1', '2', '3'],
        });
      }, 100);
    }
    render() {
      return (
        
          <Carousel
            className="carousel_pic"
            autoplay={true} 
            infinite
            beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
            afterChange={index => console.log('slide to', index)}
          >
            {this.state.data.map(val => (
              <a
                key={val}
                href="#"
                style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight, position: 'relative' }}
              >
                <img
                  src={`../../imgs/${val}.jpg`}
                //   src={require('./img/'+${val}+'.jpg')}
                //   alt=""
                  style={{ width: '100%', verticalAlign: 'top' }}
                  onLoad={() => {
                    // fire window resize event to change height
                    window.dispatchEvent(new Event('resize'));
                    this.setState({ imgHeight: 'auto' });
                  }}
                />
              </a>
            ))}
          </Carousel>
        
      );
    }
  }
