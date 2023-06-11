import {useEffect, useState} from 'react';
import {useNavigate} from '@remix-run/react';

export default function RestTimer() {
  const [seconds, setSeconds] = useState(90);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds - 1);
    }, 1000);

    if (seconds === 0) {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [seconds]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');

    return `${formattedMinutes}:${formattedSeconds}`;
  };

  return (
    <>
      <header className="bg-purple-800 py-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-white text-2xl font-bold pl-5">Welcome</h1>
        </div>
      </header>

      <div className="flex flex-col items-center justify-items-center">
        <div className="w-64 p-2 border rounded-sm shadow-gray-100 flex items-center justify-center px-6 py-8 mx-auto mt-4">
          <h1 className="text-4xl text-purple-900">{formatTime(seconds)}</h1>
        </div>
        <button
          className="text-white w-32 bg-purple-800 font-medium rounded-lg text-sm mx-2 px-5 py-3.5 mt-2 text-center p-3"
          type="button"
          onClick={() => navigate('/workoutSession')}
        >
          Go to Reps
        </button>
      </div>
    </>
  );
}
