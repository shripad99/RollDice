// import React, { Component } from 'react'

// export default class Die extends Component {
//   render() {
//     return (
//       <>
//           <h1>{this.props.title}</h1>
//             <i className = {`fas fa-${this.props.face} ${this.props.rolling && "shake"}`}></i>
//       </>
//     )
//   }
// }


import React from 'react'

export default function Die(props) {
  return (
    <div>
      <i className = {`fas fa-${props.face} ${props.rolling && "shake"}`}></i>
    </div>
  )
}
