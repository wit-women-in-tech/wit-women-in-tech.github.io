import React, { Component } from 'react'

export default class UserCard extends Component {
  render() {

    let userData = this.props.userData;
    // name,imageUrl,githubUrl,linkedInUrl,college,status
    return (
        <>
            <div className='my-3'>

                <div className="card" style={{width: "18rem"}}>
                <img className="card-img-top" src={userData.imageUrl} alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title"> {userData.name} </h5>
                    <p className="card-text"> {userData.status} </p>
                    <a href={userData.linkedInUrl} className="btn btn-sm btn-primary">LinkedIn Profile</a>
                </div>
                </div>

            </div>;
        </>
      
    )
  }
}
