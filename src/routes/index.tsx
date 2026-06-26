import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import logoUrl from "@/assets/logo.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { name: "viewport", content: "width=device-width, initial-scale=1.0" },
      { title: "منوی دیجیتال رستوران بیرون بر دیگچه" },
      {
        name: "description",
        content:
          "منوی دیجیتال رستوران بیرون بر دیگچه شامل منوی ویژه، منوی اصلی و سالادهای تازه با بهترین طعم و کیفیت.",
      },
      { property: "og:title", content: "منوی دیجیتال رستوران بیرون بر دیگچه" },
      {
        property: "og:description",
        content: "منوی دیجیتال رستوران بیرون بر دیگچه با طراحی مدرن و زیبا.",
      },
    ],
  }),
  component: Index,
});

type Item = {
  name: string;
  desc: string;
  price: number;
  img: string;
  tag?: string;
};

type Section = {
  id: string;
  title: string;
  badge?: string;
  items: Item[];
};

const toFa = (n: number | string) =>
  String(n).replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[Number(d)]);

const fmtPrice = (n: number) => toFa(n.toLocaleString("en-US"));

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    if (els.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px -5% 0px" }, // بهینه‌سازی مارجین برای رندر سریع‌تر هنگام اسکرول
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

const img = (id: string, w = 600) => // کاهش سایز پیش‌فرض تصاویر نمونه به ۶۰۰ برای سرعت بیشتر
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=75`; // بهینه‌سازی کوالیتی به ۷۵

const sections: Section[] = [
  {
    id: "special",
    title: "منوی ویژه",
    badge: "ساعت سرو: ۱۲:۰۰ تا ۱۷:۰۰",
    items: [
      {
        name: "ته چین مرغ دیگچه",
        desc: "ته‌چین مرغ زعفرانی با سینه یا ران",
        price: 760000,
        img: "https://lh3.googleusercontent.com/u/0/d/1MhxkN2lJG9zZ4y924NoSNfqEynYinPNv",
        tag: "سالاد رایگان",
      },
      {
        name: "کباب تابه ای دیگچه",
        desc: "تهیه‌شده از ۲۲۰ گرم گوشت خالص، سرو با برنج ایرانی و گوجه کبابی و سس مخصوص",
        price: 730000,
        img: "https://lh3.googleusercontent.com/u/0/d/1C473dxIwq3Dd3KY189QkXqDDl7zdRlWf",
        tag: "سالاد رایگان",
      },
      {
        name: "باقالی پلو با مرغ دیگچه",
        desc: "باقالی‌پلو سنتی با مرغ، ترکیبی از شوید، باقالی و زعفران",
        price: 590000,
        img: "https://lh3.googleusercontent.com/d/16lzbAMzoA87pwcoBYCywnP2bhxFoZnFw",
      },
      {
        name: "قیمه نثار قزوینی دیگچه",
        desc: "غذای اصیل قزوینی، تهیه‌شده با گوشت، زعفران، زرشک و پسته و بادام و پوست پرتقال",
        price: 860000,
        img: "https://lh3.googleusercontent.com/d/1M3PSYXstiFgdBOsEB6yGjjZyiuPaIfNd",
        tag: "سالاد رایگان",
      },
      {
        name: "مرصع پلوی دیگچه",
        desc: "برنج زعفرانی با خلال بادام، پسته، زرشک، کشمش و هویچ خلالی",
        price: 860000,
        img: img("1547592180-85f173990554"),
        tag: "سالاد رایگان",
      },
    ],
  },
  {
    id: "main",
    title: "منوی اصلی",
    badge: "ساعت سرو: ۱۲:۰۰ تا ۲۲:۰۰",
    items: [
      {
        name: "چلو خورشت فسنجان با مرغ دیگچه",
        desc: "خورش فسنجان با مرغ، تهیه‌شده از گردوی تازه و رب انار(ملس)",
        price: 970000,
        img: img("1547592180-85f173990554"),
      },
      {
        name: "لوبیا پلوی دیگچه",
        desc: "برنج زعفرانی همراه با لوبیاسبز و گوشت چرخ کرده مزه‌دار شده",
        price: 650000,
        img: img("1512058564366-18510be2db19"),
      },
      {
        name: "زرشک پلو با مرغ",
        desc: "برنج زعفرانی و زرشک، همراه با مرغ سرخ‌شده (سینه یا ران به انتخاب شما)",
        price: 560000,
        img: img("1631515243349-e0cb75fb8d3a"),
      },
      {
        name: "چلو کوبیده مخصوص (۲۲۰ گرم)",
        desc: "۲۲۰ گرم گوشت خالص، بدون سویا و مواد افزودنی",
        price: 690000,
        img: img("1606491956689-2ea866880c84"),
      },
      {
        name: "چلو جوجه دیگچه",
        desc: "چلو جوجه مخصوص با زعفران، همراه با برنج ایرانی و کره",
        price: 560000,
        img: "https://lh3.googleusercontent.com/d/1Clo0x0EPrX_gx2e088xP8Jcjd2a-yLqs",
      },
      {
        name: "چلو خورشت قرمه سبزی",
        desc: "خورشت سنتی ایرانی با گوشت، لوبیا، سبزی معطر و لیموعمانی",
        price: 560000,
        img: img("1585937421612-70a008356fbe"),
      },
      {
        name: "چلو خورشت قیمه",
        desc: "قیمه سنتی ایرانی با گوشت و لپه، قابل سفارش با سیب‌زمینی یا بادمجان",
        price: 560000,
        img: img("1604908554027-040286c4f9b8"),
      },
    ],
  },
  {
    id: "salads",
    title: "سالادها",
    items: [
      {
        name: "سالاد فصل",
        desc: "ترکیب سبزیجات تازه فصل با سس مخصوص",
        price: 120000,
        img: img("1540420773420-3366772f4999"),
      },
      {
        name: "سالاد شیرازی",
        desc: "ترکیب سنتی خیار، گوجه فرنگی و پیاز نگینی شده به همراه چاشنی آبغوره",
        price: 90000,
        img: img("1505253716362-afaea1d3d1af"),
      },
      {
        name: "سالاد اندونزی",
        desc: "مرغ گریل با کلم بنفش، هویج، ذرت و سس مخصوص",
        price: 90000,
        img: img("1546069901-ba9599a7e63c"),
      },
      {
        name: "ماست خیار",
        desc: "ماست تازه چکیده همراه با خیار رنده شده و نعناع معطر",
        price: 90000,
        img: img("1550304943-4f24f54ddde9"),
      },
    ],
  },
];

function SplashScreen() {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);
  const [visible, setVisible] = useState(() => {
    if (typeof window === "undefined") return true;
    return !window.sessionStorage.getItem("splash-shown");
  });

  useEffect(() => {
    if (!visible) return;
    const duration = 1500; // کاهش زمان لودینگ فیک از ۲.۲ ثانیه به ۱.۵ ثانیه برای تجربه کاربری سریع‌تر
    const interval = 20;
    const steps = duration / interval;
    let current = 0;
    const timer = setInterval(() => {
      current += 1;
      const pct = Math.min(100, Math.round((current / steps) * 100));
      setProgress(pct);
      if (pct >= 100) {
        clearInterval(timer);
        window.sessionStorage.setItem("splash-shown", "true");
        setTimeout(() => setFadeOut(true), 150);
      }
    }, interval);
    return () => clearInterval(timer);
  }, [visible]);

  useEffect(() => {
    if (!fadeOut) return;
    const timer = setTimeout(() => setVisible(false), 500);
    return () => clearTimeout(timer);
  }, [fadeOut]);

  if (!visible) return null;

  return (
    <div
      className={`splash-bg fixed inset-0 z-50 flex flex-col items-center justify-center transition-opacity duration-500 ease-out ${fadeOut ? "opacity-0" : "opacity-100"}`}
    >
      <div className="relative mx-auto mb-10 inline-flex h-16 w-32 items-center justify-center">
        {/* تصویر لوگو در اسپلش اسکرین برای لود سریع‌تر اولویت بالا گرفت */}
        <img src={logoUrl} alt="رستوران بیرون بر دیگچه" fetchPriority="high" className="relative h-full w-full object-contain" />
      </div>

      <div className="w-64 px-4 sm:w-72">
        <div className="mb-2 flex items-center justify-between px-1">
          <span className="text-xs font-semibold text-gold/80">در حال بارگذاری</span>
          <span className="text-xs font-black tabular-nums text-gold">
            {toFa(progress)}٪
          </span>
        </div>
        <div className="h-1.5 w-full overflow-hidden rounded-full splash-progress-track">
          <div
            className="splash-progress-fill h-full rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}

function Index() {
  const [active, setActive] = useState(sections[0].id);

  useReveal();

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (!el) return;
      const ob = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(s.id);
        },
        { rootMargin: "-10% 0px -70% 0px", threshold: 0 },
      );
      ob.observe(el);
      observers.push(ob);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 62;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      <SplashScreen />

      {/* Hero / Header */}
      <header className="relative overflow-hidden border-b border-border bg-gradient-to-b from-secondary to-background">
        <div className="mx-auto max-w-2xl px-5 pb-4 pt-5 text-center">
          <div className="animate-scale-in relative mx-auto mb-2 inline-flex h-12 w-24 items-center justify-center">
            <img src={logoUrl} alt="رستوران بیرون بر دیگچه" fetchPriority="high" className="h-full w-full object-contain invert" />
          </div>

          <h1 className="text-2xl font-black tracking-tight text-foreground">
            رستوران بیرون بر دیگچه
          </h1>
          <p className="mx-auto mt-1 max-w-md text-xs leading-5 text-muted-foreground">
            طعمی از اصالت ایرانی، با دستان هنرمند سرآشپزهای ما
          </p>
          <div className="mx-auto mt-2 flex items-center justify-center gap-2 text-[11px] text-muted-foreground">
            <span className="inline-flex h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
            <span>هم‌اکنون باز است · تا ساعت {toFa("۲۲:۰۰")}</span>
          </div>
        </div>
      </header>

      {/* Sticky category nav */}
      <nav className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur-md">
        <div className="mx-auto max-w-2xl">
          <ul className="no-scrollbar flex gap-2 overflow-x-auto px-4 py-2.5">
            {sections.map((s) => {
              const isActive = active === s.id;
              return (
                <li key={s.id} className="shrink-0">
                  <button
                    onClick={() => scrollTo(s.id)}
                    className={`rounded-full px-4 py-1.5 text-sm font-semibold transition-all duration-300 ${isActive
                      ? "bg-primary text-primary-foreground shadow-card"
                      : "bg-secondary text-secondary-foreground hover:bg-muted"
                      }`}
                  >
                    {s.title}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>

      {/* Sections */}
      <main className="mx-auto max-w-2xl px-4 sm:px-5">
        {sections.map((section) => (
          <section
            key={section.id}
            id={section.id}
            className="reveal scroll-mt-16 pt-3"
          >
            <div className="mb-3 px-1">
              <h2 className="text-xl font-black tracking-tight text-foreground">
                {section.title}
              </h2>
              {section.badge && (
                <span className="mt-1 inline-flex items-center gap-1 rounded-full bg-gold/15 px-2.5 py-0.5 text-xs font-semibold text-gold-foreground">
                  <span className="inline-flex h-1.5 w-1.5 rounded-full bg-gold" />
                  {section.badge}
                </span>
              )}
              <div className="mt-2 h-px w-full bg-gradient-to-l from-border via-border to-transparent" />
            </div>

            <ul className="flex flex-col gap-3.5">
              {section.items.map((item, i) => {
                // ترفند سرعت: ۳ آیتم اول صفحه بدون تاخیر و با بالاترین اولویت مرورگر لود شوند
                const isFirstThree = section.id === "special" && i < 3;

                return (
                  <li
                    key={item.name}
                    className="reveal"
                    style={{ transitionDelay: isFirstThree ? "0ms" : `${i * 30}ms` }}
                  >
                    <div className="group overflow-hidden rounded-xl border border-border bg-card shadow-card transition-all duration-300 hover:shadow-elegant">
                      <div className="grid grid-cols-[minmax(0,1fr)_100px] gap-3 p-3.5 sm:grid-cols-[minmax(0,1fr)_128px]">

                        <div className="flex min-w-0 flex-col justify-between py-0.5 pr-0.5">
                          <div>
                            <div className="flex items-start justify-between gap-2">
                              <h3 className="truncate text-base font-bold text-foreground sm:text-lg">
                                {item.name}
                              </h3>
                              {item.tag && (
                                <span className="shrink-0 rounded-full bg-accent/10 px-2 py-0.5 text-[10px] font-bold text-accent">
                                  {item.tag}
                                </span>
                              )}
                            </div>
                            <p className="mt-1 line-clamp-2 text-xs leading-5 text-muted-foreground sm:text-sm">
                              {item.desc}
                            </p>
                          </div>
                          <div className="mt-2.5 flex items-baseline gap-1">
                            <span className="text-base font-black text-foreground sm:text-lg">
                              {fmtPrice(item.price)}
                            </span>
                            <span className="text-[11px] font-medium text-muted-foreground">
                              تومان
                            </span>
                          </div>
                        </div>

                        <div className="relative aspect-square w-full overflow-hidden rounded-lg bg-muted sm:h-32 sm:w-32">
                          <img
                            src={item.img}
                            alt={item.name}
                            loading={isFirstThree ? "eager" : "lazy"}
                            fetchPriority={isFirstThree ? "high" : "low"}
                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                        </div>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </section>
        ))}

        <footer className="mt-12 border-t border-border pt-5 text-center">
          <p className="text-xs text-muted-foreground">
            تمامی قیمت‌ها به تومان است · مالیات بر ارزش افزوده محاسبه شده است
          </p>
          <p className="mt-1.5 text-[10px] text-muted-foreground/70">
            © رستوران بیرون بر دیگچه · {toFa(new Date().getFullYear())}
          </p>
        </footer>
      </main>
    </div>
  );
}