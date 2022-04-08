import * as React from 'react';

const GoogleMapWidget = ()=>{
    return(
        <div className="google-map-code" style={{height: '100%', width: '100%'}}>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3653.2542521880832!2d120.42730081498043!3d23.702612884612954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346eba072ee22f11%3A0x558aed05907207d7!2z5ZyL56uL6JmO5bC-56eR5oqA5aSn5a24!5e0!3m2!1szh-TW!2stw!4v1649432209293!5m2!1szh-TW!2stw" style={{height: '100%', width: '100%'}} ></iframe>
        </div>
    );
}

export {GoogleMapWidget}