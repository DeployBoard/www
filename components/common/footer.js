export default function Footer() {
  return (
    <footer class="footer pt-4 my-md-4 pt-md-5 border-top">
      <div class="row">
        <div class="col-12 col-md">
          <img class="mb-2" src="https://cdn.deployboard.io/assets/img/rocket/rocket-transparent-256px.png" alt="Logo" width="26" height="32" />
          <small class="d-block mb-3 text-muted">&copy; 2019-2020</small>
        </div>
        <div class="col-6 col-md">
          <h5>Features</h5>
          <ul class="list-unstyled text-small">
            <li><a class="text-muted" href="/features#dashboard">Dashboard</a></li>
            <li><a class="text-muted" href="/features#analytics">Analytics</a></li>
            <li><a class="text-muted" href="/features#audit">Audit</a></li>
            <li><a class="text-muted" href="/features#integrations">integrations</a></li>
          </ul>
        </div>
        <div class="col-6 col-md">
          <h5>Resources</h5>
          <ul class="list-unstyled text-small">
            <li><a class="text-muted" href="/pricing">Pricing</a></li>
            <li><a class="text-muted" href="/docs">Docs</a></li>
            <li><a class="text-muted" href="/docs/getting-started">Getting Started</a></li>
            <li><a class="text-muted" href="/examples">Examples</a></li>
          </ul>
        </div>
        <div class="col-4 col-md">
          <h5>About</h5>
          <ul class="list-unstyled text-small">
            <li><a class="text-muted" href="/about">Team</a></li>
            <li><a class="text-muted" href="/contact">Contact Us</a></li>
            <li><a class="text-muted" href="/privacy">Privacy</a></li>
            <li><a class="text-muted" href="/terms">Terms</a></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
