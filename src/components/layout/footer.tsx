import Image from "next/image";
import { FacebookIcon, InstagramIcon, YoutubeIcon } from "@/components/icons/social";
import { navItems } from "@/lib/data/nav";
import { siteConfig } from "@/lib/site-config";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-ink text-white/70">
      <div className="mx-auto max-w-[1400px] px-6 py-16 lg:px-12">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <Image
              src="/images/logo/raphael-lopes-logo-white.png"
              alt={siteConfig.name}
              width={141}
              height={36}
              className="h-9 w-auto"
            />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/50">
              {siteConfig.tagline}
            </p>
          </div>

          <div>
            <p className="eyebrow text-white/40">Navegação</p>
            <ul className="mt-4 space-y-2.5">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow text-white/40">Conecte-se</p>
            <ul className="mt-4 space-y-2.5 text-sm text-white/60">
              <li>
                <a
                  href={siteConfig.social.instagram.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 transition-colors hover:text-white"
                >
                  <InstagramIcon className="size-4" /> {siteConfig.social.instagram.handle}
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.social.instagram15Anos.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 transition-colors hover:text-white"
                >
                  <InstagramIcon className="size-4" /> {siteConfig.social.instagram15Anos.handle}
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.social.youtube.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 transition-colors hover:text-white"
                >
                  <YoutubeIcon className="size-4" /> YouTube
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.social.facebook.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 transition-colors hover:text-white"
                >
                  <FacebookIcon className="size-4" /> Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteConfig.legalName}. Todos os direitos reservados.
          </p>
          <p>Fotografia de casamento &amp; destination wedding — Brasil · EUA · Europa.</p>
        </div>
      </div>
    </footer>
  );
}
