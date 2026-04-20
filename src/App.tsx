import { Mail, GitFork, X } from "lucide-react";

const VIDEO_HERO =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_045634_e1c98c76-1265-4f5c-882a-4276f2080894.mp4";
const VIDEO_ABOUT =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_151551_992053d1-3d3e-4b8c-abac-45f22158f411.mp4";
const VIDEO_CARD_1 =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_053923_22c0a6a5-313c-474c-85ff-3b50d25e944a.mp4";
const VIDEO_CARD_2 =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_054411_511c1b7a-fb2f-42ef-bf6c-32c0b1a06e79.mp4";
const VIDEO_CARD_3 =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_055427_ac7035b5-9f3b-4289-86fc-941b2432317d.mp4";
const VIDEO_CTA =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_055729_72d66327-b59e-4ae9-bb70-de6ccb5ecdb0.mp4";

const MAX_W = "max-w-[1831px]";
const PAD_X = "px-4 sm:px-6 md:px-8 lg:px-10";

function SocialButtons({
  direction = "col",
  size = 56,
  className = "",
}: {
  direction?: "col" | "row";
  size?: number;
  className?: string;
}) {
  const base =
    "liquid-glass grid place-items-center rounded-[1rem] transition hover:bg-white/10";
  const wrap =
    direction === "col" ? "flex flex-col gap-3" : "flex flex-row gap-3";

  return (
    <div className={`${wrap} ${className}`}>
      <a
        className={base}
        href="#contact"
        aria-label="Mail"
        style={{ width: size, height: size }}
      >
        <Mail className="h-5 w-5 text-cream" />
      </a>
      <a
        className={base}
        href="#"
        aria-label="Twitter"
        style={{ width: size, height: size }}
      >
        <X className="h-5 w-5 text-cream" />
      </a>
      <a
        className={base}
        href="#"
        aria-label="Github"
        style={{ width: size, height: size }}
      >
        <GitFork className="h-5 w-5 text-cream" />
      </a>
    </div>
  );
}

