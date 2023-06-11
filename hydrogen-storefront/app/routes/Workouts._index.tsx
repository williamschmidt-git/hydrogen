import {useNavigate} from '@remix-run/react';

export default function WorkoutIndexPage() {
  const navigate = useNavigate();

  return (
    <>
      <header className="bg-purple-800 py-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-white text-2xl font-bold pl-5">Welcome</h1>
        </div>
      </header>
      <div className="flex justify-center items-center h-screen">
        <div className="w-80 h-96 bg-white rounded-lg border-2 border-gray-300 flex flex-col items-center justify-center space-y-9">
          <h2 className="text-gray-900 font-bold text-xl">Ready?</h2>
          <button
            className="px-14 py-4 bg-purple-500 text-white text-lg rounded-md"
            type="button"
            onClick={() => navigate('/workoutSession')}
          >
            Start Routine
          </button>
        </div>
      </div>
    </>
  );
}
