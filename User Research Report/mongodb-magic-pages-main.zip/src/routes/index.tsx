import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Database,
  Server,
  Code2,
  Cloud,
  Layers,
  Rocket,
  CheckCircle2,
  Calendar,
  Clock,
  Award,
  ArrowRight,
  Leaf,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MongoDB Developer Workshop — Database & Backend Building" },
      {
        name: "description",
        content:
          "12-hour hands-on MongoDB Developer Workshop by Smartbridge × MongoDB. Master Atlas, CRUD, Node.js, Express & REST APIs in 2 days.",
      },
      { property: "og:title", content: "MongoDB Developer Workshop" },
      {
        property: "og:description",
        content:
          "2 days. 12 hours. Hands-on MongoDB Atlas, Node.js, Express, REST APIs and a capstone project.",
      },
    ],
  }),
  component: Landing,
});

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: "easeOut" as const },
};

function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Nav />
      <Hero />
      <Objectives />
      <Curriculum />
      <University />
      <Outcomes />
      <CTA />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/60 border-b border-border"
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Leaf className="size-6 text-primary" />
          <span className="font-semibold tracking-tight">Smartbridge × MongoDB</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#objectives" className="hover:text-foreground transition">Objectives</a>
          <a href="#curriculum" className="hover:text-foreground transition">Curriculum</a>
          <a href="#outcomes" className="hover:text-foreground transition">Outcomes</a>
        </nav>
        <a
          href="#register"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition shadow-[var(--glow-primary)]"
        >
          Register <ArrowRight className="size-4" />
        </a>
      </div>
    </motion.header>
  );
}

