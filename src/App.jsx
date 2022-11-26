import { Fragment, useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'

import './App.css'

function App() {

  const [productos] =useState([
    {
      id: 1,
      name: 'Polo de react',
      mainCategory:'Tecnology',
      secondaryCategory:'React',
      price: 50,
      image:"https://res.cloudinary.com/practicaldev/image/fetch/s--CSfu32Lv--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/jh26ac7tpt5o1i24dm6n.png"

    },
    { id: 2,
      name: 'Polo de react',
      mainCategory:'Tecnology',
      secondaryCategory:'React',
      price: 50,
      image:"https://res.cloudinary.com/practicaldev/image/fetch/s--CSfu32Lv--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/jh26ac7tpt5o1i24dm6n.png"

    },
    ,
    { id: 3,
      name: 'Polo de react',
      mainCategory:'Tecnology',
      secondaryCategory:'React',
      price: 50,
      image:"https://res.cloudinary.com/practicaldev/image/fetch/s--CSfu32Lv--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/jh26ac7tpt5o1i24dm6n.png"

    },
    ,
    { id: 4,
      name: 'Polo de react',
      mainCategory:'Tecnology',
      secondaryCategory:'React',
      price: 50,
      image:""

    },
    ,
    { id: 5,
      name: 'Polo de react',
      mainCategory:'Tecnology',
      secondaryCategory:'React',
      price: 50,
      image:"https://res.cloudinary.com/practicaldev/image/fetch/s--CSfu32Lv--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/jh26ac7tpt5o1i24dm6n.png"

    },
    

    
  ])

  const currentDate = new Date().getFullYear()


  return (
    <Fragment>
      <Header
      titulito="tienda De Ropa"
      store="el loco venta"
      slogan="si vienes compras o mueres.."/>
     
  <Footer
  currentDate={currentDate}
  />
    </Fragment>
  )
}

export default App
