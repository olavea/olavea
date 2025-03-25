import type { APIRoute } from "astro";

export const prerender = false;

const headers = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
  "Access-Control-Allow-Headers": "*",
};

export const GET: APIRoute = () => {
  // Respond
  return new Response(
    JSON.stringify({
      name: "BatCatDad",
      bio: "Also know as Captain BatCat.",
      avatar: {
        url: "https://avatars.githubusercontent.com/u/58603611?v=4",
        alt: "",
      },
      socials: [
        { url: "https://twitter.com/batcatsmirre", label: "Twitter" },
        { url: "https://github.com/batcatdad", label: "GitHub" },
      ],
    }),
    {
      headers,
    },
  );
};

export const OPTIONS: APIRoute = () => {
  return new Response(null, {
    headers,
    status: 204,
  });
};
