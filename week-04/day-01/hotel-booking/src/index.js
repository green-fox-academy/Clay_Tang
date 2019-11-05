import React from 'react'
import ReactDOM from 'react-dom'
import data from './data';
import SideBar from './side-bar';
import Hotel from './hotel';

function LayOut() {
  const mainStyle = {
    'display': 'flex'
  }
  const headerStyle = {
    'display': 'flex',
    'width': '100%',
    'marginLeft': '2rem',
  }

  return (
    <>
      <h1 style={headerStyle}>Hotel Booking</h1>
      <div style={mainStyle}>
        <SideBar filters = {data.filters}/>
        <Hotel hotels = {data.hotels}/>
      </div>
    </>
  )
}

var layout = <LayOut data = {data}/>;
ReactDOM.render(layout, document.getElementById('react-container'));