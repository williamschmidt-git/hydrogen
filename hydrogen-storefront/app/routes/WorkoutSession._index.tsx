import {useLoaderData, useNavigate} from '@remix-run/react';
import {redirect, type ActionArgs} from '@shopify/remix-oxygen';
import {useEffect, useState} from 'react';
import {workoutRequests} from '~/requests/workouts';

export const loader = async () => {
  const response = await workoutRequests();

  return response;
};

export const action = async () => {
  return redirect('/reps');
};

export default function WorkoutSession() {
  const {workouts}: any = useLoaderData<typeof loader>();
  const [index, setIndex] = useState(0);
  const [data, setData] = useState<any[]>([workouts[index]]);

  const navigate = useNavigate();

  const nextData = () => {
    if (!(index === data.length)) {
      setData([workouts[index + 1]]);
      setIndex(index + 1);
    } else {
      console.log('acabaram os exercícios');
    }
  };

  const backData = () => {
    if (index > 0) {
      setData([workouts[index - 1]]);
      setIndex(index - 1);
    } else {
      console.log('indice menor que zero');
    }
  };

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
                <div className="flex items-center justify-center">
                  <button
                    className="text-white bg-purple-800 font-medium rounded-lg text-sm px-5 py-3.5 mt-2 text-center"
                    onClick={backData}
                  >
                    Back
                  </button>

                  <button
                    className="text-white w-32 bg-purple-800 font-medium rounded-lg text-sm mx-2 px-5 py-3.5 mt-2 text-center p-3"
                    type="button"
                    onClick={() => navigate('/restTimer')}
                  >
                    Rest
                  </button>

                  <button
                    onClick={nextData}
                    className="text-white bg-purple-800 font-medium rounded-lg text-sm px-5 py-3.5 mt-2 text-center p-3"
                  >
                    Next
                  </button>
                </div>
              </div>
            );
          })}
        </section>
        <button className="text-white bg-purple-800 font-medium rounded-lg text-sm px-5 py-3.5 mt-2 text-center">
          Finish workout
        </button>
      </div>

      {/* <button onClick={nextExercise}>next exercise</button> */}
    </>
  );
}
