import React, { Component } from 'react';
import styles from '../css/styles.css';

const rating = 4.2
const trustpilotRating = (rating / 5) * 100
const starsColor = '#01CA88'

function starColor() {
  if (rating < 4) {
    starsColor = '#88CC41';
  } else {
    starsColor = '#01CA88';
  }
}



const fill = {

  backgroundColor: starsColor,
  width: trustpilotRating + '%'
}
 

class Trustpilot extends Component {
  render() {
      return (

        
          
 
        
        <div className='trustpilot-stars'>
            <div className='trustpilot-fill' style={fill}>
              
            </div>
        </div>
        
      )
  }
}

export default Trustpilot;