import Button from "@/components/ui/button";
import { FaCheck } from "react-icons/fa6";
import Train from "@/assets/train.png";
import Image from "@/assets/image.png";
import Logo from "@/assets/Logo.png";

const TrainingPage = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center px-4 relative"
      style={{ backgroundImage: `url(${Image})` }}
    >
      <img
        src={Logo}
        alt="Logo"
        className="absolute top-10 left-50 w-50 object-contain"
      />

      <div className="w-full max-w-3xl px-12 py-10 text-center">
        <h2 className="text-2xl font-semibold text-secondary mb-3">
          Tuition is <span className="text-primary">Free</span>
        </h2>

        <p className="text-sm leading-relaxed max-w-xl mx-auto mb-6">
          Training is fully sponsored. However a fee of
          <span className="text-primary font-semibold"> ₦2,000</span> will be
          paid as registration commitment.
          <br />
          Secure your spot
          <span className="text-primary font-semibold"> NOW</span>
        </p>

        <img
          src={Train}
          alt="Training"
          className="w-64 mx-auto mb-8 object-contain"
        />

        <ul className="text-left max-w-md mx-auto space-y-4 mb-10">
          {[
            "Certificates on completion",
            "NGO & career recommendations",
            "Special rewards for best participants",
            "You can enroll in one or multiple courses",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="w-6 h-6 flex items-center justify-center bg-secondary text-white rounded-full shrink-0">
                <FaCheck className="w-3 h-3" />
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="flex justify-between">
          <Button className="bg-primary text-white px-6">Back</Button>
          <Button className="bg-primary text-white px-6">Register Now</Button>
        </div>
      </div>
    </div>
  );
};

export default TrainingPage;
