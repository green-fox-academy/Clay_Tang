import React from 'react';

import './App.css';
import Bucks from './images/Bucks.jpg';
import Cleveland from './images/Cleveland.jpg';
import Lakers from './images/Lakers.jpg';
import MiamiHeat from './images/MiamiHeat.jpg';
import Raptors from './images/Raptors.jpg';
import {ReactComponent as Arrow} from './arrow.svg';
import { StyleSheet, css } from 'aphrodite';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images:[
        [Bucks, 'Bucks', 'Milwaukee Bucks is an NBA professional basketball team based in Milwaukee, Wisconsin. The team was founded in 1968 and joined the NBA in the same year. It is a part of the central division of the Eastern League of the NBA.'], 
        [Cleveland, 'Cleveland', 'Cleveland Cavaliers is a professional basketball team belonging to Ohio (Cleveland) in the United States. It is part of the central division of the Eastern League of the men\'s basketball professional league (NBA).'],
        [Lakers, 'Lakers', 'Los Angeles Lakers is a basketball club in Los Angeles, California. It was founded in Minneapolis in 1947 and moved to Los Angeles in 1960. The name of Lakers comes from another name of Minneapolis, thousand lake land, which refers to people who work or live in the Great Lakes in the northeast of the United States. Due to the color of the Jersey, the Lakers are also known as the "purple and gold team".'], 
        [MiamiHeat, 'MiamiHeat', 'Miami Heat, founded in 1988 and joined the NBA, is a professional basketball team belonging to Miami, Florida, USA, and a part of the Southeast Division of the Eastern League of the men\'s basketball professional league (NBA).'], 
        [Raptors, 'Raptors', 'Toronto Raptors, one of the youngest teams in the NBA, was founded in 1995 and joined the NBA in 1995-1996. It is a professional basketball team belonging to Toronto, the provincial capital of Ontario, Canada, and a part of the Atlantic Division of the Eastern League of the NBA.']
      ], 
      imageIndex:[0],
      };
    this.viewImage = this.viewImage.bind(this);
    this.turnLeft = this.turnLeft.bind(this);
    this.turnRight = this.turnRight.bind(this);
  }

  viewImage(img) {
    let imgIndex;
    this.state.images.forEach((element, index) => {
      if(element[0] === img) {
        return imgIndex = index;
      }
    })
    this.setState({imageIndex: [imgIndex]});
  }

  turnLeft(imgIndex) {
    if (this.state.imageIndex[0] !== 0) {
      this.setState({imageIndex: [imgIndex[0]-1]});
    }
  }

  turnRight(imgIndex) {
    if (this.state.imageIndex[0] !== (this.state.images.length-1)) {
      this.setState({imageIndex: [imgIndex[0]+1]});
    }
  }

  render() {
    const styles = StyleSheet.create({
      gallery: {
        height: '100%',
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }
    });
    return (
      <div className={css(styles.gallery)}>
        <ImageViewer
          images = {this.state.images}
          imageIndex = {this.state.imageIndex}
          turnLeft = {this.turnLeft}
          turnRight = {this.turnRight}
        />
        <nav>
          <Thumbnails 
            images = {this.state.images}
            viewImage = {this.viewImage}
          />
        </nav>
      </div>
    );

  }
}

function ImageViewer(props) {
  const styles = StyleSheet.create({
    imageViewContainerStyle: {
        height: '70vh',
        display: 'flex',
        alignItems: 'center',
        boxShadow: '2px 4px 8px #2d2d2d'
    },
    imageContainerStyle: {
      height: '100%',
      width: '125vh',
      position: 'relative'
    },
    imageViewStyle: {
      height: '100%',
      width: '100%'
    },
    imageDescriptionStyle: {
      position: 'absolute',
      bottom: '0px',
      color: '#ffffff',
      backgroundColor: 'rgba(66,62,60,0.7)'
    },
    imageDescriptionTitleStyle: {
      padding: '0 2rem 0 2rem'
    },
    imageDescriptionContentStyle: {
      padding: '0 2rem 0 2rem'
    },

    arrowContainer: {
      height: '100%',
      width: '4rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'white',
    },

    arrowLeft: {},

    arrowRight: {
      transform: 'rotate(180deg)',
    },
  });

  const arrowLeftStyle = css((props.imageIndex[0] !== 0) ? styles.arrowLeft : styles.arrowLeftDisableStyle)
  const arrowRightStyle = css(
    (props.imageIndex[0] !== props.images.length) ? styles.arrowRight : styles.arrowRightDisableStyle
  )
  return (
    <div className={css(styles.imageViewContainerStyle)}>
      <div className={css(styles.arrowContainer)}>
        <Arrow 
          className={arrowLeftStyle} 
          onClick={() => {props.turnLeft(props.imageIndex)}}
        />
      </div>
      <div className={css(styles.imageContainerStyle)} id="imageContainer">
        <img className={css(styles.imageViewStyle)} src={props.images[props.imageIndex][0]} alt=""/>
        <div className={css(styles.imageDescriptionStyle)} id="imageDescription">
          <h3 className={css(styles.imageDescriptionTitleStyle)}>{props.images[props.imageIndex][1]}</h3>
          <p className={css(styles.imageDescriptionContentStyle)}>{props.images[props.imageIndex][2]}</p>
        </div>
      </div>
      <div className={css(styles.arrowContainer)}>
        <Arrow 
          className={arrowRightStyle} 
          onClick={() => {props.turnRight(props.imageIndex)}}
        />
      </div>
    </div>
  )
}

function Thumbnails(props) {
  const styles = StyleSheet.create({
    thumbnailStyle: {
      width: '4rem',
      height: '4rem',
      margin: '2rem 1rem 0 1rem',
      cursor: 'pointer',
      transition: '0.5s',
      transitionTimingFunction: 'ease-in-out',
      ':hover': {
        marginTop: '0.5rem',
        marginBottom: '0.5rem'
      }
    }
  })

  return (
    <>
      {props.images.map((element, index) => {
        return <img src={element[0]} key={index} className={css(styles.thumbnailStyle)} onClick={() => props.viewImage(element[0])} alt=""/>
      })}
    </>
  )
}

export default App;
