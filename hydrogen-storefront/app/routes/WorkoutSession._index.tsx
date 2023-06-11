import {useLoaderData, useFetcher} from '@remix-run/react';
import {redirect, type ActionArgs} from '@shopify/remix-oxygen';
import {useEffect, useState} from 'react';
import {workoutRequests} from '~/requests/workouts';

export const loader = async () => {
  const response = await workoutRequests();

  return response;
};

export const action = async ({request}: ActionArgs) => {};

export default function WorkoutSession() {
  const [index, setIndex] = useState(0);
  const {workouts}: any = useLoaderData<typeof loader>();
  const [data, setData] = useState<any[]>(workouts);

  return (
    <>
      <header className="bg-purple-800 py-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-white text-2xl font-bold pl-5">Welcome</h1>
        </div>
      </header>

      <div className="flex flex-col items-center">
        <section className="flex flex-row">
          {data?.map((e) => {
            return (
              <div
                key={e.id}
                className="max-w-xs min-w-min ml-1 mt-1 p-2 border rounded-sm shadow-gray-100"
              >
                <h3 className="text-xl font-bold text-gray-900">
                  {e.workout_name}
                </h3>
                <h4 className='text-lg font-bold text-gray-900"'>
                  {e.workout_type}
                </h4>
                <p className="text-sm text-gray-600">{e.how_to_perform}</p>
              </div>
            );
          })}
        </section>
        <button className=" text-white bg-purple-800 font-medium rounded-lg text-sm px-5 py-3.5 mt-2 text-center">
          Finish workout
        </button>
      </div>

      {/* <button onClick={nextExercise}>next exercise</button> */}
    </>
  );
}
