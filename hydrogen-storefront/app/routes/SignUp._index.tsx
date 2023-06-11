import {redirect, type ActionArgs} from '@shopify/remix-oxygen';
import {createUserRequest} from '~/requests/user';

export const action = async ({request}: ActionArgs) => {
  const form = await request.formData();
  const username = form.get('username');
  const password = form.get('password');

  const response = await createUserRequest(username, password);

  if (response.token) {
    return redirect('/workouts');
  }

  return redirect('/signUp');
};

export default function SignUp() {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <h1 className="flex items-center mb-6 text-2xl font-semibold text-gray-900 ">
        Workout Tracker
      </h1>

      <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h2 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
            Create an account
          </h2>
          <form method="post" className="space-y-4 md:space-y-6">
            <label
              htmlFor="username"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Username:
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
              required
            />

            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
              required
            />

            <button
              type="submit"
              className="w-full text-white bg-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Create account
            </button>
            <p className="text-sm font-light text-gray-500 ">
              Already have an account?
              <a
                href="/Login"
                className="font-medium text-purple-600 hover:underline"
              >
                Login here
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
