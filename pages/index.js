export default function Home() {
  return (
    <div className="container-header home-header pt-4 pb-4">
      <main>
          <h1 className="home-title display-4 pt-4">
            <b>DEPLOYMENT TRACKING</b>
          </h1>

          <h3 className="homeSubHeader pt-4">
            Measure the success of DevOps in your organization.
          </h3>
          <button type="button" class="btn btn-success mt-4">Start Tracking Today</button>
          <p className="pt-2">
            Get up and running in just a few minutes!
          </p>
          <img src="https://cdn.deployboard.io/assets/img/screenshots/deployboard_dashboard.png" className="w-75 img-fluid rounded border border-success" alt="Dashboard Screenshot" />
      </main>
    </div>
  )
}
