export type ServiceItem = {
  name: string;
  note?: string;
};

export type ServiceGroup = {
  id: string;
  title: string;
  items: ServiceItem[];
};

export type ServiceMenu = {
  id: string;
  label: string;
  intro: string;
  groups: ServiceGroup[];
};

export const serviceMenus: ServiceMenu[] = [
  {
    id: "gents",
    label: "Gents",
    intro:
      "Haircuts, grooming and skin care for men, from a quick cut to a full spa reset.",
    groups: [
      {
        id: "gents-hair",
        title: "Hair",
        items: [{ name: "Hair Cut" }, { name: "Beard Setting" }],
      },
      {
        id: "gents-spa",
        title: "Hair Spa",
        items: [{ name: "Hair Spa" }],
      },
      {
        id: "gents-skin",
        title: "Skin",
        items: [{ name: "Facials" }, { name: "Hydra Facial" }],
      },
      {
        id: "gents-cleanup",
        title: "Cleanup & Tan Removal",
        items: [{ name: "Cleanup" }, { name: "D-Tan" }],
      },
      {
        id: "gents-hands-feet",
        title: "Hands & Feet",
        items: [{ name: "Pedicure" }, { name: "Manicure" }],
      },
    ],
  },
  {
    id: "ladies",
    label: "Ladies",
    intro:
      "Hair styling, advanced smoothening treatments and skin care for women.",
    groups: [
      {
        id: "ladies-hair",
        title: "Hair",
        items: [{ name: "Hair Cut" }, { name: "Hair Spa" }],
      },
      {
        id: "ladies-treatments",
        title: "Hair Treatments",
        items: [
          { name: "Brazilian Botox" },
          { name: "Nanoplastia" },
          { name: "Smoothening" },
          { name: "Kerasmooth" },
          { name: "Taninoplastia" },
        ],
      },
      {
        id: "ladies-facials",
        title: "Facials",
        items: [
          { name: "Hydra Facials" },
          { name: "Cleanup" },
          { name: "D-Tan" },
        ],
      },
      {
        id: "ladies-hands-feet",
        title: "Hands & Feet",
        items: [{ name: "Pedicure" }, { name: "Manicure" }],
      },
    ],
  },
];
