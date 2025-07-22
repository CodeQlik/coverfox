import React from "react";

const ContactHelp = () => (
  <section className="w-full bg-white py-20 flex flex-col items-center">
    <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between px-4 gap-8">
      {/* Left Side */}
      <div className="flex-1 flex flex-col items-start justify-center max-w-xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#23235F] mb-2">Have a question?<br />Here to help.</h2>
        <div className="h-1 w-16 bg-blue-600 rounded mb-6" />
        <p className="text-gray-600 mb-8">Our friendly customer support team is your extended family. Speak your heart out. They listen with undivided attention to resolve your concerns. Give us a call, request a callback or drop us an email, we’re here to help.</p>
        <div className="flex flex-col gap-4 w-full">
          <div className="flex items-center gap-4 bg-white border border-gray-300 rounded-xl px-6 py-4 w-full max-w-md">
            <span className="text-blue-600">
              <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path d="M2.01 6.51L12 13l9.99-6.49A2 2 0 0020 4H4a2 2 0 00-1.99 2.51z" fill="#1976D2"/><path d="M22 8.98l-10 6.5-10-6.5V18a2 2 0 002 2h16a2 2 0 002-2V8.98z" fill="#E3F2FD"/></svg>
            </span>
            <div>
              <div className="text-gray-500 text-sm">General Enquiries</div>
              <div className="font-bold text-[#23235F] text-lg">care@CoverFox.com</div>
            </div>
          </div>
          <div className="flex items-center gap-4 bg-white border border-gray-300 rounded-xl px-6 py-4 w-full max-w-md">
            <span className="text-blue-600">
              <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#E3F2FD"/><path d="M8 15h8M12 7v8" stroke="#1976D2" strokeWidth="2" strokeLinecap="round"/></svg>
            </span>
            <div>
              <div className="text-gray-500 text-sm">Customer Sales Enquiries</div>
              <div className="font-bold text-[#23235F] text-lg">1800 - 208 - 8787</div>
            </div>
          </div>
        </div>
      </div>
      {/* Right Side */}
      <div className="flex-1 flex items-center justify-center">
        <img src="https://assets.coverfox.com/static/coverfox-support-illustration.png" alt="Support illustration" className="max-w-md w-full h-auto" />
      </div>
    </div>
  </section>
);

export default ContactHelp; 