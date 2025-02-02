import { getTranslations } from "@/i18n/server";
import { YnsLink } from "./yns-link";

export default async function Hero() {
  const t = await getTranslations("/");

  return (
    <div className="relative h-[75vh] xl:h-[65vh] rounded-md w-full overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
        src="https://pratichiera.com/wp-content/uploads/2024/09/video_09_2024.mp4"
      />

      <div className="relative z-10 flex h-full w-full max-w-7xl items-end justify-center pb-8">
        <div className="max-w-xl space-y-4 text-center">
          <h2 className="font-medium font-serif tracking-tight text-white text-7xl">
            {t("hero.title")}
          </h2>
          <YnsLink
            className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-4xl font-serif font-medium text-white transition-colors hover:bg-background hover:text-primary focus:ring-1 focus:ring-primary border border-primary"
            href={"/"}
          >
            {t("hero.action")}
          </YnsLink>
        </div>
      </div>
    </div>
  );
}
