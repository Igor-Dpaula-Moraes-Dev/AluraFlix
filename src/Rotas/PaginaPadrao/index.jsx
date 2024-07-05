import React, { Fragment } from 'react'
import Header from '../../Componentes/Header'
import Footer from '../../Componentes/Footer'
import {Outlet} from 'react-router-dom'
// import Card from '../../Componentes/CriarCard'
import CardList from '../../Componentes/CardList'
import Modal from '../../Componentes/Modal'


const PaginaPadrao = () => {
  

  return (
    <>
     <Header/>
     <Outlet/>
     <CardList/>
      <Modal/>
     <Footer/>
    </>    
  )
}

export default PaginaPadrao