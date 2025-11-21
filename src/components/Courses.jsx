import React, { useState } from 'react'

function Courses() {
  var course = {
    ID: "",
    fullname: "",
    major: "",
    instructor: "",
  };

 const [stds, setStds] = useState([]);

  const [state, setState] = useState(course);

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const remove = (value) => {
    setStds(stds.filter((item) => item.ID !== value));
  };
  return (
  <div className="bg-gray-100 min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          course Management
        </h1>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Add course</h2>
          <form
            className="space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              setStds([...stds, state]);
              setState(course);
              console.log(stds);
            }}
          >
            <div>
              <label
                htmlFor="ID"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                ID
              </label>
              <input
                value={state.ID}
                name="ID"
                type="text"
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label
                htmlFor="fullname"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Full Name
              </label>
              <input
                value={state.fullname}
                name="fullname"
                type="text"
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label
                htmlFor="major"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                major
              </label>
              <input
                value={state.major}
                name="major"
                type="text"
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label
                htmlFor="instructor"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                instructor
              </label>
              <input
                value={state.instructor}
                name="instructor"
                type="text"
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-md transition-colors"
              type="submit"
            >
              Add course
            </button>
          </form>
        </div>

        {stds.length === 0 && (
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            No courses Found
          </h1>
        )}
         <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h3 className="text-lg font-semibold mb-4">courses List</h3>
          <div className="space-y-4">
            {stds.map((item, index) => (
              <ul
                key={index}
                className="list-none border border-gray-200 rounded-md p-4"
              >
                <li className="mb-2">
                  <span className="font-medium">ID:</span> {item.ID}
                </li>
                <li className="mb-2">
                  <span className="font-medium">Name:</span> {item.fullname}
                </li>
                <li className="mb-2">
                  <span className="font-medium">major:</span> {item.major}
                </li>
                <li className="mb-2">
                  <span className="font-medium">instructor:</span> {item.instructor}
                </li>
                <li className="mt-3">
                  <button
                    onClick={() => remove(item.ID)}
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md text-sm transition-colors"
                  >
                    Remove
                  </button>
                </li>
              </ul>
            ))}
          </div>
        </div>

        </div>
        </div>
  )
}

export default Courses