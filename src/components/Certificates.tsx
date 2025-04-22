import React from 'react';

const certificates = [
  {
    title: "Data Structures and Algoritms Using c++",
    issuer: "Udemy",
    image: "/certificates/user1.png", // place your image in public/certificates
    link: "https://example.com/ethical-hacking-certificate",
  },
  {
    title: "Message Simulation Using c++",
    issuer: "Cipher School",
    image: "/certificates/user2.png",
    link: "https://example.com/network-security-certificate",
  },
  {
    title: "Data Structures using c++",
    issuer: "CipherSchool",
    image: "/certificates/user3.png",
    link: "https://example.com/web-app-security-certificate",
  },
];

const Certificates = () => {
  return (
    <section className="py-10 px-4 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Certificates</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg transition hover:scale-105 hover:shadow-xl duration-300"
            >
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
                <p className="text-sm text-gray-400 mb-4">Issued by {cert.issuer}</p>
                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                  >
                    View Certificate
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
