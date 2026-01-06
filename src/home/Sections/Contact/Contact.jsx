// import React, { useState } from "react";
// import { FaPhoneAlt, FaWhatsapp, FaEnvelope } from "react-icons/fa";

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       console.log("Form Data:", formData);

//       setTimeout(() => {
//         alert("Message sent successfully");
//         setFormData({ name: "", email: "", message: "" });
//         setLoading(false);
//       }, 800);

//       // eslint-disable-next-line no-unused-vars
//     } catch (error) {
//       alert("Message failed to send ");
//       setLoading(false);
//     }
//   };

//   return (
//     <div id="contact" className="scroll-mt-20 bg-{#333e53} px-4 py-10 md:px-20">
//       <h1 className="text-2xl font-semibold underline text-white text-center mb-8">
//         📸 Contact Me
//       </h1>

//       <div className="flex justify-center">
//         <div className="w-full max-w-md bg-[#681681bb] p-5 rounded-3xl shadow-2xl">
//           <h2 className="text-lg font-semibold mb-4 text-white text-center">
//             Send me a message
//           </h2>

//           <form onSubmit={handleSubmit} className="space-y-4">
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               placeholder="Your Name"
//               className="w-full px-4 py-3 rounded-lg border bg-white text-black
//            outline-none focus:ring-2 focus:ring-gray-300"
//               required
//             />

//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               placeholder="Email Address"
//               className="w-full px-4 py-3 rounded-lg border bg-white text-black
//            outline-none focus:ring-2 focus:ring-gray-300"
//               required
//             />

//             <textarea
//               rows="4"
//               name="message"
//               value={formData.message}
//               onChange={handleChange}
//               placeholder="How can I help you?"
//               className="w-full px-4 py-3 rounded-lg border bg-white text-black
//               outline-none focus:ring-2 focus:ring-gray-300"
//               required
//             />

//             <button
//               type="submit"
//               disabled={loading}
//               className={`w-full py-3 rounded-full font-semibold cursor-pointer transition
//                 ${
//                   loading
//                     ? "bg-gray-400 cursor-not-allowed"
//                     : "bg-[#5fe407e3] text-white hover:bg-gray-700"
//                 }`}
//             >
//               {loading ? "Sending..." : "Send Message"}
//             </button>
//           </form>
//         </div>
//       </div>

//       <div className="flex justify-around md:justify-center md:gap-16 mt-12">
//         <ContactIcon href="tel:+919775638730" label="Call" color="bg-blue-800">
//           <FaPhoneAlt />
//         </ContactIcon>

//         <ContactIcon
//           href="mailto:sanjubhunia93@outlook.com"
//           label="Email"
//           color="bg-blue-500"
//         >
//           <FaEnvelope />
//         </ContactIcon>

//         <ContactIcon
//           href="https://wa.me/919775638730"
//           label="WhatsApp"
//           color="bg-green-500"
//           external
//         >
//           <FaWhatsapp />
//         </ContactIcon>
//       </div>
//     </div>
//   );
// };

// const ContactIcon = ({ href, label, color, children, external }) => (
//   <a
//     href={href}
//     target={external ? "_blank" : undefined}
//     rel={external ? "noopener noreferrer" : undefined}
//     className="flex flex-col items-center hover:scale-105 transition"
//   >
//     <div
//       className={`w-14 h-14 ${color} rounded-full flex items-center justify-center text-xl text-white`}
//     >
//       {children}
//     </div>
//     <p className="mt-2 text-sm font-medium">{label}</p>
//   </a>
// );

// export default Contact;

import React, { useState } from "react";
import { FaPhoneAlt, FaWhatsapp, FaEnvelope } from "react-icons/fa";
// import emailjs from "@emailjs/browser";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_hxibvxq",
        "template_yd2ty7i",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "J8Fnx2Nd0u2t4D2ne"
      )
      .then(
        () => {
          alert("Message sent successfully");
          setFormData({ name: "", email: "", message: "" });
          setLoading(false);
        },
        (error) => {
          console.error(error);
          alert("Message failed to send");
          setLoading(false);
        }
      );
  };

  return (
    <div id="contact" className="scroll-mt-16 px-4 py-10 md:px-20">
      <h1 className="text-2xl font-semibold underline text-white text-center mb-8">
        📸 Contact Me
      </h1>

      <div className="flex justify-center">
        <div className="w-full max-w-md bg-[#681681bb] p-5 rounded-3xl shadow-2xl">
          <h2 className="text-lg font-semibold mb-4 text-white text-center">
            Send me a message
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-lg border bg-white text-black outline-none focus:ring-2 focus:ring-gray-300"
              required
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="w-full px-4 py-3 rounded-lg border bg-white text-black outline-none focus:ring-2 focus:ring-gray-300"
              required
            />

            <textarea
              rows="4"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="How can I help you?"
              className="w-full px-4 py-3 rounded-lg border bg-white text-black outline-none focus:ring-2 focus:ring-gray-300"
              required
            />

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 rounded-full font-semibold transition ${
                loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-[#5fe407e3] text-white hover:bg-gray-700"
              }`}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>

      <div className="flex justify-around md:justify-center md:gap-16 mt-12">
        <ContactIcon href="tel:+919775638730" label="Call" color="bg-blue-800">
          <FaPhoneAlt />
        </ContactIcon>

        <ContactIcon
          href="mailto:sanjubhunia93@outlook.com"
          label="Email"
          color="bg-blue-500"
        >
          <FaEnvelope />
        </ContactIcon>

        <ContactIcon
          href="https://wa.me/919775638730"
          label="WhatsApp"
          color="bg-green-500"
          external
        >
          <FaWhatsapp />
        </ContactIcon>
      </div>
    </div>
  );
};

const ContactIcon = ({ href, label, color, children, external }) => (
  <a
    href={href}
    target={external ? "_blank" : undefined}
    rel={external ? "noopener noreferrer" : undefined}
    className="flex flex-col items-center hover:scale-105 transition"
  >
    <div
      className={`w-14 h-14 ${color} rounded-full flex items-center justify-center text-xl text-white`}
    >
      {children}
    </div>
    <p className="mt-2 text-sm font-medium text-white">{label}</p>
  </a>
);

export default Contact;
