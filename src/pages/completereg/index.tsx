import Logo from "@/assets/Logo.png";
import Completereg from "@/assets/complete.png";
import Button from "@/components/ui/button";
import { useNavigate } from "react-router";

const index = () => {
  const navigate = useNavigate();
  const goToPayment = () => {
    navigate("/payment");
  };

  return (
    <div className="h-screen w-full items-center justify-center flex flex-col text-center text-secondary">
      <img
        src={Logo}
        alt="Logo"
        className="absolute top-10 left-50 w-50 object-cover"
      />
      <img src={Completereg} alt="Complete Registration" className="" />
      <p>
        Your registration is now being processed. An{" "}
        <span className="text-primary font-semibold">email</span> with all the
        necessary class details <br /> and next steps will arrive in your inbox
        shortly.
      </p>
      <Button
        onClick={goToPayment}
        className="bg-primary hover:bg-primary/90 text-white content-center bottom-10 absolute"
      >
        Close
      </Button>
    </div>
  );
};

export default index;
