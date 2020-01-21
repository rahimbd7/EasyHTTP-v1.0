/***
 * 
 * EasyHTTP Library
 * Library for making HTTP Request by using Promise
 * 
 * @vectersion 1.0.0
 * @author Md Rahim Uddin
 * @license MIT
 * @description  HTTP Request by using Promise
 * 
 * 
 * 
 *  
 **/
class EasyHTTP {
    //Make an HTTP GET Request
    get(url) {
        return new Promise((resolve, reject) => {
            fetch(url)
                .then(res => res.json())
                .then(data => resolve(data))
                .catch(err => reject(err))
        })
    }

    //Make an HTTP POST Request
    post(url, data) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(data)
                })
                .then(res => res.json())
                .then(data => resolve(data))
                .catch(err => reject(err))
        })
    }


    //Make an HTTP PUT Request

    put(url, data) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                    method: 'PUT',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(data)
                })
                .then(res => res.json())
                .then(data => resolve(data))
                .catch(err => reject(err))
        })
    }
    delete(url) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                    method: 'DELETE',
                    headers: {
                        'content-type': 'application/json'
                    },
                })
                .then(res => res.json())
                .then(() => resolve('Successfully deleted....!!!'))
                .catch(err => reject(err))
        })
    }

}