function Hero() {
  return (
    <section
      className="relative pt-40 pb-32 px-6"
      style={{ background: "var(--gradient-hero)" }}
    >
      {/* Floating orbs */}
      <motion.div
        animate={{ y: [0, -20, 0], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-32 left-10 size-72 rounded-full bg-primary/20 blur-3xl"
      />
      <motion.div
        animate={{ y: [0, 30, 0], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute bottom-10 right-10 size-96 rounded-full bg-chart-2/20 blur-3xl"
      />

      <div className="relative max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm text-primary"
        >
          <span className="size-1.5 rounded-full bg-primary animate-pulse" />
          12 Hours · 2 Days · Hands-on
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-6 text-5xl md:text-7xl font-bold tracking-tight leading-[1.05]"
        >
          MongoDB Developer
          <br />
          <span className="bg-clip-text text-transparent bg-[var(--gradient-primary)]">
            Workshop
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground"
        >
          Bridge the gap between academia and industry. Master MongoDB Atlas, build REST APIs
          with Node.js & Express, and ship a portfolio-ready capstone project.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#register"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-medium text-primary-foreground hover:opacity-90 transition shadow-[var(--glow-primary)]"
          >
            Enroll Now <ArrowRight className="size-4" />
          </a>
          <a
            href="#curriculum"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-6 py-3 font-medium hover:bg-card transition"
          >
            View Curriculum
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
        >
          {[
            { v: "12h", l: "Live Training" },
            { v: "2", l: "Intensive Days" },
            { v: "5+", l: "MongoDB Modules" },
            { v: "1", l: "Capstone Project" },
          ].map((s) => (
            <div
              key={s.l}
              className="rounded-2xl border border-border bg-card/50 backdrop-blur p-5"
            >
              <div className="text-3xl font-bold text-primary">{s.v}</div>
              <div className="text-sm text-muted-foreground mt-1">{s.l}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Objectives() {
  const items = [
    { icon: Database, title: "NoSQL Foundations", desc: "Understand modern database architectures and the NoSQL paradigm." },
    { icon: Cloud, title: "MongoDB Atlas & Compass", desc: "Develop proficiency in the cloud-native MongoDB toolkit." },
    { icon: Code2, title: "CRUD & Advanced Querying", desc: "Perform reads, writes, aggregations and complex queries with ease." },
    { icon: Server, title: "Node.js + Express", desc: "Integrate MongoDB with backend services and build robust APIs." },
    { icon: Layers, title: "Data Modeling", desc: "Design schemas that scale for real-world data-driven applications." },
    { icon: Rocket, title: "Portfolio Projects", desc: "Ship REST APIs and capstone-ready projects to showcase your skills." },
  ];
  return (
    <section id="objectives" className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div {...fadeUp} className="max-w-2xl">
          <p className="text-sm font-medium text-primary uppercase tracking-wider">What you'll learn</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight">
            Industry-relevant skills, taught hands-on.
          </h2>
        </motion.div>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              whileHover={{ y: -4 }}
              className="group rounded-2xl border border-border bg-card p-6 hover:border-primary/50 transition"
            >
              <div className="size-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition">
                <it.icon className="size-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{it.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Curriculum() {
  const days = [
    {
      day: "Day 01",
      title: "MongoDB Foundations & Database Operations",
      topics: [
        "Database fundamentals & NoSQL concepts",
        "MongoDB Atlas setup & configuration",
        "CRUD operations end-to-end",
        "Querying & data exploration",
      ],
      outcome:
        "Independently create databases, manage collections, execute CRUD operations and perform advanced queries on MongoDB Atlas.",
    },
    {
      day: "Day 02",
      title: "Backend Integration & Application Development",
      topics: [
        "Node.js + MongoDB integration",
        "REST API development with Express",
        "Capstone project build",
        "Assessment & certification",
      ],
      outcome:
        "Ship a working backend application powered by MongoDB with a portfolio-ready capstone project.",
    },
  ];
  return (
    <section id="curriculum" className="py-28 px-6 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto">
          <p className="text-sm font-medium text-primary uppercase tracking-wider">Curriculum</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight">
            Two days. Built for builders.
          </h2>
        </motion.div>

        <div className="mt-16 grid md:grid-cols-2 gap-6">
          {days.map((d, i) => (
            <motion.div
              key={d.day}
              initial={{ opacity: 0, x: i === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="relative rounded-3xl border border-border bg-background p-8 overflow-hidden"
            >
              <div className="absolute -top-20 -right-20 size-60 rounded-full bg-primary/10 blur-3xl" />
              <div className="relative">
                <div className="flex items-center gap-3 text-primary">
                  <Calendar className="size-5" />
                  <span className="text-sm font-medium tracking-wider uppercase">{d.day} · 6 hrs</span>
                </div>
                <h3 className="mt-4 text-2xl font-bold tracking-tight">{d.title}</h3>
                <ul className="mt-6 space-y-3">
                  {d.topics.map((t) => (
                    <li key={t} className="flex items-start gap-3 text-sm">
                      <CheckCircle2 className="size-5 text-primary shrink-0 mt-0.5" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-6 border-t border-border">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">Outcome</p>
                  <p className="mt-2 text-sm leading-relaxed">{d.outcome}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function University() {
  const modules = [
    "MongoDB Basics",
    "CRUD Operations",
    "Data Modeling",
    "Atlas Fundamentals",
    "Building GenAI Apps with MongoDB",
  ];
  return (
    <section className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div {...fadeUp} className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm font-medium text-primary uppercase tracking-wider">
              MongoDB University Integration
            </p>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight">
              Official tracks, integrated into the workshop.
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Learn directly from MongoDB's official curriculum — from fundamentals to building
              GenAI applications — all woven into the live workshop experience.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            {modules.map((m, i) => (
              <motion.div
                key={m}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="rounded-xl border border-border bg-card px-5 py-4 flex items-center gap-3 hover:border-primary/50 transition"
              >
                <div className="size-8 rounded-lg bg-primary/15 text-primary flex items-center justify-center text-sm font-bold">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <span className="text-sm font-medium">{m}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Outcomes() {
  const outs = [
    { icon: Database, t: "Design MongoDB databases" },
    { icon: Server, t: "Build backend applications" },
    { icon: Code2, t: "Develop REST APIs" },
    { icon: Award, t: "Portfolio-ready projects" },
  ];
  return (
    <section id="outcomes" className="py-28 px-6 bg-card/30">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2 {...fadeUp} className="text-4xl md:text-5xl font-bold tracking-tight max-w-3xl mx-auto">
          Walk out job-ready, with proof.
        </motion.h2>
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {outs.map((o, i) => (
            <motion.div
              key={o.t}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl border border-border bg-background p-8"
            >
              <o.icon className="size-8 text-primary mx-auto" />
              <p className="mt-4 font-medium">{o.t}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="register" className="py-28 px-6">
      <motion.div
        {...fadeUp}
        className="relative max-w-5xl mx-auto rounded-3xl overflow-hidden border border-primary/30 p-12 md:p-16 text-center"
        style={{ background: "var(--gradient-hero)" }}
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute -top-32 -right-32 size-96 rounded-full bg-primary/20 blur-3xl"
        />
        <div className="relative">
          <div className="inline-flex items-center gap-2 text-primary text-sm">
            <Clock className="size-4" /> Limited seats per cohort
          </div>
          <h2 className="mt-4 text-4xl md:text-6xl font-bold tracking-tight">
            Ready to build with MongoDB?
          </h2>
          <p className="mt-5 text-muted-foreground max-w-xl mx-auto">
            Join the next cohort and graduate with the skills, the project, and the certificate.
          </p>
          <a
            href="#"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 font-semibold text-primary-foreground hover:opacity-90 transition shadow-[var(--glow-primary)]"
          >
            Reserve My Seat <ArrowRight className="size-4" />
          </a>
        </div>
      </motion.div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <Leaf className="size-4 text-primary" />
          Smartbridge × MongoDB Developer Workshop
        </div>
        <p>© {new Date().getFullYear()} Smartbridge. All rights reserved.</p>
      </div>
    </footer>
  );
}
