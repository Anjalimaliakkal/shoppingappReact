import React, { useEffect, useState } from 'react'
import axios from 'axios'

const ViewAll = () => {
    const [todos, changeTodos] = useState(
        { "articles": [] }
    )
    const fetchData = () => {
        axios.get("https://dummyjson.com/products")
            .then(
                (response) => {
                    console.log(response.data)
                    changeTodos(response.data)
                }
            ).catch().finally()
    }
    useEffect(() => { fetchData() }, [])
    return (
        <div>
            <h1><center>NEWS HEADLINES</center></h1>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row">
                            {
                                todos.articles.map(
                                    (value, index) => {
                                        return <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                                            <div className="card">
                                                <img src={value.images} className="card-img-top" alt="..."></img>
                                                <div className="card-body">
                                                    <h5 className="card-title">title:{value.title}</h5>
                                                    <p className="card-text">description:{value.description}</p>
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