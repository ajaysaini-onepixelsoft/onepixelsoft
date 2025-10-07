import React from 'react'

export default function OurServiceFrom() {
    return (
        <div className="w-full">
            <form action="#" className="flex flex-col gap-5">
                
                <div className="text-center mb-2">
                    <h2 className="text-2xl font-semibold text-gray-900">Request a Callback</h2>
                    <p className="text-gray-600 text-sm">We respond promptly, typically within 30 minutes</p>
                </div>

                <input
                    id="name"
                    type="text"
                    placeholder="Enter your name here"
                    className="border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#731212]/40 focus:border-[#731212] transition font-medium"
                />

                <div className="flex gap-4">
                    <input
                        id="email"
                        type="text"
                        placeholder="Enter your email address"
                        className="border border-gray-200 rounded-lg px-4 py-3 w-1/2 focus:outline-none focus:ring-2 focus:ring-[#731212]/40 focus:border-[#731212] transition font-medium"
                    />
                    <input
                        id="number"
                        type="text"
                        placeholder="Enter your phone number"
                        className="border border-gray-200 rounded-lg px-4 py-3 w-1/2 focus:outline-none focus:ring-2 focus:ring-[#731212]/40 focus:border-[#731212] transition font-medium"
                    />
                </div>

                <input
                    id="company-name"
                    type="text"
                    placeholder="Enter your company name here"
                    className="border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#731212]/40 focus:border-[#731212] transition font-medium"
                />

                <textarea
                    name="massage"
                    id="massage"
                    placeholder="Enter your message here"
                    className="border border-gray-200 rounded-lg px-4 py-3 h-28 resize-none focus:outline-none focus:ring-2 focus:ring-[#731212]/40 focus:border-[#731212] transition font-medium"
                    defaultValue={""}
                />

                <button
                    type="submit"
                    className="inline-flex items-center justify-center bg-[#731212] hover:bg-[#5a0f0f] text-white px-6 py-3 rounded-lg mt-2 transition duration-300 font-medium shadow-md hover:shadow-lg"
                >
                    Send us Message
                    <i className="ri-arrow-right-line text-lg ml-2"></i>
                </button>
            </form>
        </div>
    )
}
