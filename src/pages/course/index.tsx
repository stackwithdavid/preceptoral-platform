import Logo from "@/assets/Logo.png";
import Button from "@/components/ui/button";
import { useNavigate } from "react-router";

const course = () => {
  const navigate = useNavigate();
  const goToPayment = () => {
    navigate("/payment");
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen gap-4 text-secondary">
      <img
        src={Logo}
        alt="Logo"
        className="absolute top-10 left-50 w-50 object-cover"
      />

      <div className="">
        <h2 className="font-semibold text-xl">
          Select the Course(s) you want to
          <span className="text-primary "> register</span>
        </h2>
        <p>You can only pick 1 or 2 courses.</p>
      </div>

      <section className="flex sm:flex-row flex-col gap-12 ">
        <span className="border rounded-lg border-gray-400 px-6 py-4">
          <h4 className="pb-4 font-semibold">Creative Writing (CW)</h4>
          <a>
            <li>Introduction to CW</li>
            <li>The Art of Writing Clearly</li>
            <li>Writing Styles and Editing Process</li>
            <li>Types and Branches of Writing</li>
            <li>Structure of a Great Write up</li>
            <li>Evaluation</li>
          </a>
        </span>

        <span className="border border-gray-400 rounded-lg px-6 py-4">
          <h4 className="pb-4 font-semibold">
            The Art & Act of Public Speaking (APPS)
          </h4>
          <a>
            <li>Understanding Speech</li>
            <li>Making ideas Compelling and Memorable</li>
            <li>Illustrating and Delivering your Ideas</li>
            <li>Overcoming the Fear of Public Speaking</li>
            <li>Practice</li>
            <li>Evaluation</li>
          </a>
        </span>

        <span className="border border-gray-400 rounded-lg px-6 py-4">
          <h4 className="pb-4 font-semibold">NGO Startups/Involvement</h4>
          <a>
            <li>Introduction to NGOs</li>
            <li>Registration and Administration</li>
            <li>Management of NGOs</li>
            <li>Funding and Fundraising of NGOs</li>
            <li>Startups and Involvement</li>
            <li>Evaluation</li>
          </a>
        </span>
      </section>

      <Button
        onClick={goToPayment}
        className="text-white bg-primary hover:bg-primary/90 absolute right-30 bottom-10"
      >
        Next
      </Button>
    </div>
  );
};

export default course;
