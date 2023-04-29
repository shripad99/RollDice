// import React, { Component } from 'react';
// import Die from "./Die";

// export default class RollDice extends Component {
//   static defaultProps = {
//     options: [
//       "dice-one",
//       "dice-two",
//       "dice-three",
//       "dice-four",
//       "dice-five",
//       "dice-six",
//     ]
//   }
//   constructor(props) {
//     super(props)
//     this.state = { face1: "dice-one", face2: "dice-three" ,rolling:false}
//   }
//   Roll() {
//     let idx1 = Math.floor(Math.random() * this.props.options.length);
//     console.log(idx1);
//     let dice1 = this.props.options[idx1];
//     let idx2 = Math.floor(Math.random() * this.props.options.length);
//     console.log(idx2);
//     let dice2 = this.props.options[idx2];
//     this.setState({ face1: dice1, face2: dice2,rolling:true})
//     setTimeout(() => {
//       this.setState({rolling:false});
//     }, 1000)
//   }
//   render() {
//     return (
//       <div className='dice-content'>
//         <div className='container'>
//           <Die title="🎲Random Dice Generator🎲" />
//           <div className='box'>
//           {/* <i className={`fas fa-${this.state.face1}`} /> 
//           <i className={`fas fa-${this.state.face2}`} /> */}
//           <Die num={`fas fa-${this.state.face1}`} rolling = {this.state.rolling} />
//           <Die num={`fas fa-${this.state.face2}`} rolling = {this.state.rolling}/>
//           </div>
//           <div>
//             <button onClick={() => this.Roll()} disabled={this.state.rolling}>{this.state.rolling ? "Rolling..." : "Roll Dice!"}</button>
//           </div>
//         </div>
//       </div>
//     )
//   }
// }

// In hooks
import React , {useState} from 'react';
import Die from "./Die";

export default function RollDice() {
  const dices = ["dice-one","dice-two","dice-three","dice-four","dice-five","dice-six"];
  const [dice1,setDice1] = useState("dice-one");
  const [dice2,setDice2] = useState("dice-two");
  const [roll,setRoll] = useState(false);

  const rolldice = () =>{
    let face1 = dices[Math.floor(Math.random() * dices.length)];
    let face2 = dices[Math.floor(Math.random() * dices.length)];
    setDice1(face1);
    setDice2(face2);
    setRoll(true);
    setTimeout(() => {
      setRoll(false);
    },1000)
  
  }

  return (
    <div className='dice-content'>
      <div className='container'>
        <Die title = "Roll Dice"/>
        <h1>🎲Roll Dice🎲</h1>
          <div className='box'>
              <Die face = {dice1} rolling = {roll}/>
              <Die face = {dice2} rolling = {roll}/>
          </div>
          <button onClick={rolldice}>{roll ? "rolling..." : "Roll Dice!"}</button>
      </div>
    </div>
  )
}
