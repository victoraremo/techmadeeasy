import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Link, NavLink, useLocation } from "react-router-dom";
import { ArrowUpRight, Download, Menu, X, ChevronLeft, Youtube, Music2, Check } from "lucide-react";
import "./styles.css";

const APP_SCREENSHOT = "/gambia-contacts-home.jpeg";

const apps = [
  {
    slug: "gambia-contacts",
    name: "Gambia Contacts",
    category: "Utility",
    platform: "Android",
    status: "Live",
    version: "[Version]",
    downloads: "[Download count]",
    description: "Update supported Gambian contacts to the new 9-digit format.",
  },
];

function Header() {
  const [open, setOpen] = React.useState(false);
  const location = useLocation();
  React.useEffect(() => setOpen(false), [location.pathname]);
  return (
    <header className="header">
      <div className="nav container">
        <Link to="/" className="wordmark">TechMadeEasy</Link>
        <nav className={open ? "nav-links open" : "nav-links"}>
          <NavLink to="/apps">Apps</NavLink>
          <NavLink to="/resources">Tips & Guides</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/connect">Connect</NavLink>
        </nav>
        <Link to="/apps" className="nav-button">Browse apps <ArrowUpRight size={15}/></Link>
        <button className="menu" onClick={() => setOpen(v => !v)} aria-label={open ? "Close menu" : "Open menu"}>
          {open ? <X size={21}/> : <Menu size={21}/>} 
        </button>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-main">
        <div>
          <Link to="/" className="wordmark footer-mark">TechMadeEasy</Link>
          <p>Useful tech. Made easy.</p>
        </div>
        <div className="footer-links">
          <div><b>Explore</b><Link to="/apps">Apps</Link><Link to="/resources">Tips & Guides</Link></div>
          <div><b>More</b><Link to="/about">About</Link><Link to="/connect">Connect</Link></div>
        </div>
      </div>
      <div className="container footer-bottom"><span>© {new Date().getFullYear()} TechMadeEasy</span><span>Useful things, simply made.</span></div>
    </footer>
  );
}

function Layout({children}) { return <><Header/><main>{children}</main><Footer/></>; }

function PrimaryButton({to, children, download=false, light=false}) {
  const inner = <>{children}{download ? <Download size={16}/> : <ArrowUpRight size={16}/>}</>;
  if (to) return <Link to={to} className={`button ${light ? "button-light" : ""}`}>{inner}</Link>;
  return <a href="#download" className={`button ${light ? "button-light" : ""}`}>{inner}</a>;
}

function Status({children="Live"}) { return <span className="status"><i/>{children}</span>; }

function AppCard({app}) {
  return (
    <Link className="app-card" to={`/apps/${app.slug}`}>
      <div className="app-card-media">
        <div className="app-card-device"><img src={APP_SCREENSHOT} alt="Gambia Contacts app screen"/></div>
      </div>
      <div className="app-card-info">
        <div className="card-top"><span>{app.platform} · {app.category}</span><Status/></div>
        <div className="card-content">
          <h3>{app.name}</h3>
          <p>{app.description}</p>
        </div>
        <div className="card-meta"><span>Version {app.version}</span><span>{app.downloads} downloads</span></div>
        <div className="card-bottom"><span className="card-link">View app <ArrowUpRight size={15}/></span></div>
      </div>
    </Link>
  );
}

function Home() {
  return <div className="home">
    <section className="home-hero container">
      <div className="hero-main">
        <p className="hero-kicker">APPS + TIPS & GUIDES</p>
        <h1>Useful tech.<br/><em>Made easy.</em></h1>
        <p className="hero-lead">Useful apps for everyday problems, plus simple tips that help you get more from your tech.</p>
        <div className="hero-actions">
          <PrimaryButton to="/apps">Browse apps</PrimaryButton>
          <Link className="quiet-link" to="/resources">Read tips & guides <ArrowUpRight size={15}/></Link>
        </div>
      </div>
    </section>

    <section className="container section-block apps-block">
      <div className="section-head">
        <div>
          <p className="section-label">Apps</p>
          <h2>Apps</h2>
        </div>
        <Link className="quiet-link" to="/apps">View all <ArrowUpRight size={15}/></Link>
      </div>
      <AppCard app={apps[0]}/>
    </section>

    <section className="tips-strip">
      <div className="container tips-inner">
        <div>
          <p className="section-label">Tips & Guides</p>
          <h2>Need help with something?</h2>
          <p className="tips-copy">Simple guides, fixes and answers for everyday tech.</p>
        </div>
        <Link className="button button-light" to="/resources">See tips & guides <ArrowUpRight size={16}/></Link>
      </div>
    </section>

  </div>;
}

