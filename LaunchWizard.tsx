export default function LaunchWizard() {
  return (
    <section className="max-w-6xl mx-auto py-20">

      <h2 className="text-3xl font-bold mb-8">
        Token Launch Wizard
      </h2>

      <div className="grid md:grid-cols-4 gap-6">

        <div className="border rounded-xl p-6">
          Token Name
        </div>

        <div className="border rounded-xl p-6">
          Supply
        </div>

        <div className="border rounded-xl p-6">
          Parameters
        </div>

        <div className="border rounded-xl p-6">
          Deploy
        </div>

      </div>

    </section>
  );
}
