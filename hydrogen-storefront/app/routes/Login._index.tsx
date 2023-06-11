import {redirect, type ActionArgs} from '@shopify/remix-oxygen';
import {loginRequest} from '~/requests/login';

export interface ILoginCredentials {
  username: string | null;
  password: string | null;
}

export const action = async ({request}: ActionArgs) => {
  const form = await request.formData();
  const username = form.get('username');
  const password = form.get('password');
  const response = await loginRequest(username, password);

  if (response.token) {
    return redirect('/workouts');
  }

  return redirect('/login');
};

export default function LoginIndexPage() {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <h1 className="flex items-center mb-6 text-2xl font-semibold text-gray-900">
        Workout Tracker
      </h1>

      <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h2 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
            Sign in to your account
          </h2>

          <form
            action="?index"
            className="space-y-4 md:space-y-6"
            method="post"
          >
            <div>
              <label
                htmlFor="username"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Username
              </label>
              <input
                type="username"
                name="username"
                id="username"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                placeholder="admin"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
              ></input>
            </div>

            <button
              type="submit"
              className="w-full text-white bg-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
            >
              Sign in
            </button>
            <p className="text-sm font-light text-gray-500 ">
              Dont have an account yet?
              <a
                href="/SignUp"
                className="font-medium text-purple-600 hover:underline "
              >
                Sign up
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
