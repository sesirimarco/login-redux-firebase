import React from 'react';
import { connect, useSelector } from 'react-redux';
import { googleAuth } from '../firebase/firebase';
import { isSigning, signIn} from '../redux/actions'
const SignIn = (isSigning, isLogged, signIn) => {
    
    let isLoading = useSelector(state => state.isLoading);
    const signInWithGoogle = () =>{
        isSigning();    
        googleAuth()
        .then(user => {
            console.log(user);
            signIn(user);
        })
        .catch(error => {
            console.log(error);
        })
    };
    return (
        <>
            <button onClick={() => { signInWithGoogle() }}>Continue with Google</button>
            {isLoading && <p>Cargando...</p>}
        </>
    );
};
export default connect(
    ({isLoading, isLogged}) => ({isLoading, isLogged}),
    {isSigning, signIn}
)(SignIn);