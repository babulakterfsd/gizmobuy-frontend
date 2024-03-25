import { useLoginMutation } from '@/redux/api/authApi';
import {
  setUserInLocalState,
  useCurrentToken,
  useCurrentUser,
} from '@/redux/features/authSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import { FieldValues, useForm } from 'react-hook-form';
import { IoEyeOffOutline, IoEyeOutline } from 'react-icons/io5';
import { toast } from 'sonner';

import ScrollToTop from '@/components/ui/ToTop';
import { TCurrentUser } from '@/types/commonTypes';
import { useEffect, useState } from 'react';
import { FaGoogle, FaSignInAlt } from 'react-icons/fa';
import { RxCross2 } from 'react-icons/rx';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [showForgotPasswordModal, setShowForgotPasswordModal] = useState(false);
  const [forgetPasswordEmail, setForgetPasswordEmail] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const { register, handleSubmit } = useForm();
  const [login] = useLoginMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const token = useAppSelector(useCurrentToken);
  const currentUser = useAppSelector(useCurrentUser) as TCurrentUser;

  const handleGoogleLogin = () => {
    toast.error('Login with Google is not implemented yet', {
      position: 'top-right',
      icon: '😢',
      duration: 1500,
    });
  };

  const handleForgotPassword = async (e: any) => {
    e.preventDefault();
    if (!forgetPasswordEmail) {
      toast.error('Email is required', {
        position: 'top-right',
        icon: '😢',
        duration: 1500,
      });
      return;
    } else if (
      forgetPasswordEmail === 'babulakterfsd@gmail.com' ||
      forgetPasswordEmail === 'xpawal@gmail.com' ||
      forgetPasswordEmail === 'belayet@gmail.com'
    ) {
      toast.error('You can not reset demo accounts password', {
        position: 'top-right',
        icon: '😢',
        duration: 1500,
      });
      return;
    } else {
      const response = await fetch(
        'http://localhost:5000/api/auth/forgot-password',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ userEmail: forgetPasswordEmail }),
        }
      );
      const data = await response.json();
      if (data?.statusCode === 200 && data?.success === true) {
        toast.success(data.message, {
          position: 'top-right',
          icon: '👏',
          duration: 1500,
        });
        setShowForgotPasswordModal(false);
      } else {
        toast.error(data?.message, {
          position: 'top-right',
          icon: '😢',
          duration: 1500,
        });
      }
    }
  };

  useEffect(() => {
    fetch('http://localhost:5000/api/auth/verify-token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ token }),
    })
      .then((res) => res.json())
      .then((data: any) => {
        if (data?.data !== true) {
          dispatch(setUserInLocalState({ user: null, token: null }));
        } else {
          navigate(`/dashboard/${currentUser?.role}/overview`);
        }
      });
  }, [token, navigate, dispatch]);

  const handleLogin = async (loginData: FieldValues) => {
    if (!loginData?.email || !loginData?.password) {
      toast.error('Email or Password is missing', {
        position: 'top-right',
        icon: '😢',
        duration: 1500,
      });
    } else {
      const response = await login(loginData).unwrap();

      const userFromDB = response?.data?.user;
      const accessToken = response?.data?.token;

      if (userFromDB && accessToken) {
        toast.success('Login Successful', {
          position: 'top-right',
          icon: '👏',
          duration: 1500,
        });
        dispatch(
          setUserInLocalState({
            user: userFromDB,
            token: accessToken,
          })
        );
        setTimeout(() => {
          navigate(`/dashboard/${userFromDB?.role}/overview`);
        }, 500);
      }
    }
  };

  const toggleShowingPassword = () => {
    const passwordInput = document.getElementById(
      'password'
    ) as HTMLInputElement;
    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      setIsPasswordVisible(true);
    } else {
      passwordInput.type = 'password';
      setIsPasswordVisible(false);
    }
  };

  return (
    <>
      <ScrollToTop />
      <div className="main-container flex justify-center items-center min-h-screen">
        <div className="shadow-lg pb-8 w-10/12 md:6/12 lg:w-4/12">
          <div className="shadow py-3">
            <h3 className="text-custom-black text-xl font-bold ml-8">
              Sign In
            </h3>
          </div>
          <div className="h-[2px] w-3/5 mb-6 bg-orange"></div>
          <div className="px-8">
            <form
              className="space-y-4 md:space-y-6"
              onSubmit={handleSubmit(handleLogin)}
            >
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500  focus:outline-none"
                  placeholder="name@company.com"
                  {...register('email')}
                />
              </div>
              <div className="relative">
                <div className="flex justify-between items-center">
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <p
                    className="text-sm cursor-pointer text-orange-400"
                    onClick={() =>
                      setShowForgotPasswordModal(!showForgotPasswordModal)
                    }
                  >
                    Forgot Password?
                  </p>
                </div>
                <input
                  type="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5   focus:outline-none"
                  {...register('password')}
                />
                <span
                  className="absolute cursor-pointer top-10 right-3"
                  onClick={toggleShowingPassword}
                >
                  {isPasswordVisible ? <IoEyeOutline /> : <IoEyeOffOutline />}
                </span>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-orange font-medium rounded-lg text-sm px-5 py-2.5 text-center flex justify-center space-x-4 items-center"
              >
                <FaSignInAlt />
                <span>Sign In</span>
              </button>
            </form>
            {/* other parts */}
            <div className="flex items-center justify-between mt-5">
              <div className="h-[.5px] w-3/5 mb-6 bg-orange"></div>
              <span className="-mt-6 mx-3 text-offgray">or</span>
              <div className="h-[.5px] w-3/5 mb-6 bg-orange"></div>
            </div>
            {/* google sign in button */}
            <div
              className="w-full py-2 border border-orange-400 flex justify-center space-x-4 items-center hover:cursor-pointer hover:bg-orange-400 text-offgray hover:text-white"
              onClick={handleGoogleLogin}
            >
              <span className="text-sm">
                <FaGoogle />
              </span>
              <span className="ml-2 text-sm">Sign in with Google</span>
            </div>

            {/* not registered */}
            <div className="flex items-center justify-between mt-12">
              <p className="text-sm text-offgray">Not Registered Yet?</p>
              <Link to="/signup">
                <span className="text-sm hover:text-orange-400 hover:transition-all duration-300 underline text-offgray">
                  Go to Signup
                </span>
              </Link>
            </div>
          </div>
        </div>
        {/* forgot password modal */}
        <div>
          {showForgotPasswordModal ? (
            <>
              <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none "
                data-aos="zoom-in"
                data-aos-duration="500"
              >
                <div className="relative w-[370px] lg:w-[640px] my-6 mx-auto">
                  {/*content*/}
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {/*header*/}
                    <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                      <h3 className="text-lg ml-4 font-bold text-center">
                        Reset Password
                      </h3>
                      <button
                        className="text-2xl text-orange hover:text-orange-400 hover:transition-all duration-300 ease-in-out"
                        onClick={() => setShowForgotPasswordModal(false)}
                      >
                        <RxCross2 />
                      </button>
                    </div>
                    {/*body*/}
                    <form className="py-6 px-10">
                      <div className="grid gap-4 grid-cols-1 sm:gap-x-6 sm:gap-y-4">
                        {/*  email */}
                        <div className="w-full">
                          <label
                            htmlFor="email"
                            className="block mb-2 text-sm font-medium text-offgray"
                          >
                            Email Address
                          </label>

                          <input
                            type="email"
                            name="email"
                            id="email"
                            className="text-sm rounded-lg block w-full p-2.5 bg-gray-50 border-gray-600  focus:outline-none"
                            placeholder="e.g. babulakterfsd@gmail.com"
                            required
                            onChange={(e) =>
                              setForgetPasswordEmail(e.target.value)
                            }
                          />
                        </div>
                      </div>
                      <button
                        type="submit"
                        className="bg-orange rounded-md px-4 py-2 cursor-pointer text-white hover:bg-orange-400 transition-colors duration-300 ease-in-out flex items-center space-x-2 mt-6 ml-auto disabled:cursor-not-allowed disabled:bg-gray-300"
                        onClick={(e) => handleForgotPassword(e)}
                      >
                        Send Reset Link
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-custom-black transition-all duration-300"></div>
            </>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Login;
