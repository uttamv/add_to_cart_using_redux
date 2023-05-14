import React from 'react'

function Home(props) {
    console.log('home component', props)
  return (
    <div>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="https://d2xamzlzrdbdbn.cloudfront.net/products/509de2d9-cd93-43e1-859d-19933800f43d22081214.jpg" />
                </div>
                <div className="text-wrapper item">
                    <span>
                        I-Phone
                    </span>
                    <span>
                        Price: $1000.00
                    </span>
                </div>
                <div className="btn-wrapper item">
                    <button 
                    onClick={
                        ()=>{props.addToCartHandler({pice:1000,name:'i phone 11'})}
                        }>
                        Add To Cart</button>
                        <button 
                    onClick={
                        ()=>{props.removeToCartHandler()}
                        }>
                        Remove item</button>
                </div>
            </div>
        </div>
  )
}

export default Home