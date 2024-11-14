import { Link, Navigate } from "react-router-dom";
import Logo from "../components/Logo";
import { useState } from "react";
import { registerValidation } from "../helpers/validation";
import { register } from "../helpers/auth";
import useAuth from "../helpers/useAuth";
import Spinner from "../components/Spinner";

export default function Register() {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [username, setUsername] = useState("");
  let [role, setRole] = useState("");
  let [errors, setErrors] = useState(null);
  let [isLoading, setIsLoading] = useState(false);


  const { userLoggedIn } = useAuth();


  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const { errors, data } = registerValidation({ username, email, password, role });

    if(errors) {
      setErrors(errors);
      setTimeout(() => setErrors(null),2000);
    } else {
      await register(data);
      resetForm();
    }

    setIsLoading(false);
  }


  const resetForm = () => {
    setEmail('');
    setPassword('');
    setUsername('');
    setRole('');
  }

  return (
    <>
      {userLoggedIn && <Navigate to={'/'} replace={true}/>}
      <div className="flex min-h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Logo className="w-52 mx-auto" />
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Sign up a new account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form action="#" method="POST" className="space-y-6" onSubmit={handleSubmit}>
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70 text-gray-400"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input
                type="text"
                className="grow text-gray-200"
                placeholder="Email Address"
                value={email}
                onInput={(e) => setEmail(e.target.value)}
              />
            </label>
            { errors?.email && <span className="text-sm text-red-500">{errors.email.message}</span>}

            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70 text-gray-400"
              >
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
              </svg>
              <input
                type="text"
                className="grow text-gray-200"
                placeholder="Username"
                value={username}
                onInput={(e) => setUsername(e.target.value)}
              />
            </label>
            { errors?.username && <span className="text-sm text-red-500">{errors.username.message}</span>}

            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70 text-gray-400"
              >
                <path
                  fillRule="evenodd"
                  d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                type="password"
                className="grow text-gray-200"
                placeholder="Password"
                value={password}
                onInput={(e) => setPassword(e.target.value)}
              />
            </label>
            { errors?.password && <span className="text-sm text-red-500">{errors.password.message}</span>}

            <select
              className="w-full select select-bordered text-gray-400"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="" disabled>
                Choose a type
              </option>
              <option value="1">Patience</option>
              <option value="2">Encourge</option>
            </select>
            { errors?.role && <span className="text-sm text-red-500">{errors.role.message}</span>}

            <div>
              <button type="submit" className="w-full btn btn-primary">
                {!isLoading && "Sign Up"}
                {isLoading && <Spinner />}
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm/6 text-gray-500">
            If you already have an account?{" "}
            <Link
              to="/login"
              className="font-semibold text-indigo-600 hover:text-indigo-500"
            >
              Login Here
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
