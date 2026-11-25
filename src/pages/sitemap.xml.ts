import type { APIRoute } from "astro";
import { fields, projects } from "../data/portfolio";

export const GET: APIRoute = ({ site }) => {
  const paths = ["/", "/projects/", "/resume/", ...projects.map(p => "/projects/" + p.slug + "/"), ...Object.keys(fields).map(key => "/projects/field/" + key + "/")];
  const entries = paths.map(path => "<url><loc>" + new URL(path, site).href + "</loc></url>");
  return new Response('<?xml version="1.0" encoding="utf-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' + entries.join("") + "</urlset>", { headers: { "Content-Type": "application/xml" } });
};
