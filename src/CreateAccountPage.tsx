import React, { useState, type FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import bhonphul_logo from '../src/assets/bhonphul_logo.png'

const CreateAccountPage: React.FC = () => {
  const [isNewUser, setIsNewUser] = useState<boolean>(true);
  const [fullName, setFullName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    console.log('New User Signup:', { fullName, email, password });
    alert('New user registration functionality not implemented in this demo.');
  };

  const handleUserTypeSwitch = (type: 'existing' | 'new') => {
    if (type === 'existing') {
      setIsNewUser(false);
      navigate('/login');
    } else {
      setIsNewUser(true);
      navigate('/signup');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1b0d2d] to-[#2d0f48] p-4 text-gray-800">
      {/* Decreased vertical padding (p-8 to p-6) and adjusted some margins */}
      <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-md">
        <div className="flex justify-center mb-4"> {/* Decreased mb-6 to mb-4 */}
          <img src={bhonphul_logo} alt="Logo" className="h-16 w-auto rounded-lg" /> {/* Decreased h-20 to h-16, w-30 to w-auto */}
        </div>

        <h2 className="text-2xl font-bold text-center mb-2 text-gray-800">Create an Account</h2> {/* Decreased text-3xl to text-2xl */}
        <p className="text-center text-gray-600 mb-4 text-sm">Please fill in the details to get started</p> {/* Decreased mb-6 to mb-4 */}

        <div className="flex justify-center mb-4 border border-gray-200 rounded-lg overflow-hidden"> {/* Decreased mb-6 to mb-4 */}
          <button
            type="button"
            className={`flex-1 py-2 text-center text-sm font-medium transition-colors duration-300 ${
              !isNewUser
                ? 'bg-gray-100 text-gray-700'
                : 'bg-white text-gray-700 hover:bg-gray-50'
            } flex items-center justify-center`}
            onClick={() => handleUserTypeSwitch('existing')}
          >
            <i className="fas fa-user mr-2 text-blue-500"></i> Existing User
          </button>
          <button
            type="button"
            className={`flex-1 py-2 text-center text-sm font-medium transition-colors duration-300 ${
              isNewUser
                ? 'bg-green-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-50'
            } flex items-center justify-center`}
            onClick={() => handleUserTypeSwitch('new')}
          >
            <i className="fas fa-user-plus mr-2"></i> New User
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-3"> {/* Decreased mb-4 to mb-3 */}
            <label htmlFor="fullName" className="block text-gray-700 text-sm font-medium mb-1"> {/* Decreased mb-2 to mb-1 */}
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your full name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>

          <div className="mb-3"> {/* Decreased mb-4 to mb-3 */}
            <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-1"> {/* Decreased mb-2 to mb-1 */}
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-3"> {/* Decreased mb-4 to mb-3 */}
            <label htmlFor="password" className="block text-gray-700 text-sm font-medium mb-1"> {/* Decreased mb-2 to mb-1 */}
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Use 8+ characters with a number and uppercase letter"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <span
                className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                <i className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
              </span>
            </div>
          </div>

          <div className="mb-4"> {/* Decreased mb-6 to mb-4 */}
            <label htmlFor="confirmPassword" className="block text-gray-700 text-sm font-medium mb-1"> {/* Decreased mb-2 to mb-1 */}
              Confirm Password
            </label>
            <div className="relative">
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                id="confirmPassword"
                className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Re-enter your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              <span
                className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer text-gray-500"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                <i className={`fas ${showConfirmPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
              </span>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-700 text-white py-2 rounded-md font-semibold text-lg hover:bg-indigo-800 transition-colors duration-300 flex items-center justify-center" // Decreased py-3 to py-2
          >
            Sign Up <i className="fas fa-arrow-right ml-2"></i>
          </button>
        </form>

        <p className="text-center mt-3 text-gray-600 text-sm"> {/* Decreased mt-4 to mt-3 */}
          Already have an account?{' '}
          <a href="#" className="text-blue-600 hover:underline" onClick={() => navigate('/login')}>
            Sign In
          </a>
        </p>

        <p className="text-center mt-4 text-gray-500 text-xs"> {/* Decreased mt-6 to mt-4 */}
          &copy; 2025 AirMS Technologies <br /> v1.2.4
        </p>
      </div>
    </div>
  );
};

export default CreateAccountPage;