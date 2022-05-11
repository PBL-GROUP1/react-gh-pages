import { getAuth, signInWithPopup, GoogleAuthProvider,signOut } from "firebase/auth";
import auth from './firebase_con';
import React from 'react';


const signin = ()=>{
    const provider = new GoogleAuthProvider();
    

    signInWithPopup(auth, provider)
    .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    alert(user.displayName+"  you signed in!");
    
    
    
    // ...
    }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
    });
    
    // <Profile/>;
};
export default signin;

const Signout = ()=>{
    const provider = new GoogleAuthProvider();
    signOut(auth,provider)
     
    .then(()=> {
       console.log('Signout Succesfull')
    }).catch((error) =>{
       console.log('Signout Failed')  
    });

    
};
export { Signout};

// export class Profile extends React.Component {
//     state = {  } 
//     render() { 
//         return (
//             <div className="container mt-4 mb-4 p-3 d-flex justify-content-center">
//             {" "}
//             <div className="card p-4">
//                 {" "}
//                 <div className=" image d-flex flex-column justify-content-center align-items-center">
//                 {" "}
//                 <button className="btn btn-secondary">
//                     {" "}
//                     <img src="https://i.imgur.com/wvxPV9S.png" height={100} width={100} />
//                 </button>{" "}
//                 <span className="name mt-3">{user.displayName}</span>{" "}
//                 <span className="idd">@eleanorpena</span>{" "}
//                 <div className="d-flex flex-row justify-content-center align-items-center gap-2">
//                     {" "}
//                     <span className="idd1">Oxc4c16a645_b21a</span>{" "}
//                     <span>
//                     <i className="fa fa-copy" />
//                     </span>{" "}
//                 </div>{" "}
//                 <div className="d-flex flex-row justify-content-center align-items-center mt-3">
//                     {" "}
//                     <span className="number">
//                     1069 <span className="follow">Followers</span>
//                     </span>{" "}
//                 </div>{" "}
//                 <div className=" d-flex mt-2">
//                     {" "}
//                     <button className="btn1 btn-dark">Edit Profile</button>{" "}
//                 </div>{" "}
//                 <div className="text mt-3">
//                     {" "}
//                     <span>
//                     Eleanor Pena is a creator of minimalistic x bold graphics and digital
//                     artwork.
//                     <br />
//                     <br /> Artist/ Creative Director by Day #NFT minting@ with FND night.{" "}
//                     </span>{" "}
//                 </div>{" "}
//                 <div className="gap-3 mt-3 icons d-flex flex-row justify-content-center align-items-center">
//                     {" "}
//                     <span>
//                     <i className="fa fa-twitter" />
//                     </span>{" "}
//                     <span>
//                     <i className="fa fa-facebook-f" />
//                     </span>{" "}
//                     <span>
//                     <i className="fa fa-instagram" />
//                     </span>{" "}
//                     <span>
//                     <i className="fa fa-linkedin" />
//                     </span>{" "}
//                 </div>{" "}
//                 <div className=" px-2 rounded mt-4 date ">
//                     {" "}
//                     <span className="join">Joined May,2021</span>{" "}
//                 </div>{" "}
//                 </div>{" "}
//             </div>
//             </div>


//         );
//     }
// }
 





