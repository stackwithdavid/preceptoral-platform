const RegistrationPage = () => {
  return (
    <div className="text-secondary  max-w-2xl mx-auto p-4 ">
      <h2 className="font-semibold text-2xl">Registration Form</h2>
      <h4>indicates required question</h4>
      <section className="text-xl">
        <div>
          <p>First Name</p>
          <input
            type="text"
            placeholder="Enter your first name"
            className="w-full px-4 py-3 border border-gray-400 rounded-lg text-sm mb-4"
          />
        </div>
        <div>
          <p>Middle Name</p>
          <input
            type="text"
            placeholder="Enter your middle name"
            className="w-full px-4 py-3 border border-gray-400 rounded-lg text-sm mb-4"
          />
        </div>
        <div>
          <p>Last Name</p>
          <input
            type="text"
            placeholder="Enter your last name"
            className="w-full px-4 py-3 border border-gray-400 rounded-lg text-sm mb-4"
          />
        </div>
        <div>
          <p>Email Address</p>
          <input
            type="email"
            placeholder="Enter your email address"
            className="w-full px-4 py-3 border border-gray-400 rounded-lg text-sm mb-4"
          />
        </div>
        <div>
          <p>Gender</p>
          <input
            type="text"
            placeholder=""
            className="w-full px-4 py-3 border border-gray-400 rounded-lg text-sm mb-4"
          />
        </div>
        <div>
          <p>Phone number</p>
          <input
            type="text"
            placeholder="Enter your phone number"
            className="w-full px-4 py-3 border border-gray-400 rounded-lg text-sm mb-4"
          />
        </div>
        <div>
          <p>How did you hear about The Preceptoral Platform?</p>
          <input
            type="text"
            placeholder="Type your answer here"
            className="w-full px-4 py-3 border border-gray-400 rounded-lg text-sm mb-4"
          />
        </div>
      </section>
      {/* <Button className="bg-primary text-white">Next</Button> */}
    </div>
  );
};

export default RegistrationPage;
