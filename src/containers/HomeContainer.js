import React from 'react'
import { connect } from 'react-redux'
import Home from '../components/Home'
import Header from '../components/Header'
import { addToCart, removeToCart } from '../services/actions/action'

const mapStateToProps=state=>({
 data:state.cardItems
})

const mapDispatchToProps=dispatch=>({
  addToCartHandler:data=>dispatch(addToCart(data)),
  removeToCartHandler:()=>dispatch(removeToCart())
})


export default connect(mapStateToProps,mapDispatchToProps)(Home)