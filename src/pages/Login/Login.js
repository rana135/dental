import React from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import Loading from '../Shared/Loading';
import login from '../../assets/images/reset.png'
import { Link } from 'react-router-dom';


const Login = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
        signInWithEmailAndPassword(data.email, data.password)
    };

    let signInError;
    if (error || gError) {
        signInError = <p className='text-red-500'><small>Error:
            {error?.message || gError?.message}</small></p>
    }
    if (loading || gLoading) {
        return <Loading></Loading>;
    }
    if (user || gUser) {
        console.log(gUser, user);
    }
    return (
        <div className='flex'>
            <div>
                <img className='w-100' src={login} alt="" />
            </div>
            <div className='flex items-center h-screen justify-end mr-12'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="text-center text-2xl text-primary">Sign in</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="email"
                                    placeholder="email"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("email", {

                                        required: {
                                            value: true,
                                            message: "Email is Required"
                                        },
                                        pattern: {
                                            value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                            message: 'Provide a valid Email'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.email?.type === 'required' && <span className="label-text text-red-500">{errors.email.message}</span>}
                                    {errors.email?.type === 'pattern' && <span className="label-text text-red-500">{errors.email.message}</span>}
                                </label>
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    type="password"
                                    placeholder="password"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("password", {

                                        required: {
                                            value: true,
                                            message: "password is Required"
                                        },
                                        minLength: {
                                            value: 6,
                                            message: 'Must be 6 characters or longer'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.password?.type === 'required' && <span className="label-text text-red-500">{errors.password.message}</span>}
                                    {errors.password?.type === 'minLength' && <span className="label-text text-red-500">{errors.password.message}</span>}
                                </label>
                            </div>
                            {signInError}
                            <input type="submit" value='Login' className="btn bg-gradient-to-r from-secondary to-primary text-white font-bold w-full max-w-xs" />
                        </form>
                        <p><small>New to Denta Care? <Link className='text-primary link-hover' to="/signup">Create New Account</Link></small></p>
                        <div className="divider text-primary">OR</div>
                        <button onClick={() => signInWithGoogle()}
                            className="btn btn-outline btn-primary w-full border-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512" class="w-7 h-7"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" /></svg>
                            <p>CONTINUE WITH GOOGLE</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;