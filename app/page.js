"use client";
import React, { useState } from "react";

const COLORS = {
  primary: "#5A3E46",
  secondary: "#0B0F2B",
  accent: "#D89A6A",
  bg: "#F5F5F5",
};

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Packages", href: "#packages" },
  { label: "Contact", href: "#contact" },
];

const TRUST_ITEMS = [
  {
    title: "Baby-Safe Products",
    desc: "Hypoallergenic, dermatologist-approved formulas",
    icon: (
      <path d="M12 2a7 7 0 0 0-7 7c0 3 2 5 3 7s1 4 4 4 3-2 4-4 3-4 3-7a7 7 0 0 0-7-7Z" />
    ),
  },
  {
    title: "Certified Therapists",
    desc: "Licensed professionals with years of experience",
    icon: (
      <path d="M12 2 4 6v6c0 5 3.5 9 8 10 4.5-1 8-5 8-10V6l-8-4Zm-1 13-3-3 1.5-1.5L11 12l4.5-4.5L17 9l-6 6Z" />
    ),
  },
  {
    title: "Home Service Available",
    desc: "Premium care delivered to your doorstep",
    icon: (
      <path d="M12 3 2 12h3v8h6v-6h2v6h6v-8h3L12 3Z" />
    ),
  },
  {
    title: "1000+ Moms Served",
    desc: "Trusted by families across Indonesia",
    icon: (
      <path d="M16 11a4 4 0 1 0-4-4 4 4 0 0 0 4 4Zm-8 0a4 4 0 1 0-4-4 4 4 0 0 0 4 4Zm0 2c-3 0-8 1.5-8 4.5V20h10v-2.5c0-1 .3-2 .8-2.8A12 12 0 0 0 8 13Zm8 0c-.4 0-.8 0-1.3.1A5 5 0 0 1 16 17v3h8v-2.5c0-3-5-4.5-8-4.5Z" />
    ),
  },
];

const METRICS = [
  { value: "1,200+", label: "Happy Moms" },
  { value: "2,300+", label: "Babies Treated" },
  { value: "98%", label: "Satisfaction" },
  { value: "5", label: "Cities" },
];

const SERVICES = [
  {
    title: "Mom Wellness",
    desc: "Postnatal massage, body care, and relaxation rituals tailored for new mothers.",
    image:
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Baby Massage",
    desc: "Gentle touch therapy to support baby's growth, sleep, and development.",
    image:
      "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Kids Wellness",
    desc: "Soothing treatments designed for active children, from 2 to 12 years old.",
    image:
      "https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Home Service",
    desc: "Complete spa experience brought to your home with all premium equipment.",
    image:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
  },
];

const PACKAGES = [
  {
    name: "Mom Relax",
    price: "350",
    duration: "90 min",
    features: [
      "Postnatal body massage",
      "Aromatherapy session",
      "Warm herbal compress",
      "Hair spa & relaxation",
    ],
  },
  {
    name: "Baby Bliss",
    price: "300",
    duration: "60 min",
    features: [
      "Gentle baby massage",
      "Organic baby oil",
      "Baby bathing ritual",
      "Sleep improvement guide",
    ],
  },
  {
    name: "Kids Care",
    price: "300",
    duration: "60 min",
    features: [
      "Child-friendly massage",
      "Reflexology for kids",
      "Safe, natural oils",
      "Fun, calming atmosphere",
    ],
  },
  {
    name: "Family Harmony",
    price: "799",
    duration: "3 hours",
    popular: true,
    features: [
      "Mom + Baby + Kids combined",
      "Premium home setup",
      "Personal wellness consultation",
      "Complimentary herbal tea",
    ],
  },
];

const TESTIMONIALS = [
  {
    name: "Sarah A.",
    role: "Mom of 2",
    quote:
      "Oreesha benar-benar menyelamatkan hari-hari saya setelah melahirkan. Terapisnya lembut, profesional, dan membuat saya merasa dihargai sebagai seorang ibu.",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "Rania D.",
    role: "Mom of baby Kenzo",
    quote:
      "Baby massage-nya luar biasa. Kenzo jadi lebih nyenyak tidur dan saya bisa beristirahat dengan tenang. Terima kasih Oreesha.",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "Mira K.",
    role: "Mom of 3",
    quote:
      "Paket Family Harmony adalah hadiah terbaik untuk keluarga kami. Semua dirawat, semua bahagia. Sangat direkomendasikan.",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
  },
];

