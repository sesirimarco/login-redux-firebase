import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { signIn } from '../redux/actions';
const Signin = () => {
    
    let isLoading = useSelector(state => state.auth.isLoading);
    const dispatch = useDispatch()
    const signInWithGoogle = () =>{
        dispatch(signIn());
    };
    return (
        <>
            <button onClick={() => { signInWithGoogle() }}>Continue with Google</button>
            {isLoading && <p>Cargando...</p>}
        </>
    );
};

export default Signin;