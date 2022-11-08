import React, { useEffect, useState } from 'react';
import { useAuthState, useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth'
import auth from '../../../firebase.init'
import swal from 'sweetalert';

const Social = () => {
    const [signInWithGoogle, Googleuser, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, gituser, gitloading, giterror] = useSignInWithGithub(auth);
    const [signInWithFacebook, fbuser, fbloading, fberror] = useSignInWithFacebook(auth);
    const [user] = useAuthState(auth);
  
    if(error || giterror || fberror){
     return   swal({
            title: `Login Failed !`,
            text: "Something went Wrong",
            icon: "error",
          });
    }

    return (
        <div>
            <div>
                <div className='d-flex d-block  justify-content-center align-items-center'>
                    <dir className='border w-50'></dir>
                    <span>or</span>
                    <dir className='border w-50'></dir>
                </div>

                <div className='d-flex justify-content-around'>
                    <button onClick={() => signInWithGoogle()
                        .then((result) => {
                            swal("Good Job", "Your Login Success!", "success");
                        })
                    }

                        className='btn btn-warning'>SignIn Google</button>

                    <button onClick={() => signInWithGithub()
                        .then(() => {
                            swal("Good Job!", "Login Success!", "success");
                        })
                    }

                        className='btn btn-dark  '>SignIn Github</button>

                    <button onClick={() => signInWithFacebook()
                        .then(() => {
                            swal("Good Job!", "Login Success!", "success");
                        })
                    } className='btn btn-info '> SignIn Facebook</button>
                </div>
            </div>
        </div>
    );
};

export default Social;