
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  ArrowRight,
  Sparkles,
  Zap,
  DollarSign,
  Eye,
  BarChart3,
  Radio,
  Brain,
  Signal,
  Headphones,
  Plug,
  Building2,
  Factory,
  Battery,
  Shield,
  FileText,
  BookOpen,
  ExternalLink,
  Download,
  Mail,
} from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative">
      {/* Background Video */}
      <video
        className="fixed inset-0 w-full h-full object-cover z-0"
        src="https://edgecom.ai/wp-content/uploads/2025/06/Untitled-design-1.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Video Overlay */}
      <div className="fixed inset-0 bg-slate-900/60 z-10"></div>

      {/* Background Elements */}
      <div className="fixed inset-0 z-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-3/4 left-1/2 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* All Content */}
      <div className="relative z-30">
        {/* ==================== HERO SECTION ==================== */}
        <section className="h-screen flex flex-col items-center justify-center px-6 text-center">
          <div className="max-w-5xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8 animate-fade-in">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span className="text-sm text-white/90">Vertical EMS</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in">
              NeuraCharge™
            </h1>

            <p className="text-xl lg:text-2xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in delay-200">
              Turn DERs into profit with intelligent, automated Distributed
              Energy Resource Management
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in delay-300">
              <Button
                size="lg"
                className="px-8 py-6 text-lg font-medium group transition-all duration-300 hover:scale-105 shadow-lg text-white border border-[#0966C9] hover:border-[#074a9e]"
                style={{ backgroundColor: "#0966C9" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#074a9e";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#0966C9";
                }}
                onClick={() =>
                  window.open("https://portal.edgecom.ai/", "_blank")
                }
              >
                Access Portal
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </section>

        {/* ==================== TRUSTED BY ==================== */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-white/50 uppercase tracking-widest text-sm mb-10">
              Trusted by Top Companies
            </p>
            <div className="flex flex-wrap justify-center items-center gap-10 opacity-60">
              {[
                "ABB",
                "Johnson Controls",
                "Bell Canada",
                "Stellantis",
                "Sobeys",
                "West Fraser",
                "Rein Hydro",
              ].map((company) => (
                <span
                  key={company}
                  className="text-white/70 text-lg font-semibold tracking-wide"
                >
                  {company}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ==================== BEHIND THE METER ==================== */}
        <section className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-4 py-2 mb-6">
                <Factory className="w-4 h-4 text-cyan-400" />
                <span className="text-sm text-cyan-300">
                  Behind-the-Meter
                </span>
              </div>
              <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4">
                Distributed Energy Resource Management
              </h2>
              <p className="text-xl text-white/60">
                For Industrial Facilities
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Zap className="w-8 h-8 text-cyan-400" />,
                  title: "Power What Matters, Waste Nothing",
                  description:
                    "Optimized energy use with NeuraCharge\u2122 EMS. Easily shift loads to off-peak hours, maximize self-consumption of on-site generation, and reduce costly demand peaks either manually or automatically.",
                },
                {
                  icon: <DollarSign className="w-8 h-8 text-green-400" />,
                  title: "Spend Less, Earn More",
                  description:
                    "NeuraCharge\u2122 automates and optimizes participation in grid programs such as demand response and peak demand shaving. Cut energy costs, achieve sustainability goals, and earn revenue on autopilot.",
                },
                {
                  icon: <Eye className="w-8 h-8 text-purple-400" />,
                  title: "Simplicity, Visibility & Control",
                  description:
                    "NeuraCharge\u2122 offers an intuitive, API-based platform that integrates easily into existing systems without needing extra hardware. Get real-time insights into energy usage, asset performance, and market conditions\u2014all through a single interface with automated or manual dispatch options.",
                },
              ].map((feature) => (
                <Card
                  key={feature.title}
                  className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-[1.02]"
                >
                  <CardHeader>
                    <div className="mb-4">{feature.icon}</div>
                    <CardTitle className="text-white text-xl">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-white/70 leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ==================== FRONT OF METER ==================== */}
        <section className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-4 py-2 mb-6">
                <Building2 className="w-4 h-4 text-purple-400" />
                <span className="text-sm text-purple-300">
                  Front-of-the-Meter
                </span>
              </div>
              <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4">
                Distributed Energy Resource Management
              </h2>
              <p className="text-xl text-white/60">
                For Energy Developers & Utilities
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <DollarSign className="w-8 h-8 text-green-400" />,
                  title: "Earn More, Period",
                  description:
                    "NeuraCharge\u2122 makes sure your assets get every dollar. Our AI-powered dispatch engine makes it easy to participate in grid services such as energy arbitrage, demand response, and ancillary markets. With NeuraCharge\u2122 you capture every opportunity, every time.",
                },
                {
                  icon: <BarChart3 className="w-8 h-8 text-blue-400" />,
                  title: "One Platform, Complete Control",
                  description:
                    "Control fleets of batteries, generators, and DERs from one platform. Optimize day-ahead scheduling, set program priorities, and keep an eye on performance at scale without the spreadsheets or manual calls.",
                },
                {
                  icon: <Shield className="w-8 h-8 text-amber-400" />,
                  title: "Visibility Enabled, Risk Mitigated",
                  description:
                    "Avoid penalties and protect performance. NeuraCharge\u2122 lets you keep an eye on the health of your assets in real time. Get predictive alarms and automated reports so you stay on top of problems and meet your contract requirements.",
                },
              ].map((feature) => (
                <Card
                  key={feature.title}
                  className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-[1.02]"
                >
                  <CardHeader>
                    <div className="mb-4">{feature.icon}</div>
                    <CardTitle className="text-white text-xl">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-white/70 leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ==================== CORE FEATURES ==================== */}
        <section className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4">
                A Unified Platform for All Your DERs
              </h2>
              <p className="text-lg text-white/60 max-w-2xl mx-auto">
                Everything you need to monitor, control, and optimize
                distributed energy resources
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: <BarChart3 className="w-6 h-6 text-cyan-400" />,
                  title: "Fleet-Wide Dashboard",
                  description:
                    "Unified platform to monitor, control, and optimize DERs across multiple sites\u2014batteries, generators, PV, HVAC, etc.",
                },
                {
                  icon: <Radio className="w-6 h-6 text-purple-400" />,
                  title: "Remote & Local Dispatch",
                  description:
                    "Automate or manually trigger actions with secure cloud access or on-site fallback control.",
                },
                {
                  icon: <Brain className="w-6 h-6 text-pink-400" />,
                  title: "AI-Optimized Dispatch Engine",
                  description:
                    "Predicts grid peaks and optimizes dispatch schedules to capture savings. Automatically reacts to grid signals and market prices to maximize returns from energy arbitrage, demand response, and ancillary services.",
                },
                {
                  icon: <Signal className="w-6 h-6 text-green-400" />,
                  title: "Live Market Data Integration",
                  description:
                    "Real-time access to market signals from IESO, AESO, and others ensures informed, profitable dispatch decisions.",
                },
                {
                  icon: <Headphones className="w-6 h-6 text-amber-400" />,
                  title: "Network Operations Center (NOC)",
                  description:
                    "An optional managed service to handle dispatch and grid response, ensuring reliability with minimal effort.",
                },
                {
                  icon: <Plug className="w-6 h-6 text-blue-400" />,
                  title: "API-First Integration",
                  description:
                    "Seamlessly connects with your EMS, SCADA, BMS, or PLC systems\u2014no rip-and-replace required, and setup is quick and easy.",
                },
              ].map((feature) => (
                <Card
                  key={feature.title}
                  className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group"
                >
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors">
                        {feature.icon}
                      </div>
                      <CardTitle className="text-white text-lg">
                        {feature.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-white/60 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ==================== INDUSTRY AFFILIATIONS ==================== */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-white/50 uppercase tracking-widest text-sm mb-10">
              Proud Member Of
            </p>
            <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
              {[
                "canREA",
                "Energy Storage Canada",
                "Decentralised Energy Canada",
              ].map((org) => (
                <span
                  key={org}
                  className="text-white/70 text-lg font-semibold tracking-wide"
                >
                  {org}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ==================== MORE FEATURES (ACCORDION) ==================== */}
        <section className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-5xl font-bold text-white text-center mb-16">
              More Features
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Market Programs */}
              <div>
                <h3 className="text-lg font-semibold text-cyan-400 mb-4 flex items-center gap-2">
                  <DollarSign className="w-5 h-5" />
                  Market Programs
                </h3>
                <Accordion type="single" collapsible className="space-y-2">
                  {[
                    {
                      title: "Market Program Participation Engine",
                      content:
                        "Responds to real-time peak events and pricing signals, reducing peak demand charges.",
                    },
                    {
                      title: "Energy Arbitrage Optimization",
                      content:
                        "Charges/discharges batteries based on real-time and day-ahead market prices.",
                    },
                    {
                      title: "Customizable Program Prioritization",
                      content:
                        "Set and stack up to 5 grid programs based on financial goals or contract obligations.",
                    },
                    {
                      title: "Advanced Forecasting",
                      content:
                        "Up to 12-day predictive dispatch using AI for peak events, energy pricing, and system demand.",
                    },
                  ].map((item, i) => (
                    <AccordionItem
                      key={i}
                      value={`market-${i}`}
                      className="border-white/10"
                    >
                      <AccordionTrigger className="text-white/90 text-sm hover:text-white hover:no-underline">
                        {item.title}
                      </AccordionTrigger>
                      <AccordionContent className="text-white/60 text-sm">
                        {item.content}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>

              {/* Dispatch & Control */}
              <div>
                <h3 className="text-lg font-semibold text-purple-400 mb-4 flex items-center gap-2">
                  <Radio className="w-5 h-5" />
                  Dispatch & Control
                </h3>
                <Accordion type="single" collapsible className="space-y-2">
                  {[
                    {
                      title: "Asset-Level Monitoring",
                      content:
                        "Real-time data visibility for batteries, HVAC, compressors, cold storage, boilers, and more.",
                    },
                    {
                      title: "Health Metrics for Batteries",
                      content:
                        "Track state of charge, temperature, cycles remaining, and state of health to prevent degradation.",
                    },
                    {
                      title: "Custom Alerts",
                      content:
                        "Get notified when assets operate outside expected parameters to catch issues early.",
                    },
                    {
                      title: "Flexible Control Modes",
                      content:
                        "Toggle between automatic and manual dispatch for different load types and schedules.",
                    },
                    {
                      title: "Modular, Site-Agnostic Control",
                      content:
                        "Easily scales across geographies with custom scheduling and site-level autonomy.",
                    },
                  ].map((item, i) => (
                    <AccordionItem
                      key={i}
                      value={`dispatch-${i}`}
                      className="border-white/10"
                    >
                      <AccordionTrigger className="text-white/90 text-sm hover:text-white hover:no-underline">
                        {item.title}
                      </AccordionTrigger>
                      <AccordionContent className="text-white/60 text-sm">
                        {item.content}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>

              {/* Asset Visibility */}
              <div>
                <h3 className="text-lg font-semibold text-green-400 mb-4 flex items-center gap-2">
                  <Eye className="w-5 h-5" />
                  Asset Visibility
                </h3>
                <Accordion type="single" collapsible className="space-y-2">
                  {[
                    {
                      title: "Single Dashboard View",
                      content:
                        "Real-time monitoring of energy usage, DER performance, and environmental conditions.",
                    },
                    {
                      title: "Network Operations Center (NOC)",
                      content:
                        "An optional managed service to handle dispatch and grid response, ensuring reliability with minimal effort.",
                    },
                    {
                      title: "Incident & Financial Reports",
                      content:
                        "Clear, actionable insights into energy performance and savings, automatically generated.",
                    },
                    {
                      title: "Battery Health & Safety Monitoring",
                      content:
                        "Continuous tracking of SoC, temperature, capacity cycles, and fault detection.",
                    },
                    {
                      title: "Anomaly Detection & Root Cause Analysis",
                      content:
                        "Identifies underperformance or compliance issues before they escalate.",
                    },
                    {
                      title: "Regulatory Alignment",
                      content:
                        "Meets ISO, NERC, IEEE 1547, and NIST 800-53 standards for energy markets and cybersecurity.",
                    },
                  ].map((item, i) => (
                    <AccordionItem
                      key={i}
                      value={`visibility-${i}`}
                      className="border-white/10"
                    >
                      <AccordionTrigger className="text-white/90 text-sm hover:text-white hover:no-underline">
                        {item.title}
                      </AccordionTrigger>
                      <AccordionContent className="text-white/60 text-sm">
                        {item.content}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </div>
        </section>

        {/* ==================== CASE STUDY ==================== */}
        <section className="py-24 px-6">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm overflow-hidden">
              <CardContent className="p-8 lg:p-12">
                <div className="inline-flex items-center space-x-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-2 mb-6">
                  <FileText className="w-4 h-4 text-green-400" />
                  <span className="text-sm text-green-300">Case Study</span>
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-6 leading-tight">
                  How Hydro Rein Unlocked Over $160K in Energy Value with
                  Edgecom Energy
                </h2>
                <p className="text-white/70 leading-relaxed mb-8">
                  Hydro Rein partnered with Edgecom Energy to unlock the full
                  potential of its Tesla battery system at their Aluminum
                  Extrusions facility in Ontario. By implementing NeuraCharge™
                  and leveraging Edgecom's Network Operations Center (NOC) for
                  fully automated management, Hydro Rein eliminated manual
                  oversight, optimized battery performance, and maximized
                  participation in grid programs.
                </p>
                <Button
                  className="group text-white border border-[#0966C9] hover:border-[#074a9e]"
                  style={{ backgroundColor: "#0966C9" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#074a9e";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "#0966C9";
                  }}
                  onClick={() =>
                    window.open(
                      "https://edgecom.ai/case-study-hydro-rein/",
                      "_blank"
                    )
                  }
                >
                  Read The Full Case Study
                  <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* ==================== RESOURCES ==================== */}
        <section className="py-24 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-5xl font-bold text-white text-center mb-16">
              Resources
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Technical Brochure",
                  description:
                    "Dive deeper into the capabilities of NeuraCharge\u2122.",
                  link: "https://edgecom.ai/wp-content/uploads/2025/05/Brochure_NeuraCharge_Technical_Document_20250520.pdf",
                },
                {
                  title: "NOC Brochure",
                  description:
                    "Learn about our Network Operations Center (NOC).",
                  link: "https://edgecom.ai/wp-content/uploads/2025/05/Brochure_NeuraCharge_NOC_Document_20250520.pdf",
                },
              ].map((resource) => (
                <Card
                  key={resource.title}
                  className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 cursor-pointer group"
                  onClick={() => window.open(resource.link, "_blank")}
                >
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="p-3 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors">
                        <Download className="w-6 h-6 text-cyan-400" />
                      </div>
                      <div>
                        <CardTitle className="text-white text-lg">
                          {resource.title}
                        </CardTitle>
                        <p className="text-white/60 text-sm mt-1">
                          {resource.description}
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ==================== BLOG ==================== */}
        <section className="py-24 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-5xl font-bold text-white text-center mb-16">
              Learn More About Distributed Energy Resources
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "What Is Operating Reserve?",
                  date: "August 18, 2025",
                  link: "https://edgecom.ai/blog/what-is-operating-reserve/",
                },
                {
                  title:
                    "Impact of 2-Hour Model on Peak Savings with NeuraCharge",
                  date: "July 15, 2025",
                  link: "https://edgecom.ai/blog/impact-of-2-hour-model-on-peak-savings-with-neuracharge/",
                },
              ].map((post) => (
                <Card
                  key={post.title}
                  className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 cursor-pointer group"
                  onClick={() => window.open(post.link, "_blank")}
                >
                  <CardHeader>
                    <p className="text-white/40 text-xs uppercase tracking-wider mb-2">
                      {post.date} &middot; Blog Post
                    </p>
                    <CardTitle className="text-white text-lg group-hover:text-cyan-300 transition-colors">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <span className="text-cyan-400 text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                      Read Article
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ==================== RELATED PRODUCTS ==================== */}
        <section className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-5xl font-bold text-white text-center mb-16">
              Energy Management Solutions
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <BarChart3 className="w-8 h-8 text-cyan-400" />,
                  title: "dataTrack\u2122",
                  description:
                    "Unify your data with real-time energy monitoring and data aggregation.",
                  link: "https://edgecom.ai/datatrack/",
                },
                {
                  icon: <Brain className="w-8 h-8 text-purple-400" />,
                  title: "pTrack\u00AE",
                  description:
                    "AI-Powered peak predictions. The most accurate energy peak forecasts.",
                  link: "https://edgecom.ai/ptrack/",
                },
                {
                  icon: <Battery className="w-8 h-8 text-green-400" />,
                  title: "Demand Response",
                  description:
                    "Get an additional revenue stream for reducing your energy loads.",
                  link: "https://edgecom.ai/demand-response/",
                },
              ].map((product) => (
                <Card
                  key={product.title}
                  className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 cursor-pointer group hover:scale-[1.02]"
                  onClick={() => window.open(product.link, "_blank")}
                >
                  <CardHeader>
                    <div className="mb-2">{product.icon}</div>
                    <CardTitle className="text-white text-xl group-hover:text-cyan-300 transition-colors">
                      {product.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-white/60 text-sm leading-relaxed mb-4">
                      {product.description}
                    </p>
                    <span className="text-cyan-400 text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ==================== CONTACT / CTA ==================== */}
        <section className="py-24 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardContent className="p-8 lg:p-12">
                <Mail className="w-12 h-12 text-cyan-400 mx-auto mb-6" />
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                  Contact Us Today
                </h2>
                <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto">
                  Interested in our energy solutions? Contact us today for more
                  information and talk to one of our energy specialists.
                </p>
                <Button
                  size="lg"
                  className="px-8 py-6 text-lg font-medium group transition-all duration-300 hover:scale-105 shadow-lg text-white border border-[#0966C9] hover:border-[#074a9e]"
                  style={{ backgroundColor: "#0966C9" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#074a9e";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "#0966C9";
                  }}
                  onClick={() =>
                    window.open("https://edgecom.ai/demo/", "_blank")
                  }
                >
                  Book a Demo
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* ==================== FOOTER ==================== */}
        <footer className="py-12 px-6 border-t border-white/10">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="text-white/40 text-sm">
                &copy; 2026 Edgecom Energy. All rights reserved.
              </div>
              <div className="flex gap-6">
                <a
                  href="https://edgecom.ai/privacy-cookies-policy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/40 text-sm hover:text-white/70 transition-colors"
                >
                  Privacy & Cookies Policy
                </a>
                <a
                  href="https://edgecom.ai/contact/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/40 text-sm hover:text-white/70 transition-colors"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>

      {/* Floating particles effect */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-20">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Index;