function ArrowButton() {
  return (
    <button
      type="button"
      aria-label="Open"
      className="grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-[#b724ff] to-[#7c3aed] shadow-lg shadow-purple-500/50 transition hover:scale-110"
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path
          d="M9 18l6-6-6-6"
          stroke="rgba(255,255,255,0.95)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}

function VideoCover({
  src,
  className = "",
}: {
  src: string;
  className?: string;
}) {
  return (
    <video
      className={`absolute inset-0 h-full w-full object-cover ${className}`}
      src={src}
      autoPlay
      loop
      muted
      playsInline
    />
  );
}

function TextureOverlay() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-50 opacity-60 mix-blend-lighten"
      style={{
        backgroundImage: "url(/texture.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    />
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-background text-cream">
      <TextureOverlay />

      {/* SECTION 1: HERO */}
      <section className="relative min-h-[100svh] overflow-hidden rounded-b-[32px]">
        <VideoCover src={VIDEO_HERO} />
        <div className="absolute inset-0 bg-black/25" />

        <div className={`relative mx-auto ${MAX_W} ${PAD_X} pt-8`}>
          <header className="flex items-center justify-between">
            <div className="font-grotesk text-[16px] uppercase tracking-wide">
              Orbis.Nft
            </div>

            <nav className="hidden lg:block">
              <div className="liquid-glass rounded-[28px] px-[52px] py-[24px]">
                <ul className="flex items-center gap-10 font-grotesk text-[13px] uppercase tracking-wide text-cream">
                  {["Homepage", "Gallery", "Buy NFT", "FAQ", "Contact"].map(
                    (t) => (
                      <li key={t}>
                        <a
                          href="#"
                          className="transition hover:text-neon"
                        >
                          {t}
                        </a>
                      </li>
                    ),
                  )}
                </ul>
              </div>
            </nav>

            <div className="hidden lg:block">
              <SocialButtons direction="col" size={56} />
            </div>
          </header>

          <div className="relative mt-24 pb-16 lg:pb-24">
            <div className="relative">
              <h1 className="font-grotesk uppercase leading-[1.05] sm:leading-[1] lg:ml-32 lg:max-w-[780px] text-[40px] sm:text-[60px] md:text-[75px] lg:text-[90px]">
                Beyond earth
                <br />
                and ( its ) familiar boundaries
              </h1>

              <div className="pointer-events-none absolute right-0 top-10 -rotate-1 font-condiment text-neon opacity-90 mix-blend-exclusion text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px]">
                Nft collection
              </div>
            </div>

            <div className="mt-10 flex justify-center lg:hidden">
              <SocialButtons direction="row" size={56} />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: ABOUT / INTRO */}
      <section className="relative min-h-[100svh] overflow-hidden">
        <VideoCover src={VIDEO_ABOUT} />
        <div className="absolute inset-0 bg-black/15" />

        <div
          className={`relative mx-auto ${MAX_W} ${PAD_X} py-16 sm:py-20 md:py-24`}
        >
          <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
            <div className="relative">
              <h2 className="font-grotesk uppercase leading-[1] text-[32px] sm:text-[44px] md:text-[52px] lg:text-[60px]">
                Hello!
                <br />
                I&apos;m orbis
              </h2>
              <div className="pointer-events-none absolute bottom-0 right-0 -rotate-1 font-condiment text-neon opacity-90 mix-blend-exclusion text-[36px] sm:text-[48px] md:text-[56px] lg:text-[68px]">
                Orbis
              </div>
            </div>

            <p className="font-mono uppercase text-cream text-[14px] sm:text-[15px] md:text-[16px] max-w-[266px]">
              A digital object fixed beyond time and place. An exploration of
              distance, form, and silence in space
            </p>
          </div>

          <div className="mt-16 flex items-start justify-between gap-10">
            <div className="flex flex-col gap-6">
              {Array.from({ length: 2 }).map((_, i) => (
                <p
                  key={i}
                  className="font-mono uppercase text-[14px] sm:text-[15px] md:text-[16px] opacity-10 text-[#010828] sm:text-cream"
                >
                  A digital object fixed beyond time and place. An exploration
                  of distance, form, and silence in space
                </p>
              ))}
            </div>

            <div className="hidden lg:flex flex-col gap-6 max-w-[520px]">
              {Array.from({ length: 2 }).map((_, i) => (
                <p
                  key={i}
                  className="font-mono uppercase text-[14px] sm:text-[15px] md:text-[16px] opacity-10 text-cream"
                >
                  A digital object fixed beyond time and place. An exploration
                  of distance, form, and silence in space
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: NFT COLLECTION GRID */}
      <section className="bg-background">
        <div className={`mx-auto ${MAX_W} ${PAD_X} py-16 sm:py-20 md:py-24`}>
          <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h2 className="font-grotesk uppercase leading-[1] text-[32px] sm:text-[44px] md:text-[52px] lg:text-[60px]">
                Collection of
                <br />
                <span className="block ml-12 sm:ml-24 md:ml-32">
                  <span className="font-condiment normal-case text-neon mix-blend-exclusion opacity-90">
                    Space
                  </span>{" "}
                  objects
                </span>
              </h2>
            </div>

            <button
              type="button"
              className="group text-left self-start lg:self-auto"
            >
              <div className="flex items-end gap-4">
                <div className="font-grotesk uppercase leading-[1] text-[32px] sm:text-[44px] md:text-[52px] lg:text-[60px]">
                  SEE
                </div>
                <div className="font-grotesk uppercase leading-[1]">
                  <div className="text-[20px] sm:text-[26px] md:text-[30px] lg:text-[36px]">
                    ALL
                  </div>
                  <div className="text-[20px] sm:text-[26px] md:text-[30px] lg:text-[36px]">
                    CREATORS
                  </div>
                </div>
              </div>
              <div className="mt-3 w-full bg-neon h-[6px] sm:h-[8px] md:h-[9px] lg:h-[10px]" />
            </button>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { src: VIDEO_CARD_1, score: "8.7/10" },
              { src: VIDEO_CARD_2, score: "9/10" },
              { src: VIDEO_CARD_3, score: "8.2/10" },
            ].map((item) => (
              <div
                key={item.src}
                className="liquid-glass rounded-[32px] p-[18px] transition hover:bg-white/10"
              >
                <div className="relative w-full pb-[100%] overflow-hidden rounded-[24px]">
                  <video
                    className="absolute inset-0 h-full w-full object-cover"
                    src={item.src}
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                </div>

                <div className="mt-4 liquid-glass rounded-[20px] px-5 py-4 flex items-center justify-between">
                  <div>
                    <div className="font-grotesk uppercase text-[11px] tracking-wide text-cream/70">
                      RARITY SCORE:
                    </div>
                    <div className="font-grotesk uppercase text-[16px]">
                      {item.score}
                    </div>
                  </div>
                  <ArrowButton />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: CTA / FINAL SECTION */}
      <section id="contact" className="relative">
        <video
          className="w-full h-auto block"
          src={VIDEO_CTA}
          autoPlay
          loop
          muted
          playsInline
        />

        <div className="pointer-events-none absolute inset-0">
          <div className={`relative mx-auto ${MAX_W} ${PAD_X} h-full`}>
            <div className="absolute right-0 top-[10%] lg:pr-[20%] lg:pl-[15%] text-right">
              <div className="absolute -left-2 -top-10 font-condiment normal-case text-neon opacity-90 mix-blend-exclusion text-[17px] sm:text-[28px] md:text-[44px] lg:text-[68px]">
                Go beyond
              </div>

              <h2 className="font-grotesk uppercase leading-[1.05] text-[16px] sm:text-[26px] md:text-[40px] lg:text-[60px]">
                <span className="block mb-4 sm:mb-6 md:mb-8 lg:mb-12">
                  JOIN US.
                </span>
                <span className="block">REVEAL WHAT&apos;S HIDDEN.</span>
                <span className="block">DEFINE WHAT&apos;S NEXT.</span>
                <span className="block">FOLLOW THE SIGNAL.</span>
              </h2>
            </div>

            <div className="absolute left-[8%] bottom-[20%] sm:bottom-[18%] md:bottom-[14%] lg:bottom-[12%]">
              <div className="liquid-glass overflow-hidden rounded-[0.5rem] sm:rounded-[0.75rem] md:rounded-[1rem] lg:rounded-[1.25rem]">
                {[
                  { Icon: Mail, label: "Mail" },
                  { Icon: X, label: "Twitter" },
                  { Icon: GitFork, label: "Github" },
                ].map(({ Icon, label }, idx, arr) => (
                  <a
                    key={label}
                    href="#"
                    aria-label={label}
                    className={`grid place-items-center transition hover:bg-white/10
                      w-[14vw] sm:w-[14.375rem] md:w-[10.78125rem] lg:w-[16.77rem]
                      h-[14vw] sm:h-[4.25rem] md:h-[3.75rem] lg:h-[5.25rem]
                      ${idx !== arr.length - 1 ? "border-b border-white/10" : ""}`}
                  >
                    <Icon className="h-5 w-5 text-cream" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

