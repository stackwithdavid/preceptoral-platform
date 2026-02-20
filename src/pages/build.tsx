import Build from "@/assets/build.png";
import Button from "@/components/ui/button";

const build = () => {
  return (
    <div className="flex justify-center items-center flex-col text-secondary">
      <h2 className="text-xl font-semibold ">Why Join?</h2>
      <h3 className="text-primary font-semibold text-xl">
        Build Real-World Skills
      </h3>
      <p>Interactive courses to be taken include:</p>

      <section className="flex gap-4 text-xs">
        <span>
          <h4>
            Creative <br />
            writing
          </h4>
        </span>
        <span>
          <h4>
            The Art & Acts of <br /> Public Speaking{" "}
          </h4>
        </span>
        <span>
          <h4>
            NGO Startups & <br />
            Involvements
          </h4>
        </span>
        <span>
          <h4>
            Health & <br />
            Skills
          </h4>
        </span>
      </section>
      <img src={Build} alt="Build" className="object-cover" />

      <ul className=" text-left mt-4 gap-4 flex flex-col ">
        <li>
          <span className="text-white bg-secondary rounded-full px-2 py-1 mr-2 ">
            ✓
          </span>
          Write creatively and confidently
        </li>
        <li>
          <span className="text-white bg-secondary rounded-full px-2 py-1 mr-2 ">
            ✓
          </span>
          Overcome stage-fright and speak boldly
        </li>
        <li>
          <span className="text-white bg-secondary rounded-full px-2 py-1 mr-2 ">
            ✓
          </span>
          Start or join an NGO for social impact
        </li>
        <li>
          <span className="text-white bg-secondary rounded-full px-2 py-1 mr-2 ">
            ✓
          </span>
          Understand the essence of Health in making wealth
        </li>
      </ul>

      <div className="justify-between flex w-full bottom-10">
        <Button className="left-30 bg-primary text-white">Back</Button>
        <Button className="right-30 bg-primary text-white">Next</Button>
      </div>
    </div>
  );
};

export default build;
