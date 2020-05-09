import React, { Component } from 'react';
import ProductComponent from './components/ProductComponent';

import './App.css';

class App extends Component {
  render() {
    var products =[
      {
          id : 1,
          name: "Apple 1234 cua",
          price: 500,
          image: "https://cdn.tgdd.vn/Products/Images/42/71306/iphone-6s-5-300x300.jpg",
          status: true
      },
      {
          id : 2,
          name: "Iphone 8 plus 64Gb",
          price: 700,
          image: "https://i.ndh.vn/2019/09/11/4-1568186945.jpg",
          status: false
      },
      {
          id : 3,
          name: "SamSung 6plus 64Gb",
          price: 1100,
          image: "https://www.techrum.vn/chevereto/images/2017/09/13/swfu2.jpg",
          status: true
      }
    ];
    let elements = products.map((product, index) => {
      let result;
      if (product.status) {
          result = <ProductComponent
                      key={product.id}
                      price={ product.price }
                      image={ product.image }
                    >
                      {product.name}
                    </ProductComponent>
      }
        return  result;
    });

    return (
      <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" >Navbar</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" >Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" >Features</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" >Pricing</a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled"  tabIndex={-1} aria-disabled="true">Disabled</a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="container">
          <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  {elements}
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <button type="button" className="btn btn-warning"> Click Me!</button>
              </div>
          </div>
      </div>
     

      </>
    );
  } 
}

export default App;
