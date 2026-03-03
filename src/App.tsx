/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  ShoppingBag, 
  MessageSquare, 
  TrendingUp, 
  Clock, 
  ShieldCheck, 
  BarChart3, 
  ArrowRight, 
  CheckCircle2, 
  XCircle,
  Instagram,
  Zap,
  Users
} from "lucide-react";

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 glass">
    <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-lg ig-gradient flex items-center justify-center">
          <ShoppingBag className="w-5 h-5 text-white" />
        </div>
        <span className="font-display font-extrabold text-xl tracking-tight">OMC</span>
      </div>
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
        <a href="#problem" className="hover:text-white transition-colors">The Problem</a>
        <a href="#solution" className="hover:text-white transition-colors">Solution</a>
        <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
      </div>
      <a 
        href="https://selar.com/5mc421p1h9" 
        target="_blank" 
        className="ig-gradient px-6 py-2.5 rounded-full text-sm font-bold hover:scale-105 transition-transform shadow-lg shadow-ig-pink/20"
      >
        Get Started
      </a>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
    {/* Background Glows */}
    <div className="absolute top-1/4 -left-20 w-96 h-96 bg-ig-purple/20 blur-[120px] rounded-full" />
    <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-ig-orange/20 blur-[120px] rounded-full" />
    
    <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
      >
        <span className="w-2 h-2 rounded-full bg-ig-pink animate-pulse" />
        <span className="text-xs font-bold tracking-widest uppercase text-zinc-400">
          Stop Losing 65% of Your Sales to DM Ghosts
        </span>
      </motion.div>
      
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="font-display text-5xl md:text-8xl font-extrabold leading-[1.1] mb-8"
      >
        Stop Taking Orders <br />
        <span className="ig-text-gradient">in Your Instagram DMs</span>
      </motion.h1>
      
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-12 leading-relaxed"
      >
        Get a professional checkout that works 24/7, scales infinitely, 
        and turns your side hustle into a real business.
      </motion.p>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-4"
      >
        <a 
          href="https://selar.com/5mc421p1h9" 
          target="_blank"
          className="w-full sm:w-auto ig-gradient px-10 py-5 rounded-full text-lg font-bold flex items-center justify-center gap-2 hover:scale-105 transition-transform shadow-xl shadow-ig-pink/30"
        >
          Make Payment Now <ArrowRight className="w-5 h-5" />
        </a>
        <a 
          href="https://wa.me/233242779949" 
          target="_blank"
          className="w-full sm:w-auto px-10 py-5 rounded-full text-lg font-bold border border-white/10 hover:bg-white/5 transition-colors"
        >
          WhatsApp for Info
        </a>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-24 grid grid-cols-2 md:grid-cols-3 gap-8 border-t border-white/5 pt-12"
      >
        <div className="text-center">
          <div className="font-display text-4xl font-bold ig-text-gradient mb-1">4.8x</div>
          <div className="text-sm text-zinc-500 uppercase tracking-widest font-bold">Revenue Increase</div>
        </div>
        <div className="text-center">
          <div className="font-display text-4xl font-bold ig-text-gradient mb-1">85%</div>
          <div className="text-sm text-zinc-500 uppercase tracking-widest font-bold">Conversion Rate</div>
        </div>
        <div className="text-center col-span-2 md:col-span-1">
          <div className="font-display text-4xl font-bold ig-text-gradient mb-1">24/7</div>
          <div className="text-sm text-zinc-500 uppercase tracking-widest font-bold">Automated Sales</div>
        </div>
      </motion.div>
    </div>
  </section>
);

