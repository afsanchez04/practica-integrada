import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { CartContext } from "../context/CartContext"


const BASE_URL = "https://fakestoreapi.com/products"

export const ProductsList = () => {

    const [products, setProducts] = useState([])
    const {addToCart} = useContext(CartContext)

    useEffect(() => {

        axios
            .get(BASE_URL)
            .then(response => setProducts(response.data))
            .catch(error => console.error("Error fetching data", error))

    }, [])



    return (
        <>
            <h2 className="my-5 text-center">Productos</h2>
            <div className="row">
                {products.map((product) => (
                    <div key={product.id} className="col-4 mb-4">
                        <div key={product.id} className="card h-100" >
                            <img
                                src={product.image}
                                className="card-img-top"
                                style={{
                                    width: "100%",
                                    height: "250px",
                                    objectFit: "cover",
                                    objectPosition: "top"
                                }}
                            />
                            <div className="card-body">
                                <h5 className="card-title">{product.title}</h5>
                                <p className="card-text">{product.price}</p>
                                <button
                                    onClick={() => addToCart(product)}
                                    className="btn btn-primary"
                                >
                                    Add to Cart
                                </button>


                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}
