import logo from '../assets/images/logo/logoErlas.png'

const Loading = () => (
  <div className="flex flex-col justify-center items-center h-screen bg-white">
    <img src={logo} alt="Logo" className="w-32 h-32 mb-4" />
    <div className="flex space-x-2">
      <div className="w-2.5 h-2.5 bg-gray-800 rounded-full animate-bounce"></div>
      <div className="w-2.5 h-2.5 bg-gray-800 rounded-full animate-bounce delay-150"></div>
      <div className="w-2.5 h-2.5 bg-gray-800 rounded-full animate-bounce delay-300"></div>
    </div>
  </div>
);

export default Loading;