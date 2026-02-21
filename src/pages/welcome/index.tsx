import Logo from "@/assets/Logo.png";
import Button from "@/components/ui/button";

const WelcomePage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center relative">
      <div className="items-center flex flex-col">
        <h2 className="text-2xl font-bold text-secondary -mb-20 pr-10">
          Welcome to
        </h2>
        <img src={Logo} alt="Logo" className="h-80" />
      </div>
      <div>
        <Button className="absolute bottom-10 right-30 text-white bg-primary">
          Next
        </Button>
      </div>
    </div>
  );
};

export default WelcomePage;
