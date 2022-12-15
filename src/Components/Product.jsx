import { useState, useEffect } from "react"
import React from 'react'
import Skeleton from "react-loading-skeleton";
import { NavLink } from "react-router-dom";
import { Footer } from "./Footer";

export default function Product() {


    const [data, setData] = useState([]);
    const [filter, setfilter] = useState(data);
    const [loading, setloading] = useState(false);

    let componentMounted = true;

    useEffect(() => {
        const getProducts = async () => {
            setloading(true);
            const response = await fetch("https://fakestoreapi.com/products");
            if (componentMounted) {
                setData(await response.clone().json());
                setfilter(await response.json())
                setloading(false)
            }
            return () => {
                componentMounted = false;
            }
        }
        getProducts();
    }, [])

    const Loading = () => {
        return (
            <>
                <div className="col-md-3">
                    <Skeleton height={350}/>
                </div>
                <div className="col-md-3">
                    <Skeleton height={350}/>
                </div>
                
                <div className="col-md-3">
                    <Skeleton height={350}/>
                </div>
                
                <div className="col-md-3">
                    <Skeleton height={350}/>
                </div>
                
                
            </>

        )
    }
    const filterProduct = (gothca) => {
        const updatedlist = data.filter((x) => x.category === gothca)
        setfilter(updatedlist)
    }

    const ShowProducts = () => {
        return (
            <>
                <div className="buttons d-flex justify-content-center mb-5 pb-2">
                    <button className="btn btn-outline-dark me-2" onClick={() =>
                        setfilter(data)}>All</button>
                    <button className="btn btn-outline-dark me-2" onClick={() =>
                        filterProduct("men's clothing")}>Men's Clothing</button>
                    <button className="btn btn-outline-dark me-2" onClick={() =>
                        filterProduct("women's clothing")}>Women's Clothing</button>
                    <button className="btn btn-outline-dark me-2" onClick={() =>
                        filterProduct("jewelery")}>Jewelery</button>
                    <button className="btn btn-outline-dark me-2" onClick={() =>
                        filterProduct("electronics")}>Electronics</button>
                </div>
                {filter.map((product) => {
                    return (
                        <>
                            <div className="col-md-3">
                                <div className="card h-100 text-center p-4" key={product.id}>
                                    <img src={product.image} className="card-img-top" alt={product.title} height="250px" />
                                    <div className="card-body" height="250px">
                                        <h5 className="card-title mb-0">{product.title.substring(0, 14)}...</h5>
                                        <p className="card-price lead fw-bold">${product.price}</p>
                                        <NavLink to={`/products/${product.id}`} className="btn btn-outline-primary">Add to Cart</NavLink>
                                    </div>
                                </div> 
                            </div>
                        </>
                    )
                }
                )
                }
            </>
        )
    }

    return (
        <div>
            <div className="container my-4 py-4">
                <div className="row">
                    <div className="col-15 mb-4">
                        <div className="display-6 fw-bolder text-center">Latest Products</div>
                        <hr />
                    </div>
                </div>
                <div className="row justify-content-center">
                    {loading ? <Loading /> : <ShowProducts />}
                </div>
            </div>
            <Footer/>
        </div>
    )
}
