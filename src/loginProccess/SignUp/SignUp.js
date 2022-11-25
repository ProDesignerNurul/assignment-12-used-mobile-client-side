import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const SignUp = () => {

    const { register, handleSubmit } = useForm();
    const [data, setData] = useState('');

    return (
        <div className='flex justify-center items-center w-96 mx-auto'>
            <div className='w-96 p-5'>
                <h2 className='text-3xl text-center'>Sign Up</h2>
                <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>



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
                        <input type="email" {...register("email")} className="input input-bordered w-full " placeholder="Enter Email" />

                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text font-semibold">Your Password</span>
                        </label>
                        <input type="password" {...register("password")} className="input input-bordered w-full " placeholder="Enter Password" />
                        <label className="label">
                            <span className="label-text font-semibold">Forget Password?</span>
                        </label>
                    </div>



                    {/* <p>{data}</p> */}
                    <input className='btn btn-outline w-full mt-5' value="Login" type="submit" />
                </form>
                <p className='text-center mt-2'>Already Have an Account, Please <Link className='text-primary' to="/login">Login</Link></p>

                <div className="divider">OR</div>

                <button className='btn btn-outline w-full'>Continue With Google</button>
            </div>
        </div>
    );
};

export default SignUp;