const Problem = () => {
  const problems = [
    { icon: <Zap className="w-6 h-6 text-ig-pink" />, title: "Zero Passive Income", desc: "You can't make money while you sleep because your 'checkout' requires you to manually respond." },
    { icon: <Users className="w-6 h-6 text-ig-pink" />, title: "65% Ghost Rate", desc: "Most people who DM you never complete the purchase. That's money lost forever." },
    { icon: <TrendingUp className="w-6 h-6 text-ig-pink" />, title: "Scaling Ceiling", desc: "You physically can't scale past your personal capacity to respond to messages." },
    { icon: <Clock className="w-6 h-6 text-ig-pink" />, title: "Time Sink", desc: "Spending 4+ hours daily answering 'is this available?' kills your productivity." },
    { icon: <ShieldCheck className="w-6 h-6 text-ig-pink" />, title: "Platform Risk", desc: "One Instagram ban and your entire business disappears. You own nothing." },
    { icon: <BarChart3 className="w-6 h-6 text-ig-pink" />, title: "No Data", desc: "Zero analytics, no email list, no retargeting. You're flying blind." },
  ];

  return (
    <section id="problem" className="py-24 bg-zinc-900/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">Your DMs Are <span className="text-ig-pink">Costing You</span> Thousands</h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">If you're taking orders through DMs, you don't have a business—you have a very expensive part-time job.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((p, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5 }}
              className="p-8 rounded-3xl glass hover:border-ig-pink/30 transition-colors"
            >
              <div className="w-12 h-12 rounded-2xl bg-ig-pink/10 flex items-center justify-center mb-6">
                {p.icon}
              </div>
              <h3 className="font-display text-xl font-bold mb-3">{p.title}</h3>
              <p className="text-zinc-400 leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Comparison = () => (
  <section id="solution" className="py-24">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-20">
        <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">A Real Checkout <span className="ig-text-gradient">Changes Everything</span></h2>
        <p className="text-zinc-400 text-lg max-w-2xl mx-auto">Same products. Same Instagram following. Different system. Life-changing results.</p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="p-10 rounded-[40px] border-2 border-red-500/20 bg-red-500/5">
          <div className="flex items-center gap-3 mb-8">
            <XCircle className="w-8 h-8 text-red-500" />
            <span className="font-display text-2xl font-bold text-red-500">DM "Business"</span>
          </div>
          <ul className="space-y-4">
            {[
              "GH₵5,000/month revenue ceiling",
              "Working 70+ hours/week",
              "20-30 orders max per day",
              "65% of DMs never convert",
              "4+ hours daily on messages",
              "No customer data",
              "Real hourly rate: GH₵10/hr"
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-zinc-400">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500/50" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="p-10 rounded-[40px] border-2 border-emerald-500/20 bg-emerald-500/5">
          <div className="flex items-center gap-3 mb-8">
            <CheckCircle2 className="w-8 h-8 text-emerald-500" />
            <span className="font-display text-2xl font-bold text-emerald-500">Professional Website</span>
          </div>
          <ul className="space-y-4">
            {[
              "GH₵24,000+ monthly revenue",
              "Working 10 hours/week",
              "Unlimited orders 24/7",
              "85% checkout conversion",
              "Full customer database",
              "You own your platform",
              "Real hourly rate: GH₵60/hr"
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-zinc-100">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

const Pricing = () => {
  const plans = [
    {
      name: "Basic",
      price: "GH₵1,500",
      naira: "₦250K",
      desc: "Order Form Website - Perfect for getting started",
      features: ["Simple order form", "Mobile-responsive", "WhatsApp button", "Up to 3 pages", "1 week delivery"]
    },
    {
      name: "Standard",
      price: "GH₵2,500",
      naira: "₦420K",
      featured: true,
      desc: "Full eCommerce - Everything you need to sell online",
      features: ["Complete e-commerce", "Payment gateway", "Unlimited products", "Inventory management", "Order system", "60 days support"]
    },
    {
      name: "Premium",
      price: "GH₵3,500",
      naira: "₦590K",
      desc: "eCommerce + Automation + SEO - For serious growth",
      features: ["Everything in Standard", "Advanced SEO", "Abandoned cart recovery", "Email automation", "WhatsApp API", "Marketing pixel setup"]
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-zinc-900/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">Simple, <span className="ig-text-gradient">Transparent</span> Pricing</h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">Choose the package that fits your business. Serving Ghana & Nigeria.</p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <div 
              key={i}
              className={`p-10 rounded-[40px] relative transition-transform hover:scale-[1.02] ${
                plan.featured ? 'ig-gradient p-[2px]' : 'glass'
              }`}
            >
              <div className={`h-full w-full rounded-[38px] p-10 flex flex-col ${plan.featured ? 'bg-zinc-950' : ''}`}>
                {plan.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 ig-gradient px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                    Most Popular
                  </div>
                )}
                <h3 className="font-display text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-zinc-500 ml-2 text-sm font-medium">{plan.naira}</span>
                </div>
                <p className="text-zinc-400 text-sm mb-8 leading-relaxed">{plan.desc}</p>
                
                <ul className="space-y-4 mb-10 flex-grow">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-3 text-sm text-zinc-300">
                      <CheckCircle2 className="w-4 h-4 text-ig-pink" />
                      {f}
                    </li>
                  ))}
                </ul>
                
                <a 
                  href="https://selar.com/5mc421p1h9"
                  target="_blank"
                  className={`w-full py-4 rounded-full font-bold text-center transition-all ${
                    plan.featured 
                      ? 'ig-gradient text-white shadow-lg shadow-ig-pink/20' 
                      : 'bg-white text-black hover:bg-zinc-200'
                  }`}
                >
                  Choose {plan.name}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="py-20 border-t border-white/5">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
        <div className="col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 rounded-lg ig-gradient flex items-center justify-center">
              <ShoppingBag className="w-5 h-5 text-white" />
            </div>
            <span className="font-display font-extrabold text-xl tracking-tight">OMC</span>
          </div>
          <p className="text-zinc-500 max-w-sm leading-relaxed">
            Helping Ghana & Nigeria Instagram businesses become real e-commerce companies. 
            Stop playing business and start building one.
          </p>
        </div>
        <div>
          <h4 className="font-bold mb-6 uppercase tracking-widest text-xs text-zinc-400">Company</h4>
          <ul className="space-y-4 text-zinc-500 text-sm">
            <li><a href="#problem" className="hover:text-white transition-colors">The Problem</a></li>
            <li><a href="#solution" className="hover:text-white transition-colors">Our Solution</a></li>
            <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-6 uppercase tracking-widest text-xs text-zinc-400">Connect</h4>
          <ul className="space-y-4 text-zinc-500 text-sm">
            <li><a href="https://wa.me/233242779949" className="hover:text-white transition-colors flex items-center gap-2">
              <MessageSquare className="w-4 h-4" /> WhatsApp
            </a></li>
            <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2">
              <Instagram className="w-4 h-4" /> Instagram
            </a></li>
          </ul>
        </div>
      </div>
      <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-zinc-600 text-xs font-medium">
        <p>© 2026 OMC. All rights reserved.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <Problem />
      <Comparison />
      <Pricing />
      
      {/* Final CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 ig-gradient opacity-10 blur-[100px]" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-8">Ready to Stop <span className="ig-text-gradient">Losing Money?</span></h2>
          <p className="text-xl text-zinc-400 mb-12">
            Join 500+ merchants who transformed their Instagram side hustle into a professional brand.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="https://selar.com/5mc421p1h9" 
              target="_blank"
              className="w-full sm:w-auto ig-gradient px-12 py-6 rounded-full text-xl font-bold hover:scale-105 transition-transform shadow-2xl shadow-ig-pink/40"
            >
              Make Payment Now
            </a>
            <a 
              href="https://wa.me/233242779949" 
              target="_blank"
              className="w-full sm:w-auto px-12 py-6 rounded-full text-xl font-bold bg-[#25D366] text-white flex items-center justify-center gap-2 hover:scale-105 transition-transform"
            >
              <MessageSquare className="w-6 h-6" /> WhatsApp Info
            </a>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
