import Learnimg from "@/assets/learn.png";
import Logo from "@/assets/Logo.png";
import Button from "@/components/ui/button";
import { useNavigate } from "react-router";

const LearnPage = () => {
  const navigate = useNavigate();

  const goToWelcome = () => {
    navigate("/");
  };

  const goToBuild = () => {
    navigate("/build");
  };

  return (
    <div className="h-screen text-secondary items-center justify-center text-center flex flex-col gap-4">
      <img
        src={Logo}
        alt="Logo"
        className="absolute top-10 left-50 w-50 object-cover"
      />

      <h2 className="text-xl font-semibold ">
        Learn.Grow.Make <span className="text-primary">Impact</span>
      </h2>
      <p>
        A one-month online training for purpose-driven <br />
        individuals to gain practical skills, confidence and <br />
        direction.
      </p>
      <img src={Learnimg} alt="Learnimg" className="" />

      <div className="relative justify-between flex w-full bottom-10">
        <Button
          onClick={goToWelcome}
          className="absolute left-30 bg-primary hover:bg-primary/90 text-white"
        >
          Back
        </Button>
        <Button
          onClick={goToBuild}
          className="absolute right-30 bg-primary hover:bg-primary/90 text-white"
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default LearnPage;
