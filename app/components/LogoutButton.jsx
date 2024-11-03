"use client";

const LogoutButton = ({ onLogout }) => {
  return (
    <span style={{marginLeft: 20}}>
        <button
        onClick={onLogout}
        className="px-6 py-2 text-white bg-red-600 hover:bg-red-700 font-semibold rounded-md shadow-md transition duration-200 ease-in-out transform hover:scale-105"
        >
        Logout
        </button>
    </span>

  );
};

export default LogoutButton;
