"use client";

import Link from "next/link";
import { useState } from "react";
import { serviceMenus } from "@/lib/services-data";

export default function ServiceMenu() {
  const [activeId, setActiveId] = useState(serviceMenus[0].id);

  const active =
    serviceMenus.find((menu) => menu.id === activeId) ?? serviceMenus[0];

  return (
    <div>
      {/* Service Category Tabs */}
      <div className="mb-10 flex justify-center gap-8 border-b border-ink/15">
        {serviceMenus.map((menu) => (
          <button
            key={menu.id}
            type="button"
            onClick={() => setActiveId(menu.id)}
            className={`relative pb-4 font-display text-xl italic transition-colors ${
              menu.id === activeId
                ? "text-berry"
                : "text-ink/40 hover:text-ink"
            }`}
          >
            {menu.label}

            {menu.id === activeId && (
              <span className="absolute -bottom-px left-0 right-0 h-[2px] bg-berry" />
            )}
          </button>
        ))}
      </div>

      {/* Service Introduction */}
      <p className="mx-auto mb-12 max-w-lg text-center font-body text-sm text-ink/60">
        {active.intro}
      </p>

      {/* Service Groups */}
      <div className="grid gap-x-16 gap-y-12 md:grid-cols-2">
        {active.groups.map((group) => (
          <div key={group.id}>
            <h3 className="mb-1 font-display text-xl italic text-ink">
              {group.title}
            </h3>

            <div className="mb-5 h-px w-10 bg-gold" />

            <ul className="space-y-4">
              {group.items.map((item) => (
                <li
                  key={item.name}
                  className="leader-row flex items-center justify-between gap-3 font-body text-ink/85"
                >
                  {/* Service Name */}
                  <span className="bg-cream pr-2">
                    {item.name}
                  </span>

                  {/* Highlighted Book Button */}
                  <Link
                    href="https://luxee-wellness.respark.in/"
                    className="shrink-0 rounded-full bg-berry px-4 py-1.5 text-xs font-semibold  tracking-wideish text-cream transition-all duration-200 hover:scale-105 hover:bg-ink"
                  >
                   View more
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}