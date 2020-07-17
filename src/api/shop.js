import _products from './products.json'

const TIMEOUT = 100

export default {
  getProducts: (cb, timeout) => setTimeout(() => cb(_products), timeout || TIMEOUT),
  buyProducts: (payload, cb, timeout) => setTimeout(() => cb(), timeout || TIMEOUT)
}

//simple API call that fetches the JSON data
const fetchData = () => {
   return fetch('http://5e7b00ce0e046300163328bc.mockapi.io/greenstop/interview/api/products')
    .then(results => results.json())
    }