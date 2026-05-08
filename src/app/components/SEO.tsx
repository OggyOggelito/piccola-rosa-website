import Head from "next/head";

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

export default function SEO({
  title = "Nya Piccola Rosa | Italiensk Restaurang i Hässelby Strand",
  description = "Nya Piccola Rosa är en italiensk restaurang och pizzeria i Hässelby Strand som serverar pizza, pasta, kebab, plankstek, grillrätter, öl och vin i en familjär miljö nära Stockholm.",
  image = "/images/nya_piccola_rosa.png",
  url = "https://nyapiccolarosa.se",
}: SEOProps) {
  return (
    <Head>
      <title>{title}</title>

      <meta name="description" content={description} />
      <meta
        name="keywords"
        content="Nya Piccola Rosa, Piccola Rosa, pizzeria Hässelby Strand, restaurang Hässelby Strand, italiensk restaurang Stockholm, pizza Hässelby, kebab Hässelby, plankstek Stockholm, pasta Stockholm, bästa pizzan Hässelby, pizza nära mig, italiensk mat Hässelby, familjerestaurang Stockholm, pizza Stockholm, grillrätter Hässelby, lunch Hässelby Strand, middag Stockholm, restaurang västerort, oxfilépizza Stockholm, acapulco pizza, biffplanka Stockholm"
      />

      <meta name="robots" content="index, follow" />
      <meta name="author" content="Nya Piccola Rosa" />

      {/* AI / Semantic SEO */}
      <meta
        name="subject"
        content="Italiensk restaurang och pizzeria i Hässelby Strand"
      />
      <meta
        name="category"
        content="Restaurant, Italian Restaurant, Pizzeria"
      />
      <meta
        name="classification"
        content="Pizza, Pasta, Grill, Kebab, Restaurang"
      />
      <meta
        name="coverage"
        content="Hässelby Strand, Stockholm, Västerort"
      />
      <meta
        name="geo.region"
        content="SE-AB"
      />
      <meta
        name="geo.placename"
        content="Hässelby Strand, Stockholm"
      />
      <meta
        name="language"
        content="Swedish"
      />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Mobile */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#7A1E2C" />
    </Head>
  );
}