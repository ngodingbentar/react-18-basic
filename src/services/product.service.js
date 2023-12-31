import axios from "axios";

function getAllProducts (callback) {
  axios
    .get('https://fakestoreapi.com/products')
    .then((res) => callback(res.data))
    .catch((error) => console.log(error))
}

function getDetailProduct (id, callback) {
  axios
    .get(`https://fakestoreapi.com/products/${id}`)
    .then((res) => callback(res.data))
    .catch((error) => console.log(error))
}

export { getAllProducts, getDetailProduct }