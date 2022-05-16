import React from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import Loading from '../Shared/Loading';
import login from '../../assets/images/reset.png'


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
        console.log(gUser);
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
                                    placeholder="Type here"
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
                        <div className="divider text-primary">OR</div>
                        <button onClick={() => signInWithGoogle()}
                            className="btn btn-outline btn-primary w-full border-2">CONTINUE WITH GOOGLE</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;