import Logo from "@/assets/Logo.png";
import Button from "../components/ui/button";

const welcome = () => {
  return (
    <div className="items-center justify-center flex flex-col">
      <h2 className="text-2xl font-semibold text-secondary">Welcome to</h2>
      <img src={Logo} alt="Logo" className="h-80" />

      <Button className="absolute bottom-10 right-30 text-white bg-primary">
        Next
      </Button>
    </div>
  );
};

export default welcome;
