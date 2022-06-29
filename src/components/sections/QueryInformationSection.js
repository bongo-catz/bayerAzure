import React from 'react';
import '../../App.css';
import { Button } from '../Button';
import "./QueryInformationSection.css";

function QueryInformationSection() {
    return (
        <div className='hero-container'>
          <video src='/videos/video-2.mp4' autoPlay loop muted />
          <h1>Search Information</h1>
          <p>Raw Material Information</p>
          <div className='hero-btns'>
            <Button
              className='btns'
              buttonStyle='btn--outline'
              buttonSize='btn--large'
            >
                Add
            </Button>
          </div>
        </div>
      );
}

export default QueryInformationSection