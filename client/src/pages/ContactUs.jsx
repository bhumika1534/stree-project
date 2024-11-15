import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";

const defaultContactFormData = {
    userName: "",
    email: "",
    message: ""
};

function ContactUs() {
    const [contact, setContact] = useState(defaultContactFormData);
    const [userData, setUserData] = useState(true);
    const { user } = useAuth();
    const navigate = useNavigate(); // Initialize the navigate function

    useEffect(() => {
        if (user && userData) {
            setContact({
                userName: user.userName,
                email: user.email,
                message: "",
            });
            setUserData(false);
        }
    }, [user, userData]);

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setContact({
            ...contact,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        alert("Your message has been sent.");
        setContact({ ...contact, message: "" }); // Clear the message field
        navigate("/"); // Redirect to home page
    };

    return (
        <section className="bg-gray-100 py-10 mt-10">
            <div className="max-w-7xl mx-auto px-4">
                <h1 className="text-3xl font-bold text-center text-pink-900 mb-8">Contact Us</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="flex justify-center">
                        <img 
                            src="/ContactUs.png" 
                            alt="We are always ready to help"
                            className="max-w-full h-auto rounded-lg"
                        />
                    </div>

                    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg mx-auto">
                        <div className="mb-4">
                            <label htmlFor="userName" className="block text-sm font-semibold text-gray-700">
                                Username
                            </label>
                            <input
                                type="text"
                                name="userName"
                                id="userName"
                                autoComplete="off"
                                value={contact.userName}
                                onChange={handleInput}
                                required
                                
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                autoComplete="off"
                                value={contact.email}
                                onChange={handleInput}
                                required
                                
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                            />
                        </div>

                        <div className="mb-6">
                            <label htmlFor="message" className="block text-sm font-semibold text-gray-700">
                                Message
                            </label>
                            <textarea
                                name="message"
                                id="message"
                                autoComplete="off"
                                value={contact.message}
                                onChange={handleInput}
                                required
                                rows="5"
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                            ></textarea>
                        </div>

                        <div>
                            <button type="submit" className="w-full py-3 bg-pink-500 text-white font-semibold rounded-lg hover:bg-pink-600 transition duration-300">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default ContactUs;