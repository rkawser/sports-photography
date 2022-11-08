import React from 'react';
import { useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth'
import auth from '../../../firebase.init'


const Social = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, gituser, gitloading, giterror] = useSignInWithGithub(auth);
    const [signInWithFacebook, fbuser, fbloading, fberror] = useSignInWithFacebook(auth);

    return (
        <div>
            <div>
                <div className='d-flex d-block  justify-content-center align-items-center'>
                    <dir className='border w-50'></dir>
                    <span>or</span>
                    <dir className='border w-50'></dir>
                </div>

                <div className='d-flex justify-content-around'>
                    <button onClick={() => signInWithGoogle()} className='btn btn-warning'>SignIn Google</button>

                    <button onClick={() => signInWithGithub()} className='btn btn-dark  '>SignIn Github</button>

                    <button onClick={()=>signInWithFacebook()} className='btn btn-info '> SignIn Facebook</button>
                </div>
            </div>
        </div>
    );
};

export default Social;