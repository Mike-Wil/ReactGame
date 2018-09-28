import React from "react";
import "./FriendCard.css";

const FriendCard = props => (
  <div
    className="card"
    onClick={props.onClick}
    id={props.id}
    alt={props.name}
    style={{
      backgroundImage: `url(${props.image})`,
      backgroundSize: '60%',
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat',
    }}
    // style={{
    //   backgroundImage: props.image ? `url(${props.image}) no-repeat center center` : "none"
    // }}
  >
   {/* <div className="img-container">     
    <img alt={props.name} src={props.image} />
   </div> */}
  </div>
  // <div className="card">
  //   <div className="img-container">
  //     <img alt={props.name} src={props.image} />
  //   </div>
  //   <div className="content">
  //     <ul>
  //       <li>
  //         <strong>Name:</strong> {props.name}
  //       </li>
  //       <li>
  //         <strong>Occupation:</strong> {props.occupation}
  //       </li>
  //       <li>
  //         <strong>Address:</strong> {props.location}
  //       </li>
  //     </ul>
  //   </div>
  //   <span onClick={() => props.removeFriend(props.id)} className="remove">𝘅</span>
  // </div>
);

export default FriendCard;
