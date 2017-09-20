//import React from 'react';
import {fdatabase} from './firebase';

export var data = fdatabase.ref('products/sale_offerings');
data.once('value', (snapshot)=>{
    return snapshot.val();
});