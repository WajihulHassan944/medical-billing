// components/CareSection.jsx
import Image from "next/image";
import "./caresection.css";

const careData = [
  {
    title: "Streamlined Medical Billing",
    image: "/assets/about/clinic1.jpg",
    description: `We simplify the complex world of medical billing to ensure your practice gets paid faster with fewer denials and errors.`,
  },
  {
    title: "Customized Healthcare Solutions",
    image: "/assets/about/clinic2.jpg",
    description: `Every practice is different. We tailor our billing and consultancy services to match your unique workflows and specialties.`,
  },
  {
    title: "Compliance & Support You Can Trust",
    image: "/assets/about/clinic3.jpg",
    description: `Stay compliant with the latest medical billing regulations while getting dedicated support for audits, insurance, and patient queries.`,
  },
];

export default function CareSection() {
  return (
    <section className="care-section">
      <h5 className="subtitle-2">Professionals</h5>
      <h2 className="title-2">We Care About You</h2>
      <div className="care-grid">
        {careData.map((item, index) => (
          <div className="care-card" key={index}>
            <div className="image-wrapper">
              <Image
                src={item.image}
                alt={item.title}
                width={400}
                height={250}
                layout="responsive"
              />
            </div>
            <h4>{item.title}</h4>
            <div className="underline"></div>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
