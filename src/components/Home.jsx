import React from 'react'
import { useNavigate } from 'react-router-dom';


function Home() {
  const navigate = useNavigate();
  return (
    <>
      <div className="bg-amber-50 h-screen flex flex-col items-center justify-center space-y-8">
        {/* Home Navigation Card */}
        <div className="backdrop-blur-md bg-blue-100/70 border border-blue-300 shadow-lg rounded-xl p-6 max-w-2xl w-full flex flex-col items-center">
          <h2 className="text-lg font-semibold mb-2 flex items-center gap-2">🏠 Home</h2>
          <p className="mb-3">Go back to the main Home page.</p>
          <button
            className="px-5 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow transition duration-200"
            onClick={() => navigate('/')}
          >
            Go to Home
          </button>
        </div>
        {/* About Navigation Card */}
        <div className="backdrop-blur-md bg-green-100/70 border border-green-300 shadow-lg rounded-xl p-6 max-w-2xl w-full flex flex-col items-center">
          <h2 className="text-lg font-semibold mb-2 flex items-center gap-2">ℹ️ About</h2>
          <p className="mb-3">Learn more about this portal.</p>
          <button
            className="px-5 py-2 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg shadow transition duration-200"
            onClick={() => navigate('/about')}
          >
            Go to About
          </button>
        </div>
        {/* Registration Navigation Card (already present) */}
        <div className="backdrop-blur-md bg-purple-100 border border-amber-300 shadow-lg rounded-xl p-6 max-w-2xl w-full flex flex-col items-center">
          <h2 className="text-lg font-semibold mb-2 flex items-center gap-2">📝 Registration</h2>
          <p className="mb-3">This section allows you to:</p>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">✔️ <span>See what courses you can register</span></li>
            <li className="flex items-center gap-2">📝 <span>Choose a course to register</span></li>
            <li className="flex items-center gap-2">📋 <span>See your registered courses in a list</span></li>
          </ul>
          <button
            className="mt-6 px-5 py-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-lg shadow transition duration-200"
            onClick={() => navigate('/registration')}
          >
            Go to Registration
          </button>
        </div>
      </div>
    </>
  )
}

export default Home