const WHATSAPP_NUMBER = "6281234567890";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

function Icon({ children, className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-40 backdrop-blur bg-[#F5F5F5]/90 border-b border-black/5">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-4 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <span className="w-9 h-9 rounded-full bg-[#5A3E46] flex items-center justify-center text-white font-serif text-lg">
            O
          </span>
          <span className="text-lg font-semibold tracking-[0.25em] text-[#5A3E46]">
            OREESHA
          </span>
        </a>

        <div className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-[#5A3E46]/80 hover:text-[#5A3E46] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href={WHATSAPP_URL}
            className="hidden md:inline-flex items-center gap-2 bg-[#5A3E46] hover:bg-[#4a333a] text-white px-5 py-2.5 rounded-full text-sm font-medium shadow-sm transition-all hover:shadow-md"
          >
            Book Now
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-lg text-[#5A3E46]"
            aria-label="Toggle menu"
          >
            <Icon className="w-6 h-6">
              {open ? (
                <path d="M18 6 6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" fill="none" />
              ) : (
                <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" fill="none" />
              )}
            </Icon>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-black/5 bg-[#F5F5F5] px-6 py-4 space-y-3">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block text-[#5A3E46]"
            >
              {link.label}
            </a>
          ))}
          <a
            href={WHATSAPP_URL}
            className="block bg-[#5A3E46] text-white px-5 py-3 rounded-full text-center font-medium"
          >
            Book Now
          </a>
        </div>
      )}
    </nav>
  );
}

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#D89A6A]/20 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-[28rem] h-[28rem] rounded-full bg-[#5A3E46]/10 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur text-xs tracking-widest uppercase text-[#5A3E46] border border-[#5A3E46]/10">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D89A6A]" />
            Premium Homecare Spa
          </span>
          <h1 className="mt-6 text-4xl md:text-6xl font-semibold leading-[1.1] text-[#0B0F2B]">
            Spa Homecare Premium{" "}
            <span className="text-[#5A3E46]">untuk Ibu</span> &amp;{" "}
            <span className="text-[#D89A6A] italic font-serif">Bayi</span>
          </h1>
          <p className="mt-6 text-lg text-[#5A3E46]/70 max-w-lg leading-relaxed">
            Lebih tenang, lebih sehat, tanpa keluar rumah. Perawatan penuh kasih
            oleh terapis bersertifikat — langsung di rumah Anda.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href="#services"
              className="inline-flex justify-center items-center bg-[#5A3E46] hover:bg-[#4a333a] text-white px-8 py-4 rounded-full font-medium shadow-lg shadow-[#5A3E46]/20 hover:shadow-xl hover:-translate-y-0.5 transition-all"
            >
              Lihat Layanan
            </a>
            <a
              href={WHATSAPP_URL}
              className="inline-flex justify-center items-center gap-2 bg-white hover:bg-white/80 text-[#5A3E46] border border-[#5A3E46]/15 px-8 py-4 rounded-full font-medium transition-all hover:-translate-y-0.5"
            >
              <Icon className="w-5 h-5 text-green-600">
                <path d="M17.5 14.4c-.3-.1-1.7-.8-1.9-.9-.3-.1-.4-.1-.6.1s-.7.9-.9 1.1c-.2.2-.3.2-.6.1-.9-.4-1.7-.9-2.4-1.7-.6-.7-1.1-1.5-1.5-2.3-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5-.1-.1-.6-1.5-.9-2.1-.2-.5-.4-.5-.6-.5h-.5c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.2.2 2.2 3.3 5.3 4.6.8.3 1.3.5 1.8.6.7.2 1.4.2 2 .1.6-.1 1.7-.7 2-1.4.2-.7.2-1.3.2-1.4 0-.2-.2-.2-.5-.3ZM12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Z" />
              </Icon>
              Chat WhatsApp
            </a>
          </div>

          <div className="mt-10 flex items-center gap-6">
            <div className="flex -space-x-3">
              {[
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80",
                "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&q=80",
                "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80",
              ].map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt=""
                  className="w-10 h-10 rounded-full border-2 border-[#F5F5F5] object-cover"
                />
              ))}
            </div>
            <div className="text-sm">
              <div className="flex items-center gap-1 text-[#D89A6A]">
                {"★★★★★".split("").map((s, i) => (
                  <span key={i}>{s}</span>
                ))}
                <span className="ml-2 text-[#5A3E46] font-semibold">4.9</span>
              </div>
              <p className="text-[#5A3E46]/60 text-xs">
                dari 1,000+ ibu bahagia
              </p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-br from-[#D89A6A]/30 to-[#5A3E46]/20 rounded-[2.5rem] blur-2xl" />
          <img
            src="https://images.unsplash.com/photo-1531983412531-1f49a365ffed?auto=format&fit=crop&w=1000&q=80"
            alt="Mother and baby"
            className="relative rounded-[2rem] shadow-2xl object-cover w-full h-[520px]"
          />
          <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl flex items-center gap-3 max-w-[260px]">
            <div className="w-12 h-12 rounded-full bg-[#D89A6A]/15 flex items-center justify-center">
              <Icon className="w-6 h-6 text-[#D89A6A]">
                <path d="M12 2 4 6v6c0 5 3.5 9 8 10 4.5-1 8-5 8-10V6l-8-4Z" />
              </Icon>
            </div>
            <div>
              <p className="font-semibold text-sm text-[#0B0F2B]">
                100% Baby-Safe
              </p>
              <p className="text-xs text-[#5A3E46]/60">
                Certified products only
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustIndicators() {
  return (
    <section className="py-16 md:py-20 bg-white/60">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {TRUST_ITEMS.map((item) => (
            <div
              key={item.title}
              className="text-center p-6 rounded-2xl hover:bg-white hover:shadow-md transition-all duration-300"
            >
              <div className="w-14 h-14 mx-auto rounded-2xl bg-[#D89A6A]/15 flex items-center justify-center mb-4">
                <Icon className="w-7 h-7 text-[#D89A6A]">{item.icon}</Icon>
              </div>
              <h3 className="font-semibold text-[#0B0F2B] mb-1">{item.title}</h3>
              <p className="text-xs md:text-sm text-[#5A3E46]/60 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Metrics() {
  return (
    <section className="py-14 md:py-20 bg-[#5A3E46] text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-[#D89A6A] rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-white rounded-full blur-3xl" />
      </div>
      <div className="relative max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
        {METRICS.map((m) => (
          <div key={m.label}>
            <div className="text-4xl md:text-5xl font-semibold text-[#D89A6A]">
              {m.value}
            </div>
            <p className="mt-2 text-sm tracking-wider uppercase text-white/70">
              {m.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs tracking-[0.3em] uppercase text-[#D89A6A] font-medium">
            Our Services
          </span>
          <h2 className="mt-3 text-3xl md:text-5xl font-semibold text-[#0B0F2B]">
            Perawatan untuk Setiap Momen
          </h2>
          <p className="mt-4 text-[#5A3E46]/70">
            Dari ibu hingga si kecil — kami merangkul setiap fase dengan kelembutan
            dan keahlian.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((s) => (
            <div
              key={s.title}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-lg text-[#0B0F2B] mb-2">
                  {s.title}
                </h3>
                <p className="text-sm text-[#5A3E46]/70 leading-relaxed">
                  {s.desc}
                </p>
                <a
                  href="#packages"
                  className="inline-flex items-center gap-1 mt-4 text-sm font-medium text-[#D89A6A] hover:gap-2 transition-all"
                >
                  Learn more
                  <Icon className="w-4 h-4">
                    <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
                  </Icon>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section id="packages" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs tracking-[0.3em] uppercase text-[#D89A6A] font-medium">
            Packages
          </span>
          <h2 className="mt-3 text-3xl md:text-5xl font-semibold text-[#0B0F2B]">
            Pilih Paket Favorit Anda
          </h2>
          <p className="mt-4 text-[#5A3E46]/70">
            Harga transparan, layanan eksklusif, pengalaman premium.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PACKAGES.map((pkg) => (
            <div
              key={pkg.name}
              className={`relative rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1 ${
                pkg.popular
                  ? "bg-[#5A3E46] text-white shadow-2xl shadow-[#5A3E46]/20 ring-2 ring-[#D89A6A]"
                  : "bg-[#F5F5F5] text-[#0B0F2B] hover:shadow-lg"
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#D89A6A] text-white text-xs font-semibold tracking-wider uppercase px-4 py-1.5 rounded-full shadow">
                  Most Popular
                </div>
              )}
              <h3
                className={`font-semibold text-xl ${
                  pkg.popular ? "text-white" : "text-[#0B0F2B]"
                }`}
              >
                {pkg.name}
              </h3>
              <p
                className={`text-sm mt-1 ${
                  pkg.popular ? "text-white/70" : "text-[#5A3E46]/60"
                }`}
              >
                {pkg.duration} session
              </p>

              <div className="mt-6 flex items-baseline gap-1">
                <span
                  className={`text-sm ${
                    pkg.popular ? "text-white/70" : "text-[#5A3E46]/60"
                  }`}
                >
                  IDR
                </span>
                <span className="text-4xl font-semibold">{pkg.price}</span>
                <span
                  className={`text-sm ${
                    pkg.popular ? "text-white/70" : "text-[#5A3E46]/60"
                  }`}
                >
                  K
                </span>
              </div>

              <ul className="mt-6 space-y-3">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Icon
                      className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                        pkg.popular ? "text-[#D89A6A]" : "text-[#D89A6A]"
                      }`}
                    >
                      <path d="m9 16.2-3.5-3.6L4 14l5 5 11-11-1.4-1.4L9 16.2Z" />
                    </Icon>
                    <span
                      className={pkg.popular ? "text-white/90" : "text-[#5A3E46]/80"}
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href={WHATSAPP_URL}
                className={`mt-8 block text-center px-6 py-3 rounded-full font-medium transition-all ${
                  pkg.popular
                    ? "bg-[#D89A6A] hover:bg-[#c48757] text-white"
                    : "bg-[#5A3E46] hover:bg-[#4a333a] text-white"
                }`}
              >
                Book Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs tracking-[0.3em] uppercase text-[#D89A6A] font-medium">
            Testimonials
          </span>
          <h2 className="mt-3 text-3xl md:text-5xl font-semibold text-[#0B0F2B]">
            Cerita dari Para Ibu
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-lg transition-all"
            >
              <Icon className="w-8 h-8 text-[#D89A6A] mb-4">
                <path d="M7 11H4a6 6 0 0 1 6-6v2a4 4 0 0 0-3 4Zm10 0h-3a6 6 0 0 1 6-6v2a4 4 0 0 0-3 4ZM4 13h4v6H4v-6Zm10 0h4v6h-4v-6Z" />
              </Icon>
              <p className="text-[#5A3E46]/80 leading-relaxed italic">
                "{t.quote}"
              </p>
              <div className="mt-6 flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-[#0B0F2B]">{t.name}</p>
                  <p className="text-xs text-[#5A3E46]/60">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-12">
        <div>
          <span className="text-xs tracking-[0.3em] uppercase text-[#D89A6A] font-medium">
            Contact
          </span>
          <h2 className="mt-3 text-3xl md:text-5xl font-semibold text-[#0B0F2B]">
            Hubungi Kami
          </h2>
          <p className="mt-4 text-[#5A3E46]/70 max-w-md">
            Tim Oreesha siap membantu mempersiapkan sesi perawatan terbaik untuk
            keluarga Anda.
          </p>

          <div className="mt-10 space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#D89A6A]/15 flex items-center justify-center flex-shrink-0">
                <Icon className="w-5 h-5 text-[#D89A6A]">
                  <path d="M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.2 11.3 11.3 0 0 0 3.6.6 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.4a1 1 0 0 1 1 1 11.3 11.3 0 0 0 .6 3.6 1 1 0 0 1-.2 1l-2.2 2.2Z" />
                </Icon>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-[#5A3E46]/60">
                  Phone
                </p>
                <p className="text-[#0B0F2B] font-medium mt-1">
                  +62 812-3456-7890
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#D89A6A]/15 flex items-center justify-center flex-shrink-0">
                <Icon className="w-5 h-5 text-[#D89A6A]">
                  <path d="M12 2a8 8 0 0 0-8 8c0 6 8 12 8 12s8-6 8-12a8 8 0 0 0-8-8Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
                </Icon>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-[#5A3E46]/60">
                  Address
                </p>
                <p className="text-[#0B0F2B] font-medium mt-1">
                  Jl. Kemang Raya No. 12<br />
                  Jakarta Selatan, Indonesia
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#D89A6A]/15 flex items-center justify-center flex-shrink-0">
                <Icon className="w-5 h-5 text-[#D89A6A]">
                  <path d="M12 6v6l4 2m6-2a10 10 0 1 1-20 0 10 10 0 0 1 20 0Z" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
                </Icon>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-[#5A3E46]/60">
                  Hours
                </p>
                <p className="text-[#0B0F2B] font-medium mt-1">
                  Mon – Sun, 08:00 – 21:00
                </p>
              </div>
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-[#F5F5F5] p-8 md:p-10 rounded-3xl space-y-5"
        >
          <div>
            <label className="text-xs uppercase tracking-wider text-[#5A3E46]/60">
              Name
            </label>
            <input
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="mt-2 w-full bg-white border border-transparent focus:border-[#D89A6A] focus:outline-none px-4 py-3.5 rounded-xl transition-colors"
              placeholder="Your full name"
            />
          </div>
          <div>
            <label className="text-xs uppercase tracking-wider text-[#5A3E46]/60">
              Email
            </label>
            <input
              required
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="mt-2 w-full bg-white border border-transparent focus:border-[#D89A6A] focus:outline-none px-4 py-3.5 rounded-xl transition-colors"
              placeholder="you@email.com"
            />
          </div>
          <div>
            <label className="text-xs uppercase tracking-wider text-[#5A3E46]/60">
              Message
            </label>
            <textarea
              required
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="mt-2 w-full bg-white border border-transparent focus:border-[#D89A6A] focus:outline-none px-4 py-3.5 rounded-xl transition-colors resize-none"
              placeholder="How can we help you?"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#5A3E46] hover:bg-[#4a333a] text-white px-6 py-4 rounded-full font-medium shadow-lg shadow-[#5A3E46]/20 hover:shadow-xl transition-all"
          >
            {sent ? "Message Sent ✓" : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}

function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Chat on WhatsApp"
    >
      <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20" />
      <span className="relative flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-5 py-4 rounded-full shadow-2xl shadow-green-500/30 transition-all hover:scale-105">
        <Icon className="w-6 h-6">
          <path d="M17.5 14.4c-.3-.1-1.7-.8-1.9-.9-.3-.1-.4-.1-.6.1s-.7.9-.9 1.1c-.2.2-.3.2-.6.1-.9-.4-1.7-.9-2.4-1.7-.6-.7-1.1-1.5-1.5-2.3-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5-.1-.1-.6-1.5-.9-2.1-.2-.5-.4-.5-.6-.5h-.5c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.2.2 2.2 3.3 5.3 4.6.8.3 1.3.5 1.8.6.7.2 1.4.2 2 .1.6-.1 1.7-.7 2-1.4.2-.7.2-1.3.2-1.4 0-.2-.2-.2-.5-.3ZM12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Z" />
        </Icon>
        <span className="hidden md:inline text-sm font-medium">Chat with us</span>
      </span>
    </a>
  );
}

function Footer() {
  return (
    <footer className="bg-[#0B0F2B] text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <span className="w-10 h-10 rounded-full bg-[#D89A6A] flex items-center justify-center text-white font-serif text-lg">
              O
            </span>
            <span className="text-lg font-semibold tracking-[0.25em]">
              OREESHA
            </span>
          </div>
          <p className="mt-5 text-white/60 max-w-md leading-relaxed">
            Oreesha Wellness menghadirkan pengalaman spa premium untuk ibu, bayi,
            dan keluarga — dengan kelembutan, keahlian, dan sentuhan penuh cinta
            langsung di rumah Anda.
          </p>
          <p className="mt-6 text-[#D89A6A] text-sm tracking-[0.3em] uppercase">
            Calm • Nurturing • Trusted
          </p>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-widest text-white/50 mb-4">
            Explore
          </h4>
          <ul className="space-y-3 text-white/80 text-sm">
            {NAV_LINKS.map((l) => (
              <li key={l.label}>
                <a href={l.href} className="hover:text-[#D89A6A] transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-widest text-white/50 mb-4">
            Contact
          </h4>
          <ul className="space-y-3 text-white/80 text-sm">
            <li>+62 812-3456-7890</li>
            <li>hello@oreesha.com</li>
            <li>Jakarta, Indonesia</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/50">
          <p>© {new Date().getFullYear()} Oreesha Wellness. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#D89A6A] transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-[#D89A6A] transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function OreeshaLanding() {
  return (
    <div className="font-sans bg-[#F5F5F5] text-[#0B0F2B] antialiased selection:bg-[#D89A6A]/30">
      <Navbar />
      <main>
        <Hero />
        <TrustIndicators />
        <Metrics />
        <Services />
        <Pricing />
        <Testimonials />
        <Contact />
      </main>
      <WhatsAppFloat />
      <Footer />
    </div>
  );
}
