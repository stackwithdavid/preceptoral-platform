import Button from "@/components/ui/button";

const training = () => {
  return (
    <div className="text-secondary justify-center flex flex-col items-center">
      <div className="text-center font-semibold">
        <h2>
          Tuition is <span className="text-primary">Free</span>
        </h2>
        <p>
          Training is fully sponsored. However a fee of{" "}
          <span className="text-primary">#2,000</span> will be paid as the
          registration commitment. <br />
          Secure your spot <span className="text-primary">NOW</span>
        </p>
      </div>

      <ul className=" text-left mt-4 gap-4 flex flex-col">
        <li>
          <span className="text-white bg-secondary rounded-full px-2 py-1 mr-2 ">
            ✓
          </span>
          Certificates on completion
        </li>
        <li>
          <span className="text-white bg-secondary rounded-full px-2 py-1 mr-2 ">
            ✓
          </span>
          NGO & career recommendations
        </li>
        <li>
          <span className="text-white bg-secondary rounded-full px-2 py-1 mr-2 ">
            ✓
          </span>
          Special rewards for the best participants
        </li>
        <li>
          <span className="text-white bg-secondary rounded-full px-2 py-1 mr-2 ">
            ✓
          </span>
          You can enroll in one or multiple courses
        </li>
      </ul>
      <div className="justify-between flex w-full bottom-10 mt-10">
        <Button className="left-30 bg-primary text-white">Back</Button>

        <Button className="right-30 bg-primary text-white">Register Now</Button>
      </div>
    </div>
  );
};

export default training;