function AppsPage() {
  return <div className="page container">
    <div className="page-topline"><span>Apps</span><span>{apps.length} available</span></div>
    <div className="page-heading compact-heading">
      <h1>Apps you can<br/><em>use right away.</em></h1>
      <p>Browse the apps available from TechMadeEasy.</p>
    </div>
    <div className="library-grid">
      {apps.map(app => <AppCard key={app.slug} app={app}/>)}
    </div>
    <div className="library-note"><span>More apps</span><p>More apps will appear here as they are ready.</p></div>
  </div>;
}

function Screenshot({className=""}) {
  return <div className={`device-stage ${className}`}><div className="device-top"><span/><span/><span/></div><img src={APP_SCREENSHOT} alt="Gambia Contacts app screen"/></div>;
}

function GambiaContacts() {
  const features = [
    ["Find", "Scans your saved contacts for supported Gambian numbers."],
    ["Select", "Choose the contacts you want to update before making changes."],
    ["Update", "Apply the new 9-digit format without editing contacts one by one."],
  ];

  return <div className="product-page container">
    <Link className="back" to="/apps"><ChevronLeft size={15}/> Back to apps</Link>

    <section className="product-hero">
      <div className="product-info">
        <div className="product-label"><Status/> Android · Utility</div>
        <h1>Gambia<br/><em>Contacts</em></h1>
        <p className="lead">Update supported Gambian contacts to the new 9-digit format.</p>
        <div className="product-buttons">
          <PrimaryButton download>Download app</PrimaryButton>
          <span>Official download link: <b>[Add link]</b></span>
        </div>
        <div className="facts">
          <div><span>Platform</span><b>Android</b></div>
          <div><span>Status</span><b>Live</b></div>
          <div><span>Version</span><b>[Version]</b></div>
          <div><span>Downloads</span><b>[Download count]</b></div>
        </div>
      </div>
      <div className="product-visual">
        <Screenshot/>
      </div>
    </section>

    <section className="product-section product-features">
      <div className="product-label">What it does</div>
      <div>
        <h2>Update your contacts in a few steps.</h2>
        <div className="feature-cards">
          {features.map(([title, text], i) => (
            <div className="feature-card" key={title}>
              <span>0{i + 1}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="product-section screenshot-section">
      <div className="product-label">In the app</div>
      <div>
        <h2>See what you're working with.</h2>
        <div className="large-shot"><img src={APP_SCREENSHOT} alt="Gambia Contacts home screen"/></div>
      </div>
    </section>

    <section id="download" className="download-band">
      <div><p className="section-label">Gambia Contacts · Android</p><h2>Get the app.</h2></div>
      <PrimaryButton light download>Download app</PrimaryButton>
    </section>
  </div>;
}

function Resources() {
  return <div className="page container">
    <div className="page-topline"><span>Tips & Guides</span><span>Coming soon</span></div>
    <div className="page-heading compact-heading"><h1>Simple answers<br/><em>to tech problems.</em></h1><p>Tips, fixes and short guides for everyday technology.</p></div>
    <div className="empty"><h2>Nothing here yet.</h2><p>The first tips and guides will be added when they are ready.</p><Link className="quiet-link" to="/apps">Browse apps <ArrowUpRight size={15}/></Link></div>
  </div>;
}

function About() {
  return <div className="page container about">
    <div className="page-topline"><span>About</span></div>
    <div className="page-heading compact-heading"><h1>Tech that is<br/><em>easy to use.</em></h1><p>TechMadeEasy is a place for useful apps and simple tech help.</p></div>
    <div className="about-body"><div className="about-statement">Find it. Understand it. Use it.</div><div className="about-copy"><p>Apps come first. Tips and guides come next. Everything here should be useful and easy to understand.</p><p>No need to make a simple thing sound complicated.</p></div></div>
  </div>;
}

function Connect() {
  return <div className="page container">
    <div className="page-topline"><span>Connect</span></div>
    <div className="page-heading compact-heading"><h1>Follow along.</h1><p>See new apps, demos and tech tips.</p></div>
    <div className="social-grid"><a href="#" onClick={e=>e.preventDefault()}><Youtube size={22}/><div><span>YouTube</span><strong>[Official channel URL]</strong></div><ArrowUpRight size={17}/></a><a href="#" onClick={e=>e.preventDefault()}><Music2 size={22}/><div><span>TikTok</span><strong>[Official profile URL]</strong></div><ArrowUpRight size={17}/></a></div>
  </div>;
}

function NotFound() { return <div className="page container not-found"><div className="page-topline"><span>404</span></div><h1>That page<br/><em>doesn't exist.</em></h1><Link className="button" to="/">Back home <ArrowUpRight size={16}/></Link></div>; }

function App() { return <Layout><Routes><Route path="/" element={<Home/>}/><Route path="/apps" element={<AppsPage/>}/><Route path="/apps/gambia-contacts" element={<GambiaContacts/>}/><Route path="/resources" element={<Resources/>}/><Route path="/about" element={<About/>}/><Route path="/connect" element={<Connect/>}/><Route path="*" element={<NotFound/>}/></Routes></Layout>; }

createRoot(document.getElementById("root")).render(<BrowserRouter><App/></BrowserRouter>);
