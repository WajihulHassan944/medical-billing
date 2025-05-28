import Image from "next/image";
import "./MedicalFeatures.css";

const MedicalFeatures = () => {
  return (
    <section className="medical-features">
      <div className="container">
        <h2 className="main-title">Reliable Medical Billing & Coding for Modern Healthcare</h2>
        <p className="subtitle">
          CareWatch provides end-to-end revenue cycle solutions designed to optimize reimbursements and reduce billing errors for healthcare practices nationwide.
        </p>

        <div className="feature-grid">
          <div className="feature-card">
            <Image
              src="/assets/home/medical-services/one.png"
              width={50}
              height={50}
              alt="Medical Billing and Coding Services"
              className="feature-card-img-home"
            />
            <h3>Billing & Coding Precision</h3>
            <p>
              Maximize your revenue with our certified billing and coding experts who ensure error-free claims and faster reimbursements.
            </p>
          </div>

          <div className="feature-card">
            <Image
              src="/assets/home/medical-services/two.png"
              width={50}
              height={50}
              alt="24/7 Medical Billing Support"
              className="feature-card-img-home"
            />
            <h3>24/7 Billing Support</h3>
            <p>
              Our dedicated support team is available round-the-clock to resolve claim issues, answer queries, and support your staff.
            </p>
          </div>

          <div className="feature-card">
            <Image
              src="/assets/home/medical-services/three.png"
              width={50}
              height={50}
              alt="Revenue Cycle Management"
              className="feature-card-img-home"
            />
            <h3>Revenue Cycle Experts</h3>
            <p>
              Streamline your practice’s financial health with advanced RCM strategies and denial management systems.
            </p>
          </div>

          <div className="feature-card">
            <Image
              src="/assets/home/medical-services/four.png"
              width={50}
              height={50}
              alt="Credentialing and Contracting"
              className="feature-card-img-home"
            />
            <h3>Credentialing Solutions</h3>
            <p>
              We handle provider enrollment, insurance credentialing, and contract negotiations to simplify onboarding and ensure faster payouts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MedicalFeatures;
