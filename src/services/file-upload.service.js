
import * as axios from 'axios';
import Vue from 'vue'

const BASE_URL = 'http://localhost:3000';

let request = axios.create({
    headers: 
        {'Content-Type': 'text/html',
        'Access-Control-Allow-Origin': '*'}
});

function upload(formData) {
    const url = `${BASE_URL}/documents/fileupload`;
    let test = 'http://localhost:3000/document/upload';
    return request.post(test, formData)
        // get data
        .then(x => x.data)
        .then(response =>{
            Vue.$router.push('/mandatory');
        })
        // add url field

        // .then(x => x.map(img => Object.assign({},
        //     img, { url: `${BASE_URL}/images/${img.id}` })))
        
        .catch((err) => {
            console.log(err);
        });
}

export { upload }