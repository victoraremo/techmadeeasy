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

const articles = [
  {
    slug: "ttl-tethering-explained",
    title: "Why your hotspot says “Connected, no internet”",
    category: "Networking",
    readTime: "6 min read",
    date: "October 2026",
    excerpt:
      "Your phone has data, but devices on its hotspot get nothing. Behind that is a tiny number called TTL — here's how networks use it to tell a phone apart from the gadgets behind it.",
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

function ArticleCard({article}) {
  return (
    <Link className="article-card" to={`/resources/${article.slug}`}>
      <div className="article-card-top">
        <span>{article.category}</span>
        <span>{article.readTime}</span>
      </div>
      <h3>{article.title}</h3>
      <p>{article.excerpt}</p>
      <div className="article-card-bottom">
        <span>{article.date}</span>
        <span className="card-link">Read guide <ArrowUpRight size={15}/></span>
      </div>
    </Link>
  );
}

function Resources() {
  return <div className="page container">
    <div className="page-topline"><span>Tips & Guides</span><span>{articles.length} {articles.length === 1 ? "guide" : "guides"}</span></div>
    <div className="page-heading compact-heading"><h1>Simple answers<br/><em>to tech problems.</em></h1><p>Tips, fixes and short guides for everyday technology.</p></div>
    <div className="article-grid">
      {articles.map(a => <ArticleCard key={a.slug} article={a}/>)}
    </div>
    <div className="library-note"><span>More guides</span><p>More tips and guides will appear here as they are ready.</p></div>
  </div>;
}

function TtlArticle() {
  return <article className="article container">
    <Link className="back" to="/resources"><ChevronLeft size={15}/> Back to guides</Link>
    <div className="article-head">
      <div className="article-tags"><span>Networking</span><span>6 min read</span><span>October 2026</span></div>
      <h1>Why your hotspot says<br/><em>&ldquo;Connected, no internet&rdquo;</em></h1>
      <p className="article-dek">Your phone has working data. You turn on the hotspot, a laptop or another phone connects &mdash; and gets nothing. Behind that very common problem is a tiny number in every packet called the TTL. Here's what it is and how networks use it.</p>
    </div>

    <div className="article-body">
      <p>If you've ever shared your phone's internet and watched the other device sit on <b>&ldquo;Connected, no internet,&rdquo;</b> you've probably run into one of a few things: a wrong DNS setting, an APN that isn't set up for sharing, or &mdash; the one most people don't know about &mdash; the network telling your devices apart using something called the <b>TTL</b>. This guide explains that last one, because it's the most interesting and the least understood.</p>

      <h2>What a TTL actually is</h2>
      <p>Every piece of data that travels across the internet is broken into small chunks called <b>packets</b>. Each packet carries a little counter in its header: the <b>Time To Live</b> (TTL) on older IPv4, or the <b>Hop Limit</b> on newer IPv6. They do the same job.</p>
      <p>The counter has nothing to do with time, despite the name. It's a safety feature. Every router a packet passes through <b>subtracts 1</b> from it. If the number ever reaches 0, the router throws the packet away. That stops packets from circling the internet forever if something is misconfigured &mdash; a simple loop-killer.</p>
      <p>The useful part for us: every operating system stamps a <b>fixed starting number</b> on the packets it sends. And that number is different per OS:</p>
      <pre className="code"><code>{`Windows         ->  128
Linux / Android ->  64
iOS / macOS     ->  64`}</code></pre>

      <h2>How that becomes a &ldquo;is this tethered?&rdquo; signal</h2>
      <p>When your phone is just browsing on its own, the packets it sends reach the network's first router carrying roughly its starting value &mdash; for an Android or iPhone, around 64.</p>
      <p>Now turn on the hotspot. A laptop connected to it doesn't talk to the network directly &mdash; it talks <i>through</i> your phone. Your phone is now acting as a <b>router</b>, so it does what every router does: it subtracts 1 from the TTL as it passes the laptop's packets along.</p>
      <pre className="code"><code>{`Laptop (Windows)        Phone (sharing)          Network
  TTL = 128   ------->   subtracts 1   ------->   sees 127
                         (one hop)

Phone's own traffic ----------------------------> sees 64`}</code></pre>
      <p>So the network now sees two different starting values coming from one SIM: the phone's own 64, and the laptop's 127. A single phone shouldn't be producing both. That mismatch is a strong hint that a second device is hiding behind the phone.</p>

      <h2>Why a device can show &ldquo;connected&rdquo; but still have no internet</h2>
      <p>&ldquo;Connected&rdquo; only means the Wi-Fi link to the phone worked &mdash; the device got onto the hotspot and received a local address. &ldquo;No internet&rdquo; means the packets it then sent outward were dropped or refused further up the line. If a network is set up to act on the TTL mismatch above, this is exactly the symptom you'd see: the hotspot connects fine, but nothing beyond it loads.</p>
      <p>It's worth stressing that TTL is only <i>one</i> possible cause. Before assuming it, rule out the simpler two:</p>
      <ul>
        <li><b>DNS:</b> on the connected device, try setting DNS manually to <code>8.8.8.8</code> or <code>1.1.1.1</code>. If pages suddenly load, it was DNS.</li>
        <li><b>APN:</b> some providers use a separate access point setting for shared traffic. If it's missing, the phone works but shared traffic dies.</li>
      </ul>

      <h2>The TTL &ldquo;trick&rdquo; you may have seen</h2>
      <p>Because the mismatch is what gives it away, people normalise the starting value so everything looks like it came from the phone. On a Windows laptop that's a single built-in command:</p>
      <pre className="code"><code>{`netsh int ipv4 set global defaultcurhoplimit=65`}</code></pre>
      <p>The logic: the laptop now starts at 65, the phone subtracts 1 as it forwards, and it arrives at 64 &mdash; the same value the phone's own traffic uses. The usual &ldquo;undo&rdquo; just puts it back to the Windows default of 128. It's 65 and not 64 precisely <i>because</i> of that one subtraction on the way through the phone.</p>
      <p>On Linux the same idea lives in a system setting (<code>net.ipv4.ip_default_ttl</code>); on a small OpenWrt-style router it's a firewall rule that forces one flat value on everything leaving it. Different places, same single idea: make every packet leave with the same starting number.</p>

      <h2>Why it mostly doesn't work anymore</h2>
      <p>TTL matching was enough around ten years ago, when it was the main check. Networks have since moved well past it, so normalising TTL today usually closes just one door out of several:</p>
      <ul>
        <li><b>Deep packet inspection</b> reads traffic details &mdash; browser identifiers, update servers, app signatures &mdash; that look nothing like phone traffic, whatever the TTL says.</li>
        <li><b>OS fingerprinting</b> uses subtle differences in how a desktop builds its connections versus a phone.</li>
        <li><b>Usage patterns</b> &mdash; sustained large downloads, desktop-only services, several devices at once &mdash; stand out on their own.</li>
      </ul>
      <p>So the honest takeaway is that TTL is a neat window into how the internet labels traffic, but it's no longer a magic switch. It's genuinely useful as a way to <i>understand</i> what your network sees.</p>

      <h2>A note on fair use</h2>
      <p>Changing a setting on your own device is generally a matter between you and your provider's terms of service, not the law. Where it becomes a real problem is using any method to take data service you haven't paid for, or to interfere with a provider's own systems &mdash; that's the line that turns a settings tweak into something a provider, or a regulator like PURA, can act on. Understanding how the plumbing works is fair game; using it to avoid paying for what you use is not.</p>

      <p className="article-close">That's the whole mechanism. The short version: every packet carries a counter, routers count it down, and the starting number quietly says which kind of device sent it.</p>
    </div>
  </article>;
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

function App() { return <Layout><Routes><Route path="/" element={<Home/>}/><Route path="/apps" element={<AppsPage/>}/><Route path="/apps/gambia-contacts" element={<GambiaContacts/>}/><Route path="/resources" element={<Resources/>}/><Route path="/resources/ttl-tethering-explained" element={<TtlArticle/>}/><Route path="/about" element={<About/>}/><Route path="/connect" element={<Connect/>}/><Route path="*" element={<NotFound/>}/></Routes></Layout>; }

createRoot(document.getElementById("root")).render(<BrowserRouter><App/></BrowserRouter>);
