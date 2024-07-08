import React, { Fragment } from 'react'
import Header from '../../Componentes/Header'
import Footer from '../../Componentes/Footer'
import {Outlet} from 'react-router-dom'
import Modal from '../../Componentes/Modal'


const PaginaPadrao = () => {
  

  return (
    <>
     <Header/>
     <Outlet/>
      <Modal/>
     <Footer/>
    </>    
  )
}

export default PaginaPadrao