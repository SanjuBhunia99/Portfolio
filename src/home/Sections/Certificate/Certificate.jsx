import React, { useState } from "react";
import cert1 from "../../../assets/images/certificate/Certificate.webp";
import cert2 from "../../../assets/images/certificate/img19-5.jpg";
import cert10 from "../../../assets/images/certificate/img23.jpg";
import cert3 from "../../../assets/images/certificate/img19-2.jpg";
import cert4 from "../../../assets/images/certificate/img19-1.jpg";
import cert5 from "../../../assets/images/certificate/img19-4.jpg";
import cert6 from "../../../assets/images/certificate/img19.jpg";
import cert7 from "../../../assets/images/certificate/img20.jpg";
import cert8 from "../../../assets/images/certificate/img21.jpg";
import cert9 from "../../../assets/images/certificate/img22.jpg";

const Page = ({ image }) => {
  return (
    <div className="relative transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02]">
      <div className="relative bg-linear-to-b from-[#3a3a3a] border-2 rounded-[22px] p-0.5 shadow-[0_40px_90px_rgba(0,0,0,0.7)]">
        <div className="relative rounded-2xl overflow-hidden">
          <img
            src={image}
            alt="certificate"
            className="w-140 h-87.5 object-cover"
          />
        </div>
      </div>
    </div>
  );
};

const certificates = [
  cert1,
  cert2,
  cert10,
  cert3,
  cert4,
  cert5,
  cert6,
  cert7,
  cert8,
  cert9,
];

const Certificate = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleCertificates = showAll ? certificates : certificates.slice(0, 4);

  return (
    <div
      id="certificate"
      className="scroll-mt-20 text-2xl underline font-semibold text-white text-center mb-8"
    >
      🎓 Certificates
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-7 justify-items-center p-9">
        {visibleCertificates.map((img, index) => (
          <Page key={index} image={img} />
        ))}
      </div>
      {certificates.length > 4 && (
        <div className="flex justify-center mt-16">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-8 py-3 text-sm tracking-widest uppercase rounded-full
            bg-linear-to-r from-blue-400 to-cyan-500
            text-white font-medium shadow-lg
            hover:scale-105 transition-all duration-300"
          >
            {showAll ? "View Less" : "View More"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Certificate;
