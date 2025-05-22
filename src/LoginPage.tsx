import React, { useState, type FormEvent } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import bhonphul_logo from '../src/assets/bhonphul_logo.png'

// Assuming you have Font Awesome installed, if not, remove the <i> tags or use react-icons
// e.g., import { FaUser, FaUserPlus, FaArrowRight } from 'react-icons/fa';

const LoginPage: React.FC = () => {
  const [isExistingUser, setIsExistingUser] = useState<boolean>(true); // This state will now control the button's *appearance*
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the login logic
    console.log('Username:', username);
    console.log('Password:', password);
    alert('Login functionality not implemented in this demo.');
    // On successful login, you might navigate to a dashboard:
    // navigate('/dashboard');
  };

  // Function to handle switching between Login and Signup pages
  const handleUserTypeSwitch = (type: 'existing' | 'new') => {
    if (type === 'existing') {
      setIsExistingUser(true); // Keep button style active for "Existing User"
      navigate('/login'); // Navigate to the login route
    } else {
      setIsExistingUser(false); // Keep button style active for "New User"
      navigate('/signup'); // Navigate to the signup route
    }
  };


  return (
    <div className="min-h-screen flex items-center justify-center bg-dots-pattern bg-cover p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <div className="flex justify-center mb-6">
          <img src={bhonphul_logo} alt="Logo" className="h-20 w-30 mr-2 rounded-lg" />
          
        </div>

        <h2 className="text-2xl font-bold text-center mb-2 text-gray-800">Welcome Back</h2>
        <p className="text-center text-gray-600 mb-6">Please sign in to continue</p>

        <div className="flex justify-center mb-6 border border-gray-200 rounded-lg overflow-hidden">
          <button
            type="button"
            className={`flex-1 py-2 text-center text-sm font-medium transition-colors duration-300 ${
              isExistingUser // This now only controls the visual state
                ? 'bg-green-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
            onClick={() => handleUserTypeSwitch('existing')} // Use the new handler
          >
            <i className="fas fa-user mr-2"></i> Existing User
          </button>
          <button
            type="button"
            className={`flex-1 py-2 text-center text-sm font-medium transition-colors duration-300 ${
              !isExistingUser // This now only controls the visual state
                ? 'bg-green-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
            onClick={() => handleUserTypeSwitch('new')} // Use the new handler
          >
            <i className="fas fa-user-plus mr-2"></i> New User
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 text-sm font-medium mb-2">
              Username
            </label>
            <input
              type="text"
              id="username"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email or username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 text-sm font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-700 text-white py-3 rounded-md font-semibold text-lg hover:bg-indigo-800 transition-colors duration-300 flex items-center justify-center"
          >
            Sign In <i className="fas fa-arrow-right ml-2"></i>
          </button>
        </form>

        <p className="text-center mt-4 text-gray-600 text-sm">
          Forgot your password?{' '}
          <a href="#" className="text-blue-600 hover:underline">
            Click here
          </a>
        </p>

        <p className="text-center mt-6 text-gray-500 text-xs">
          &copy; 2025 AirMS Technologies <br /> v1.2.0
        </p>
      </div>
    </div>
  );
};

export default LoginPage;