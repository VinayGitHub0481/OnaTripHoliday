import {
  Rocket,
  ShieldCheck,
  Briefcase,
  Users,
  Compass,
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Clock,
  Instagram,
  Facebook,
} from "lucide-react";

const STATS = [
  { value: "5+", label: "Years running" },
  { value: "2,500+", label: "Travellers guided" },
  { value: "150+", label: "Destinations covered" },
  { value: "4.9★", label: "Average rating" },
];

const FEATURES = [
  {
    icon: ShieldCheck,
    color: "#1F6F63",
    title: "Trusted service",
    copy: "Straightforward pricing, no last-minute surprises.",
  },
  {
    icon: Briefcase,
    color: "#F2A93B",
    title: "Best packages",
    copy: "Itineraries built around your pace and budget, not a template.",
  },
  {
    icon: Users,
    color: "#B3401D",
    title: "Expert team",
    copy: "Guides who know the roads, not just the routes.",
  },
  {
    icon: Compass,
    color: "#1F6F63",
    title: "India tours",
    copy: "Heritage circuits, coastlines and quiet hill towns alike.",
  },
];

const SOCIALS = [
  { icon: Instagram, url: "https://www.instagram.com/onatripholidays" },
  { icon: Facebook, url: "https://www.facebook.com/p/Onatrip-Holidays-100088055905534/" },
];

