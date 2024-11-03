'use client'
const SignInButton = ({ onClick }) => {
  return (
    <span style={{marginLeft: 20}}>
        <button
        onClick={onClick}
        className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-400 focus:ring-opacity-50"
        >
        Sign In
        </button>
    </span>

  );
};

export default SignInButton;
