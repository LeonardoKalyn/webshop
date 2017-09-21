import React from 'react';
import {fdatabase} from '../../firebase/firebase';

export class ProductLoader extends React.Component {
    constructor(props){
        super(props);
        
        let data = fdatabase.ref('products');
        data.on('value', (snapshot)=>{
            this.props.onNewProducts({
                    products: snapshot.val()
                }
            );
        });
    }
    
    render(){
        return null;
    }
}