export default function Web() {
  return (
<div className="relative min-h-screen text-[#F6EFE1]">
      {/* background photo — fixed, kept sharp, contrast handled by overlay */}
      <div className="fixed inset-0 -z-10 overflow-hidden [transform:translateZ(0)]">
    <div
      className="
        absolute inset-0
        bg-cover
        bg-[65%_40%]
        sm:bg-[65%_40%]
      "
      style={{
        backgroundImage: "url('/images/back.jpg')",
        filter: "brightness(0.75) saturate(0.9) blur(1.5px)",
      }}
    />
        {/* light uniform darken, not black gradient */}
        <div className="absolute inset-0 bg-white/35" />

      </div>    

  
      <a
        href="#"
        className="fixed right-4 top-4 z-20 flex items-center gap-1.5 rounded-full border border-[#F2A93B]/50 bg-[#0B1B2E]/70 px-4 py-2 text-xs font-semibold text-[#F2A93B] backdrop-blur-sm transition hover:bg-[#0B1B2E]/90 sm:right-6 sm:top-6"
      >
        <Rocket className="h-3.5 w-3.5" /> Launching soon
      </a>

      <main className="relative">
        {/* ---------------- HERO ---------------- */}
        <section className="px-5 pb-14 pt-14 text-center sm:pt-20">
          {/* heading — ascending sizes only, fixed the sm:text-3xl regression that made
              tablet width briefly smaller than mobile; now large & consistent throughout */}
            <h1
        className="text-center font-serif font-bold
          text-4xl sm:text-5xl md:text-6xl lg:text-7xl
          [filter:drop-shadow(0_1px_2px_rgba(0,0,0,0.2))_drop-shadow(0_3px_6px_rgba(0,0,0,0.12))]
          md:[filter:drop-shadow(0_2px_3px_rgba(0,0,0,0.25))_drop-shadow(0_4px_8px_rgba(0,0,0,0.15))]"
      >
        <span className="text-slate-900">Explore</span>{" "}
        <span className="text-amber-400">Incredible</span>{" "}
        <span className="text-amber-400">India</span>
      </h1>

          {/* logo — replaced invalid w-110 / w-95 / w-106 (not real Tailwind scale values,
              they generated zero CSS) with arbitrary-value brackets so they always compile,
              in both dev and production builds; sized up to match the larger reference look */}
          <img
            src="/images/logo_3.png"
            alt="On a Trip Holidays logo"
            className="mx-auto mt-6 h-auto
              w-72 -translate-x-4
              sm:mt-8 sm:w-[26rem] sm:-translate-x-10
              md:w-[30rem] md:-translate-x-10
              lg:w-[34rem] lg:-translate-x-16
           [filter:drop-shadow(0_1px_2px_rgba(0,0,0,0.25))_drop-shadow(0_4px_8px_rgba(0,0,0,0.15))]
    md:[filter:drop-shadow(0_2px_3px_rgba(0,0,0,0.3))_drop-shadow(0_6px_10px_rgba(0,0,0,0.18))]
    lg:[filter:drop-shadow(0_2px_4px_rgba(0,0,0,0.3))_drop-shadow(0_8px_12px_rgba(0,0,0,0.2))]"
/>
          <div className="mx-auto mt-8 max-w-xl rounded-2xl border-l-4 border-[#F2A93B] bg-[#0B1B2E]/70 px-6 py-5 text-left shadow-lg shadow-black/30 backdrop-blur-sm">
            <p className="text-[15px] leading-7 text-[#F6EFE1]/95">
              Our website is getting a fresh new look — same team, same
              attention to detail, just an easier way to plan your trip.
            </p>
            <p className="mt-2 text-[15px] font-semibold leading-7 text-[#F2A93B]">
              Stay tuned. We'll be back soon — reach us directly in the
              meantime.
            </p>
          </div>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="tel:+919182894146"
              className="flex items-center justify-center gap-2 rounded-full bg-[#F2A93B] px-7 py-3.5 text-sm font-semibold text-[#10263B] shadow-lg shadow-black/20 transition hover:bg-[#f7bb5d]"
            >
              <Phone className="h-4 w-4" /> Call us
            </a>
            <a
              href="https://wa.me/919182894146"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-full bg-[#1F6F63] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#268577]"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
          </div>
        </section>

        {/* ---------------- STATS — 2-col on phones, row from sm up ---------------- */}
        <section className="border-y border-white/20 bg-black/15 px-5 py-8">
          <div className="mx-auto grid max-w-4xl grid-cols-2 gap-y-6 sm:flex sm:gap-y-0 sm:divide-x sm:divide-white/20"> 
            {STATS.map((s) => (
              <div key={s.label} className="min-w-0 flex-1 px-1 text-center sm:px-4">
                <p className="font-['Fraunces',Georgia,serif] text-xl italic text-[#F2A93B] sm:text-3xl lg:text-4xl">
                  {s.value}
                </p>
                <p className="mt-1 text-[9px] uppercase leading-tight tracking-wide text-[#D8D4C8] sm:text-xs">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ---------------- ABOUT — solid band, high contrast ---------------- */}
        <section className="bg-[#F6EFE1] px-5 py-8 text-[#10263B] sm:py-10">
          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2 md:gap-12">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#B3401D]">
                Since 2021
              </span>
              <h2 className="mt-2 font-['Fraunces',Georgia,serif] text-2xl font-bold leading-tight sm:text-3xl">
                A team that's already taken you somewhere
              </h2>
              <p className="mt-4 text-[15px] leading-7 text-[#10263B]/80">
                On a Trip Holidays started in Hyderabad with one idea — plan
                trips the way we'd want them planned for us. Five years and
                2,500+ travellers later, we still pick up the phone and check
                every stay ourselves before we recommend it.
              </p>
            </div>

            <div className="divide-y divide-[#10263B]/10">
              {FEATURES.map(({ icon: Icon, title, copy, color }) => (
                <div key={title} className="flex items-start gap-4 py-3 first:pt-0 last:pb-0">
                  <span
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full"
                    style={{ backgroundColor: color }}
                  >
                    <Icon className="h-5 w-5 text-white" />
                  </span>
                  <div>
                    <h3 className="font-semibold">{title}</h3>
                    <p className="mt-0.5 text-sm leading-6 text-[#10263B]/70">
                      {copy}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------- CONTACT — solid band ---------------- */}
        <section className="bg-[#081A2D] px-5 py-14 text-center sm:py-10">

          <div className="mx-auto flex w-fit flex-col gap-3 text-sm text-[#F6EFE1]/80">

          {/* Email */}
          <a
            href="mailto:Onatripholidays@gmail.com"
            className="grid grid-cols-[18px_auto] items-center gap-2 hover:text-[#F2A93B]"
          >
            <Mail className="h-4 w-4 justify-self-center" />
            <span>Onatripholidays@gmail.com</span>
          </a>

          {/* Location */}
          <a
            href="https://www.google.com/maps?q=Banaras+Arcade,+16-2-701/6/14A,+Malakpet,+Hyderabad,+Telangana"
            target="_blank"
            rel="noopener noreferrer"
            className="grid grid-cols-[18px_auto] items-center gap-2 hover:text-[#F2A93B]"
          >
            <MapPin className="h-4 w-4 justify-self-center" />
            <span>Malakpet-Hyderabad, Telangana</span>
          </a>

          {/* Hours */}
          <div className="grid grid-cols-[18px_auto] items-center gap-2">
            <Clock className="h-4 w-4 justify-self-center" />
            <span>Mon – Sat, 9 AM – 7 PM</span>
          </div>

          {/* Phone */}
          <a
            href="tel:+919182894146"
            className="mt-3 grid grid-cols-[18px_auto] items-center gap-2 font-semibold text-3xl text-[#F2A93B]"
          >
            <Phone className="h-6 w-6 justify-self-center translate-y-[1px]" />
            <span>91828 94146</span>
          </a>

        </div>

          <iframe
            title="Banaras Arcade Location"
            src="https://www.google.com/maps?q=Banaras+Arcade,+16-2-701/6/14A,+Malakpet,+Hyderabad,+Telangana&output=embed"
            className="mx-auto mt-6 aspect-[16/9] w-full max-w-2xl rounded-xl"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          /> 

          <div className="mt-5 flex justify-center gap-3">
            {SOCIALS.map(({ icon: Icon, url }, i) => (
              <a
                key={i}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-[#F6EFE1]/70 transition hover:border-[#F2A93B]/60 hover:text-[#F2A93B]"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>

          <p className="mt-5 text-xs text-[#F6EFE1]/45">
            New website launching this season ·{" "}
            <span className="text-[#F2A93B]">On a Trip Holidays</span> · © 2026
          </p>
        </section>
      </main>
    </div>
  );
}
