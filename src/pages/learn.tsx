import Learnimg from "@/assets/learn.png";
import Button from "@/components/ui/button";

const learn = () => {
  return (
    <div className="text-secondary items-center justify-center text-center flex flex-col gap-4">
      <h2 className="text-xl font-semibold ">
        Learn.Grow.Make <span className="text-primary">Impact</span>
      </h2>
      <p>
        A one-month online training for purpose-driven <br />
        individuals to gain practical skills, confidence and <br />
        direction.
      </p>
      <img
        src={Learnimg}
        alt="Learnimg"
        className="w-135 h-135 object-contain"
      />
      <div className="justify-between flex w-full bottom-10">
        <Button className="left-30 bg-primary text-white">Back</Button>
        <Button className="right-30 bg-primary text-white">Next</Button>
      </div>
    </div>
  );
};

export default learn;
