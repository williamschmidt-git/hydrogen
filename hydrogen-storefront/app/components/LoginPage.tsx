// import {ChangeEvent, FormEvent, SyntheticEvent, useState} from 'react';

// export interface ILoginCredentials {
//   username: string | null;
//   password: string | null;
// }

// export default function LoginPage() {
//   const [username, setUserName] = useState<string | null>('');
//   const [password, setPassword] = useState<string | null>('');
//   const [loginCredentials, setLoginCredentials] = useState<ILoginCredentials>({
//     username: '',
//     password: '',
//   });

//   const handleUsernameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setUserName(e.target.value);
//   };

//   const handlePasswordInput = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setPassword(e.target.value);
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();

//     setLoginCredentials({
//       username,
//       password,
//     });
//   };

//   return (
//     <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
//       <h1 className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
//         Workout Tracker
//       </h1>

//       <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
//         <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
//           <h2 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
//             Sign in to your account
//           </h2>

//           <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
//             <div>
//               <label
//                 htmlFor="username"
//                 className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//               >
//                 Username
//               </label>
//               <input
//                 type="username"
//                 name="username"
//                 id="username"
//                 className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500"
//                 placeholder="admin"
//                 onChange={handleUsernameInput}
//               />
//             </div>

//             <div>
//               <label
//                 htmlFor="password"
//                 className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//               >
//                 Password
//               </label>
//               <input
//                 type="password"
//                 name="password"
//                 id="password"
//                 placeholder="••••••••"
//                 className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500"
//                 onChange={handlePasswordInput}
//               ></input>
//             </div>

//             <button
//               type="submit"
//               className="w-full text-white bg-purple-800 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
//             >
//               Sign in
//             </button>
//             <p className="text-sm font-light text-gray-500 dark:text-gray-400">
//               Dont have an account yet?
//               <a
//                 href="#"
//                 className="font-medium text-purple-600 hover:underline dark:text-purple-500"
//               >
//                 Sign up
//               </a>
//             </p>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }
