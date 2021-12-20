import React from 'react'
import { Swiper } from 'antd-mobile'

import '../style/Ticketing.css';

const colors = ['#acedff', '#bc1fbd', '#2e35e4', '#ffcfac']

const items = colors.map((color, index) => (
    <Swiper.Item key={index}>
      <div className="content" style={{ background: color}  }>
        {index + 1}
      </div>
    </Swiper.Item>
  ))
  
function Ticketing() {
    return (
        <>
          <Swiper
            slideSize={70} 
            trackOffset={15} 
            loop 
            stuckAtBoundary={false}
            defaultIndex={0}
            autoplay={true}
            autoplayInterval={3000}
          >
            {items}
          </Swiper>


      </>
    );
}

export default Ticketing;