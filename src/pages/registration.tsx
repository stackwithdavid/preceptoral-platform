const [form, setForm] = useState({
  name: "",
  email: "",
});

const registration = () => {
  return (
    <div>
      <h2>Registration Form</h2>
      <h4>indicates required question</h4>

      <section>
        <input
          type="text"
          placeholder="Enter your first name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full px-4 py-3 border rounded-lg text-sm mb-10"
        />
      </section>
    </div>
  );
};

export default registration;
function useState(_arg0: { name: string; email: string }): [any, any] {
  throw new Error("Function not implemented.");
}
