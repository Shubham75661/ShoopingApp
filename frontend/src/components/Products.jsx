import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { add } from '../Redux/cartSlice';
import { useDispatch } from 'react-redux';

const Products = () => {
    const dispatch = useDispatch()
    const [products, setproducts] = useState([]);
    const [error, setError] = useState(null);

    const handleAdd = (product) =>{
        dispatch(add(product))
    }

    useEffect(() => {
      const fetchData = async () => {
        try {
          await axios.get('http://localhost:8080/products')
          .then((res) => {
            setproducts(res.data)
        })
        console.log("Products", products)
        } catch (error) {
          setError(error.message);
        }
      };
  
      fetchData();
    }, []);

  return (
    <div className="productsWrapper">
            {products.map((product) => (
                <div className="card" key={product.id}>
                    <img src={product.image} className='pictures' alt="" />
                    <h4>{product.title}</h4>
                    <h5>{product.price}</h5>
                    <button className="btn" onClick={() =>handleAdd(product)}>
                        Add to cart
                    </button>
                </div>
            ))}
        </div>
  )
}

export default Products