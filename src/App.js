import React from "react";
import { googleAuth } from './firebase';

const loginWithGoogle = () =>{
	googleAuth()
	.then(user => {
		console.log(user);
	})
	.catch(error => {
		console.log(error);
	})
};
function App() {
    return (
        <div>
			<button onClick={() => {
				loginWithGoogle();
			}}>Login google</button>
        </div>
    );
}
export default App;
