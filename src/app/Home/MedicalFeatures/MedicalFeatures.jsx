import Image from "next/image";
import "./MedicalFeatures.css";
const features = [
  {
    img: "/assets/home/medical-services/one.png",
    title: "Rapid Revenue Recovery",
    description:
      "Achieve faster reimbursements with our streamlined processes—most clients see revenue recovery within just 25 days.",
    alt: "Rapid Revenue Recovery",
  },
  {
    img: "/assets/home/medical-services/two.png",
    title: "First-Pass Resolution",
    description:
      "Enjoy a 99% first-pass claim resolution rate, reducing rework and accelerating your cash flow.",
    alt: "First-Pass Resolution",
  },
  {
    img: "/assets/home/medical-services/three.png",
    title: "Denial & Rejection",
    description:
      "Minimize denials and rejections with rates as low as 5%–10%, thanks to our proactive validation and compliance checks.",
    alt: "Denial and Rejection Rates",
  },
  {
    img: "/assets/home/medical-services/four.png",
    title: "Short Turnaround Time",
    description:
      "We process and submit most claims within just 24 hours—ensuring minimal delays in your revenue cycle.",
    alt: "Short Turnaround Time",
  },
  {
    img: "/assets/home/medical-services/one.png",
    title: "Electronic Claim",
    description:
      "95% of claims are submitted electronically for quicker, more accurate reimbursements with fewer manual errors.",
    alt: "Electronic Claim Submission",
  },
  {
    img: "/assets/home/medical-services/two.png",
    title: "Electronic Payment",
    description:
      "Experience the ease of electronic payments—95% of our transactions are processed digitally for efficiency and transparency.",
    alt: "Electronic Payment Processing",
  },
  {
    img: "/assets/home/medical-services/three.png",
    title: "Client Retention",
    description:
      "We’re proud of our 100% client retention rate—built on trust, performance, and consistent results.",
    alt: "Client Retention Rate",
  },
  {
    img: "/assets/home/medical-services/four.png",
    title: "Revenue Increase",
    description:
      "Our clients typically see a 30% increase in revenue through optimized billing workflows and reduced claim denials.",
    alt: "Revenue Increase",
  },
];


const MedicalFeatures = () => {
  return (
    <section className="medical-features">
      <div className="container">
        <h2 className="main-title">
          Why Do Healthcare Professionals Believe in CareWatch Medical Billing Solutions?
        </h2>
        <p className="subtitle">
          CareWatch provides end-to-end revenue cycle solutions designed to optimize reimbursements and reduce billing errors for healthcare practices nationwide.
        </p>

        <div className="feature-grid">
          {features.map((feature, index) => (
            <div className="feature-card" key={index}>
              <Image
                src={feature.img}
                width={50}
                height={50}
                alt={feature.alt}
                className="feature-card-img-home"
              />
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MedicalFeatures;
