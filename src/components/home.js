import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => (
  <div>
    <h3>Home Page</h3>
    <br/><br/>
    <h4>The admin application contains the following sections: </h4>
    <br/>
    <ul>
        <li><Link to='/test'>Test Api:</Link> test tomcat api</li>
        <li><Link to='/notification'>Send Notification:</Link> send notice notification to mobile users</li>
    </ul>
    <ul>
        <li><Link to='/'>Logout:</Link> return to login page</li>
    </ul>    
  </div>
)

export default Home