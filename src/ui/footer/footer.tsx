import { getTranslations } from "@/i18n/server";
import StoreConfig from "@/store.config";
import { Newsletter } from "@/ui/footer/newsletter.client";
import { YnsLink } from "@/ui/yns-link";
import type { SVGAttributes } from "react";

const sections = [
  {
    header: "Products",
    links: StoreConfig.categories.map(({ name, slug }) => ({
      label: name,
      href: `/category/${slug}`,
    })),
  },
  {
    header: "Support",
    links: [
      {
        label: "Features",
        href: "https://yournextstore.com/#features",
      },
      {
        label: "Pricing",
        href: "https://yournextstore.com/#pricing",
      },
      {
        label: "Contact Us",
        href: "mailto:info@pratichiera.com",
      },
    ],
  },
];

export async function Footer() {
  const t = await getTranslations("Global.footer");

  return (
    <footer className="w-full bg-primary p-6 text-primary-foreground md:py-12">
      <div className="container flex max-w-7xl flex-row flex-wrap justify-center gap-16 text-sm sm:justify-between">
        <div className="">
          <div className="flex w-full max-w-sm flex-col gap-2">
            <p>
              Strada Provinciale per Busseto,
              <br />
              56/A 43010 Fontevivo, Parma
            </p>
          </div>
        </div>

        <nav className="grid grid-cols-2 gap-16">
          {sections.map((section) => (
            <section key={section.header}>
              <h3 className="mb-2 font-semibold">{section.header}</h3>
              <ul role="list" className="grid gap-1">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <YnsLink
                      className="underline-offset-4 hover:underline"
                      href={link.href}
                    >
                      {link.label}
                    </YnsLink>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </nav>
      </div>
      <div className="container mt-8 flex max-w-7xl flex-col items-center justify-between gap-4 text-sm text-primary-foreground md:flex-row">
        <div>
          <p>
            Azienda Agricola e Caseificio Pratichiera S.S. di Marchini Orio,
          </p>
          <p>Davide e Amici Marisa</p>
        </div>
        <div className="flex items-center gap-4">
          <YnsLink
            className="inline-flex items-center gap-1 transition-colors text-primary-foreground"
            href="https:/linkedin.com/in/mangelini"
          >
            <span>Made with &lt;3 by Matteo Angelini</span>
          </YnsLink>
        </div>
      </div>
    </footer>
  );
}

function TwitterIcon(props: SVGAttributes<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 596 596"
      fill="none"
    >
      <path
        fill="#fff"
        d="m1 19 230 307L0 577h52l203-219 164 219h177L353 252 568 19h-52L329 221 179 19H1Zm77 38h82l359 481h-81L78 57Z"
      />
    </svg>
  );
}
