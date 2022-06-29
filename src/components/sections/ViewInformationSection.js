import React, {useState, useEffect} from 'react';
import '../../App.css';
import { Button } from '../Button';
import './ViewInformationSection.css';
import Data from "../data/Raw_Materials_Data";

function ViewInformationSection() {
    return (
        <div className='hero-container'>
          {/* <video src='/videos/video-2.mp4' autoPlay loop muted /> */}
          <h1>View All Materials</h1>
          <p>Raw Material Information</p>
          <Data />
        </div>
      );
}

export default ViewInformationSection