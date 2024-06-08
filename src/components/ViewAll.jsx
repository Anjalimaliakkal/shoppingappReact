import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const ViewAll = () => {
    const [todos, changeTodos] = useState([])
    const fetchData = () => {
        axios.get("https://fakestoreapi.com/products")
        .then(
            (response) => {
                changeTodos(response.data)
            }
        ).catch().finally()
    }
    useEffect(() => { fetchData() }, [])
    return (
        <div>
            <NavBar />
            <h1><center>VIEWALL PRODUCTS</center></h1>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row">
                            {
                                todos.map(
                                    (value, index) => {
                                        return <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                                            <div className="card">
                                                <img src={value.image} className="card-img-top" alt="..."></img>
                                                <div className="card-body">
                                                    <h5 className="card-title">title:{value.title}</h5>
                                                    <p className="card-text">price:{value.price}</p>
                                                    <a href="#" className="btn btn-primary">view details</a>
                                                </div>
                                            </div>
                                        </div>
                                    }
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewAll