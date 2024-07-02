import React, { Fragment } from 'react'
import Header from '../../Componentes/Header'
import Footer from '../../Componentes/Footer'
import {Outlet} from 'react-router-dom'
// import Card from '../../Componentes/CriarCard'
import CardList from '../../Componentes/CriarCard'


const PaginaPadrao = () => {
  

  return (
    <>
     <Header/>
     <Outlet/>
     <CardList/>
     {/* <Card/> */}
     <Footer/>
    </>    
  )
}

export default PaginaPadrao