
import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import swal from 'sweetalert';
import auth from './firebase.init';
import Loading from './Page/Share/Loading';

const RequireAuth = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const location = useLocation();
  const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);


  if (loading) {
    return <Loading></Loading>
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />
  }

  if (!user.emailVerified) {
    return <div style={{ height: '500px' }} className='d-flex justify-content-center align-items-center'>
      <div>
        <h2 className='text-danger'>Your Email is not Verified</h2>
        <h3 className='text-primary'>Please verified your email!! check your Gmail</h3>
        <button className='btn btn-warning'
          onClick={async () => {
            const success = await sendEmailVerification();
            if (success) {
              swal("send verified !", "You click Gmail!", "success");
            }
          }}
        >Click for verified again</button>
      </div>
    
    </div>
  }

  return children;
};

export default RequireAuth;