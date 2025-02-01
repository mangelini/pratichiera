import { publicUrl } from "@/env.mjs";
import { getTranslations } from "@/i18n/server";
import StoreConfig from "@/store.config";
import { CategoryBox } from "@/ui/category-box";
import Hero from "@/ui/hero";
import { ProductList } from "@/ui/products/product-list";
import { SeoH1 } from "@/ui/seo-h1";
import { YnsLink } from "@/ui/yns-link";
import * as Commerce from "commerce-kit";
import Image from "next/image";
import type { Metadata } from "next/types";

export const metadata = {
  alternates: { canonical: publicUrl },
} satisfies Metadata;

export default async function Home() {
  const products = await Commerce.productBrowse({ first: 6 });
  const t = await getTranslations("/");

  return (
    <main>
      <section className="flex w-full rounded">
        <Hero />
      </section>

      <SeoH1 className="text-4xl md:text-6xl mt-9 font-serif font-normal leading-[120%]">
        {t("home.title")}
      </SeoH1>

      <ProductList products={products} />

      <section className="w-full py-8">
        <div className="grid gap-8 lg:grid-cols-2">
          {StoreConfig.categories.map(({ slug, image: src }) => (
            <CategoryBox key={slug} categorySlug={slug} src={src} />
          ))}
        </div>
      </section>
    </main>
  );
}
