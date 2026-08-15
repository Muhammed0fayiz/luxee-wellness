export const siteConfig = {
  name: "Luxee Wellness",
  fullName: "Luxee Wellness Family Salon",
  tagline: "Family salon for hair, skin & wellness",
  description:
    "Luxee Wellness Family Salon in Venjaramoodu is a gents and ladies salon offering haircuts, hair spa, hair smoothening & Botox treatments, hydra facials, cleanups, D-tan, manicure and pedicure.",
  url: "https://www.luxeewellness.com",
  phone: "+91 8891652360",
  phoneDisplay: "8891 652 360",
  email: "hello@luxeewellness.com",
  address: {
    line1: "First Floor, near Alanthara Bus Stop",
    line2: "Alanthara, Venjaramoodu",
    city: "Tvm",
    state: "Kerala",
    postalCode: "695607",
    country: "IN",
  },
  hours: [
    { day: "Monday – Saturday", time: "9:00 AM – 8:00 PM" },
    { day: "Sunday", time: "9:00 AM – 6:00 PM" },
  ],
  social: {
    instagram: "https://www.instagram.com/luxeewellness",
  },
};

export const fullAddress = `${siteConfig.address.line1}, ${siteConfig.address.line2}, ${siteConfig.address.city}, ${siteConfig.address.state} ${siteConfig.address.postalCode}`;
