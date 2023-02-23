import React, { Component } from 'react';
import { useNavigate } from 'react-router-dom';
import './home.css'; // import the CSS file

class Home extends Component{

    constructor(props){
        super(props)
        this.state = {
            items:[],
            loading: false,
            visible: 10
        }
    }

    //lifecycle method
    componentDidMount(){
        this.getData();
        window.addEventListener('scroll', this.loadMore);
    }

    componentWillUnmount(){
        window.removeEventListener('scroll', this.loadMore);
    }

    getData = () => {
        fetch("https://randomuser.me/api/?results=500")
        .then((response) => response.json())
        .then((response) =>{
            this.setState({
                items:response.results,
                loading:true
            })
        })
    }

    loadMore = () => {
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            setTimeout(() => {
                this.setState({
                    visible: this.state.visible + 10
                });
            }, 1000);
        }
    }

    render(){

        var {items, loading, visible} =this.state

        if(!loading){
            return(
                <div>Loading ...</div>
            )
        }

        else{

        return(
            <div className="container">

                {items.slice(0, visible).map(item =>(
                    <div key={item.login.uuid} className="card">
                        <img src={item.picture.medium} alt={item.name.first} className="card-img-top"/>
                        <div className="card-body">
                            <h5 className="card-title">{item.name.first} {item.name.last}</h5>
                            <p className="card-text">{item.email}</p>
                        </div>
                    </div>
                ))}

            </div>
        )
        }
    }
}

export default Home
