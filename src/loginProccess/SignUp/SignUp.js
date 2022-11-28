import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const SignUp = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();
    const { createUser, updateUser, providerLogin } = useContext(AuthContext);
    const [signUpError, setSignUpError] = useState('');
    const navigate = useNavigate();

    const googleProvider = new GoogleAuthProvider()

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => console.error(error))
    };


    const handleSignUp = data => {
        console.log(data);
        setSignUpError('');
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success('User Created Successfully')
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => {
                        saveUser(data.name, data.email);
                    })
                    .catch(err => console.error(err))
            })
            .catch(err => {
                console.error(err)
                setSignUpError(err.message)
            })
    };


    const saveUser = (name, email) => {
        const user = { name, email };
        fetch(`https://used-mobile-server-two.vercel.app/users`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                getUserToken(email);

            })
    };


    const getUserToken = email => {
        fetch(`https://used-mobile-server-two.vercel.app/jwt?email=${email}`)
            .then(res => res.json())
            .then(data => {
                if (data.accessToken) {
                    localStorage.setItem('accessToken', data.accessToken)
                    navigate('/');
                }
            })
    }

    return (
        <div className='flex justify-center items-center w-96 mx-auto'>
            <div className='w-96 p-5'>
                <h2 className='text-3xl text-center'>Sign Up</h2>
                <form onSubmit={handleSubmit(handleSignUp)}>



                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text font-semibold">Your Name</span>
                        </label>
                        <input type="text" {...register("name")} className="input input-bordered w-full " placeholder="Enter Name" />


                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text font-semibold">Your Email</span>
                        </label>
                        <input type="email" {...register("email", { required: "Email Address is required" })} className="input input-bordered w-full " placeholder="Enter Email" />
                        {errors.email && <p className='text-red-500' role="alert">{errors.email?.message}</p>}

                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text font-semibold">Your Password</span>
                        </label>
                        <input type="password" {...register("password", { required: "Password Address is required" })} className="input input-bordered w-full " placeholder="Enter Password" />
                        {errors.password && <p className='text-red-500' role="alert">{errors.password?.message}</p>}
                        <label className="label">
                            <span className="label-text font-semibold">Forget Password?</span>
                        </label>
                    </div>

                    <div className="form-control w-full border border-gray-400 rounded-md px-3 pb-1">
                        <label className="label">
                            <span className="label-text font-semibold">Select Buyer Or Saller</span>
                        </label>
                        <select {...register("category", { required: true })}>
                            {/* <option value="">Select...</option> */}
                            <option value="A" selected>Buyer</option>
                            <option value="B">Saller</option>
                        </select>
                    </div>



                    {/* <p>{data}</p> */}
                    <input className='btn btn-outline w-full mt-5' value="Sign Up" type="submit" />

                    {signUpError && <p className='text-red-500'>{signUpError}</p>}
                </form>
                <p className='text-center mt-2'>Already Have an Account, Please <Link className='text-primary' to="/login">Login</Link></p>

                <div className="divider">OR</div>

                <button onClick={handleGoogleSignIn} className='btn btn-outline w-full'>Continue With Google</button>


            </div>
        </div>
    );
};

export default SignUp;