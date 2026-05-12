import React, { useState } from "react";
import cert1 from "../../../assets/images/certificate/Certificate.webp";
import cert2 from "../../../assets/images/certificate/img19-5.jpg";
import cert10 from "../../../assets/images/certificate/img23.jpg";
import cert3 from "../../../assets/images/certificate/img19-2.jpg";
import cert12 from "../../../assets/images/certificate/frontend_developer_react certificate_pages-to-jpg-0001.jpg";
import cert13 from "../../../assets/images/certificate/python_basic certificate_page-0001.jpg";
import cert14 from "../../../assets/images/certificate/software_engineer certificate_page-0001.jpg";
import cert4 from "../../../assets/images/certificate/img19-1.jpg";
import cert5 from "../../../assets/images/certificate/img19-4.jpg";
import cert6 from "../../../assets/images/certificate/img19.jpg";
import cert7 from "../../../assets/images/certificate/img20.jpg";
import cert8 from "../../../assets/images/certificate/img21.jpg";
import cert9 from "../../../assets/images/certificate/img22.jpg";
import cert11 from "../../../assets/images/certificate/img24.jpg";

const certificates = [
  cert1,
  cert2,
  cert10,
  cert11,
  cert12,
  cert13,
  cert14,
  cert3,
  cert4,
  cert5,
  cert6,
  cert7,
  cert8,
  cert9,
];

const Page = ({ image }) => {
  return (
    <div className="w-full max-w-130 transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] active:-translate-y-2 active:scale-[1.02]">
      <div className="rounded-[22px] border border-white/15 bg-linear-to-b from-[#3a3a3a] to-[#111111] p-1 shadow-[0_24px_60px_rgba(0,0,0,0.55)] md:shadow-[0_40px_90px_rgba(0,0,0,0.7)]">
        <div className="overflow-hidden rounded-2xl bg-black">
          <img
            src={image}
            alt="certificate"
            className="block w-full h-auto object-contain"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </div>
  );
};

const Certificate = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleCertificates = showAll ? certificates : certificates.slice(0, 4);

  return (
    <section id="certificate" className="scroll-mt-20 px-2 py-2 text-white">
      <h2 className="mb-10 text-center text-2xl font-semibold underline sm:text-3xl">
        🎓 Certificates
      </h2>

      <div className="mx-auto grid max-w-6xl grid-cols-1 justify-items-center gap-4 sm:grid-cols-2 md:gap-5">
        {visibleCertificates.map((img, index) => (
          <Page key={index} image={img} />
        ))}
      </div>

      {certificates.length > 4 && (
        <div className="mt-10 flex justify-center md:mt-16">
          <button
            onClick={() => setShowAll(!showAll)}
            className="rounded-full bg-linear-to-r from-blue-400 to-cyan-500 px-8 py-3 text-sm font-medium uppercase tracking-widest text-white shadow-lg transition-all duration-300 hover:scale-105 active:scale-105"
          >
            {showAll ? "View Less" : "View More"}
          </button>
        </div>
      )}
    </section>
  );
};

export default Certificate;
