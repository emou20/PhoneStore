import React, { Component } from 'react';
import axios from 'axios';

export default class BestSellers extends Component {

    state = {
        produit:[]
    }

    componentDidMount() {
        axios.get("http://www.json-generator.com/api/json/get/ceTiPAvTPC?indent=2")
        .then(res => { 
          this.setState({ 
              produit:res.data
          });
        })
    } 
 

    render() {
        return (
            <div className="container">
                <div className="TitreBlock">Meilleurs Vente</div>
                <div className="col conteneurBoxProd">
                {this.state.produit.map(el => (
                    
                    <div className="boxProd col-3" key={el.id}>
                        
                            <a href={"/details-produit/" + el.id } className="imageProduit"><img src={el.photo} alt="" /></a>
                            <a href={"/details-produit/" + el.id } className="titreProduit">{el.nom}</a>
                            <div className="prixProduit">Prix : {el.prix}</div>
                         
                    </div>
                ))}

                </div>
            </div>
        )
    }
}
