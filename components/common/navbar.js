export default function NavBar() {
  return (
    <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 bg-white border-bottom">
      <img src="https://cdn.deployboard.io/assets/img/rocket/rocket-transparent-256px.png" height="40" className="pr-2 pl-2 nav-logo" alt="Logo" />
      <a className="my-0 mr-md-auto font-weight-normal" href="/">
        <h5 className="my-0 mr-md-auto font-weight-normal">DeployBoard</h5>
      </a>
      <nav className="my-2 my-md-0 mr-md-3">
        <a className="p-2 text" href="/">Home</a>
        <a className="p-2 text" href="/pricing">Pricing</a>
        <a className="p-2 text" href="/docs">Docs</a>
        <a className="p-2 text" href="/blog">Blog</a>
      </nav>
      <a className="btn btn-outline-success" href="https://app.deployboard.io">Log In</a>
    </div>
  )
}
