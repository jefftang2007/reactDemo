import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class TestApi extends Component {
  render() {
      return(
        <div>
          <h3>Test API Page</h3>
          <br/><br/>
          <ul>
            <li><Link to='/home'>Go Back Home</Link></li>
          </ul>
        </div>
      );
  }
}
