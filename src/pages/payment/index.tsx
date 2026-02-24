import Logo from "@/assets/Logo.png";
import Payment from "@/assets/payment.png";
import Button from "@/components/ui/button";
import { useNavigate } from "react-router";

const index = () => {
  const navigate = useNavigate();
  const goToCompletereg = () => {
    navigate("/completereg");
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center ">
      <img
        src={Logo}
        alt="Logo"
        className="absolute top-10 left-50 w-50 object-cover"
      />

      <div className="flex justify-between items-center max-w-4xl mb-10">
        <div className=" text-secondary gap-2 flex flex-col">
          <h2 className="font-semibold text-xl ">Complete your Registration</h2>

          <p className="font-semibold">
            Make the <span className="text-primary ">₦2,000</span> registration
            commitment to <br />
            secure your slot now.
          </p>

          <span className="flex flex-col border bg-secondary text-white rounded-md gap-4 w-[350px] mb-2">
            <div className=" px-4 py-2">
              <div className="flex justify-between">
                <p>Account Number</p>
                <p className="bg-primary rounded-md px-2">0124567890</p>
              </div>
              <div className="flex justify-between">
                <p>Amount</p>
                <p>₦2,000</p>
              </div>
            </div>
            <div className="flex justify-between px-4 py-2 bg-primary rounded-md">
              <p>Account Name</p>
              <span>The Preceptoral Platform</span>
            </div>
          </span>

          <p>Please make a transfer and upload the reciept below.</p>
        </div>

        <img
          src={Payment}
          alt="Payment"
          className="object-contain w-100 h-120"
        />
      </div>

      <section className="relative text-secondary border border-dotted rounded-md py-2 px-42 border-secondary text-center">
        <p className="font-semibold text-xl">Upload Reciept</p>
        <p>Attach a screenshot or photo of your payment reciept</p>
        <Button className="absolute center bg-primary text-white">
          Browse File
        </Button>
      </section>

      <p className="text-center py-4 ">
        Accepted file formats: JPG, PNG, PDF, Max size, 5mb
      </p>

      <Button
        onClick={goToCompletereg}
        className="text-white bg-primary hover:bg-primary/90"
      >
        Complete Registration
      </Button>
    </div>
  );
};

export default index;
