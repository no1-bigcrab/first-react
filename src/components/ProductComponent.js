import React, {Component} from 'react';

class ProductComponent extends Component {

    // constructor(props){
    //     super(props);
    //     this.onAddToCard = this.onAddToCard.bind(this);
    // }

    onAddToCard(text){
        //console.log(text);
        alert(this.props.children + '-' +this.props.price + 'VND');
    }
    onAddToCard2 = () => {
            //console.log(text);
            alert(this.props.children + '-' +this.props.price + 'VND');
        }

    render () {

        return (
            <div>
                <div className="col-lg-4 col-sm-4 col-md-4 col-lg-4 border mt-3 p-1">
                    <div className="thumbnail text-center">
                        <img src={this.props.image} alt="" height="300" width="300"/>
                        <div className="caption">
                            <h3>{this.props.children}</h3>
                            <p> <span>Giá : </span> {this.props.price}$</p>
                            <p>
                                <a className="btn btn-primary" onClick={this.onAddToCard} >Mua ngay</a>
                                <a className="btn btn-info"  onClick={this.onAddToCard2} >Xem chi tiết</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductComponent;