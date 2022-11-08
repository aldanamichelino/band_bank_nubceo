import React, { useCallback, useState, useContext } from 'react';
import { UserAuthContext, UserAuthProps } from '../../contexts/UserAuthContext';

export const Login = () => {
  const { login, error, errorMessage } = useContext<UserAuthProps>(UserAuthContext);

  const [values, setValues] = useState({
    email: '',
    password: ''
  });

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
  }, [values]);

  const handleSubmit = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    login(values.email, values.password);
  };

  return (
    <section className="h-screen">
      <div className="px-6 h-full text-gray-800">
        <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
          <div className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
            <img
              src="https://amtshows.com/wp-content/uploads/2014/01/bands-on-the-rise-silhouette-of-rock-band-on-stage.jpg"
              className="w-full"
              alt="Bands"
            />
          </div>
          <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
            <h2 className='mb-5 text-gray-700 font-bold'>Log in to Band Bank!</h2>
            <form onSubmit={handleSubmit}>
              { error &&
                <div className='bg-red-500 m-2'>
                  <p className='text-white font-bold'>{errorMessage}</p>
                </div>
              }
              <div className="mb-6">
                <input
                  type="text"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  name="email"
                  placeholder="Email address"
                  value={values.email}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-6">
                <input
                  type="password"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  name="password"
                  placeholder="Password"
                  value={values.password}
                  onChange={handleInputChange}
                />
              </div>

              <div className="text-center lg:text-left">
                <button
                  type="submit"
                  className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
