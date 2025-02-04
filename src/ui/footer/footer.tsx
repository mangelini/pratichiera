import { getTranslations } from "@/i18n/server";
import StoreConfig from "@/store.config";
import { YnsLink } from "@/ui/yns-link";

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
        label: "About Us",
        href: "/about-us",
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
      <div className="container flex max-w-7xl flex-row flex-wrap justify-center gap-16 text-base sm:justify-between">
        <div className="flex w-full max-w-sm gap-2">
          <div className="flex w-full flex-col ">
            <p>
              Strada Provinciale per Busseto,
              <br />
              56/A 43010 Fontevivo, Parma
            </p>
            <br />
            <p>+39 0521 618116</p>
          </div>

          <div className="flex w-full flex-col">
            <p><b>Monday:</b>
              <br />
              8:30AM-12:30PM</p>
            <br />
            <p><b>Tuesday - Saturday:</b>
              <br />
              8:30AM-12:30PM
              <br />
              3:30PM-7:00PM</p>
            <br />
            <p><b>Sunday closed</b></p>
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
