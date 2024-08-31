import React from 'react'
import photo from './img/myphoto.jpg'

const profile = {
    name :" Mohamed Abdul Aziz",
    ImgUrl : photo,
}

function Index() {
  return (
    <>
    <h1> Testing process </h1>
    <button> Click Here</button>
    <img src={profile.ImgUrl} />
    </>
  )
}

export default Index