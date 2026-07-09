export default function DeploymentStatus() {
  return (
    <section className="max-w-6xl mx-auto py-20">

      <div className="grid md:grid-cols-4 gap-6">

        <div className="border rounded-xl p-6">
          Deployments
          <h2>418</h2>
        </div>

        <div className="border rounded-xl p-6">
          Tokens Live
          <h2>391</h2>
        </div>

        <div className="border rounded-xl p-6">
          Success Rate
          <h2>99.4%</h2>
        </div>

        <div className="border rounded-xl p-6">
          Avg Launch Time
          <h2>94 sec</h2>
        </div>

      </div>

    </section>
  );
}
