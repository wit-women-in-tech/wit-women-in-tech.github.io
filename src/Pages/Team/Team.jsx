import React, { Component } from 'react'
import UserCard from '../../Components/UserCard';

export default class Team extends Component {

  constructor(){
    super();
// name,imageUrl,githubUrl,linkedInUrl,college,status
    this.state = {
      membersData : []
    }
  }

  

  async componentDidMount(){
      const url=  "https://wit-backend.herokuapp.com/team/getMembers"
      
      const response = await fetch(url , {
        method  : 'GET',
        headers : {
          'Content-Type' : 'application/json'
        }
      });

      const json  = await response.json();
      this.setState({membersData : json});
  }

  render() {
    return (
      <>
        <div className='container my-3'>
          
            <h1> Team Members </h1>

            <div className='row'>
              {this.state.membersData.map((element)=>{
                  return <div className='col-md-4' key={element.githubUrl}>
                      <UserCard userData={element}/>
                   </div> 
              })}
            </div>
        </div>
      </>
    )
  }
}
