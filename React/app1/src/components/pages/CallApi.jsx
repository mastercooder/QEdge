import React, { Component } from 'react'
import '../CSS/CallApi.css'

class CallApi extends Component {
    constructor(){
        super();
        this.state={
            users: [],
            loading: true,
            error: null,
        };
    }

    // This Life Cycle Method will Execute after loding render method
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(
                res => {
                    if(!res.ok){
                        throw new Error("HTTP Error: Server Not Responding");
                    }
                    return res.json()
                }
            )
            .then(
                data =>{
                    this.setState(
                        {users: data, loading: false}
                    );
                }
            );
    }
  render() {
    const {users, loading, error} =this.state;
    if(loading) return <h3>Loading...</h3>
    if(error) return <h3>API error: {error}</h3>
    return (
      <div className='Call_API'>
        <h1 className='CallAPI_Heading'>Call API</h1>
        
        <div className="CallAPI_Display">
            <h3>Users Data</h3>
            {
                users.map(
                    user => (
                        <p key={user.id}>
                           {user.id} | {user.name} | {user.email}
                        </p>
                    )
                )
            }
        </div>
      </div>
    );
  }
}

export default CallApi;

// fetch() --> send HTTP request https://jsonplaceholder.typicode.com/users
// response.json() --> Convertaing Response to JS Object {}
// then(data) ==> handle data
// catch()    ==> handle errors