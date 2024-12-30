import { useState } from 'react';

function AccessAccount() {
    const [isMoved, setIsMoved] = useState(false);
    const [isJobSeeker, setIsJobSeeker] = useState(true);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");

    const handleClick = () => {
        setIsMoved(!isMoved);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className="min-h-screen px-4 sm:px-6 md:px-12 py-12">
            <div className="flex flex-col md:flex-row relative gap-10 w-full h-auto md:h-[85vh] rounded-lg overflow-hidden shadow-xl bg-gradient-to-b from-teal-500 to-teal-700">

                {/* Sign In Section */}
                <div
                    className={`w-full md:w-[50%] h-full px-8 py-12 rounded-lg shadow-lg transition-opacity duration-700
                    ${!isMoved ? "opacity-100" : "opacity-0 pointer-events-none"}`}
                >
                    <div className="w-full h-full flex flex-col gap-6">
                        <h2 className="text-white text-2xl sm:text-3xl font-bold text-center">Sign In</h2>
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <InputField label="Email:" type="email" id="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            <InputField label="Password:" type="password" id="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
                            <button
                                type="submit"
                                className="w-full bg-teal-900 text-white p-4 rounded-lg mt-4 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-300 transition duration-200 ease-in-out"
                            >
                                Sign In
                            </button>
                            <p className="text-white text-center">
                                Not Registered? 
                                <span
                                    onClick={handleClick}
                                    className="font-semibold text-blue-600 cursor-pointer hover:underline ml-2"
                                >
                                    Sign Up
                                </span>
                            </p>
                        </form>
                    </div>
                </div>

                {/* Sign Up Section */}
                <div
                    className={`overflow-y-auto w-full md:w-[50%] h-full px-8 py-12 rounded-lg shadow-lg transition-opacity duration-700 custom-scrollbar
                    ${isMoved ? "opacity-100" : "opacity-0 pointer-events-none"}`}
                >
                    <div className="w-full h-full flex flex-col gap-6">
                        <h2 className="text-white text-2xl sm:text-3xl font-bold text-center">Sign Up</h2>
                        {/* User Type Selection */}
                        <div className="flex justify-center gap-4 mb-6">
                            <button
                                onClick={() => setIsJobSeeker(true)}
                                className={`px-4 py-2 rounded-lg ${isJobSeeker ? 'bg-teal-700' : 'bg-teal-500'} text-white`}
                            >
                                Job Seeker
                            </button>
                            <button
                                onClick={() => setIsJobSeeker(false)}
                                className={`px-4 py-2 rounded-lg ${!isJobSeeker ? 'bg-teal-700' : 'bg-teal-500'} text-white`}
                            >
                                Company
                            </button>
                        </div>

                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <InputField label="Email:" type="email" id="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            {isJobSeeker ? (
                                <InputField label="Username:" type="text" id="username" placeholder="Enter your username" value={name} onChange={(e) => setName(e.target.value)} />
                            ) : (
                                <InputField label="Company Name:" type="text" id="companyName" placeholder="Enter your company name" value={name} onChange={(e) => setName(e.target.value)} />
                            )}
                            <InputField label="Password:" type="password" id="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
                            <button
                                type="submit"
                                className="w-full bg-teal-900 text-white p-4 rounded-lg mt-4 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-300 transition duration-200 ease-in-out"
                            >
                                {isJobSeeker ? 'Register as Job Seeker' : 'Register as Company'}
                            </button>
                            <p className="text-white text-center">
                                Already Registered? 
                                <span
                                    onClick={handleClick}
                                    className="font-semibold text-blue-600 cursor-pointer hover:underline ml-2 pb-8"
                                >
                                    Sign In
                                </span>
                            </p>
                        </form>
                    </div>
                </div>

                {/* Transition Section */}
                <div
                    className={`bg-teal-900 w-full md:w-[40%] h-full absolute top-0 md:right-[40%] transition-transform duration-1000 ease-in-out transform
                    ${isMoved ? "translate-x-[-50%]" : "translate-x-full"}`}
                >
                    <div className="flex items-center justify-center h-full text-white">
                        <p className="text-xl sm:text-2xl">Welcome</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

function InputField({ label, type, id, placeholder, value, onChange }) {
    return (
        <div className="flex flex-col gap-3">
            <label htmlFor={id} className="text-white font-medium">{label}</label>
            <input
                id={id}
                type={type}
                className="p-4 rounded-lg border border-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-300 transition duration-200 ease-in-out text-black"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                required
            />
        </div>
    );
}

export default AccessAccount;