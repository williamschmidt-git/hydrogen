// import {useActionData} from '@remix-run/react';
// import {redirect, type ActionArgs} from '@shopify/remix-oxygen';
// import {ChangeEvent, FormEvent, SyntheticEvent, useState} from 'react';
// import {loginRequest} from '~/requests/login';

export default function WorkoutIndexPage() {
  return (
    <>
      <header className="bg-purple-800 py-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-white text-2xl font-bold">Welcome</h1>
        </div>
      </header>
      <div className="flex justify-center items-center h-screen">
        <div className="w-40 h-64 bg-white rounded-lg border-2 border-gray-300 flex items-center justify-center">
          <button className="px-4 py-2 bg-purple-500 text-white rounded-md flex ">
            Start
          </button>
        </div>
      </div>
    </>
  );
}
