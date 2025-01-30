import AccessoriesImage from "@/images/accessories.jpg";
import ApparelImage from "@/images/apparel.jpg";

export const config = {
  categories: [
    {
      name: "Parmigiano Reggiano",
      slug: "parmigiano-reggiano",
      image: ApparelImage,
    },
    { name: "Monolatte", slug: "monolatte", image: AccessoriesImage },
  ],

  social: {
    facebook: "https://facebook.com/pratichiera",
  },

  contact: {
    email: "info@pratichiera.com",
    phone: "+1 (555) 111-4567",
    address: "123 Store Street, City, Country",
  },
};

export type StoreConfig = typeof config;
export default config;
