// Where the listings come from. PREVIEW (the default, used on Vercel): the demo data in demoListings.js,
// no server and no accounts. Set REACT_APP_PREVIEW=false to use the Express + MongoDB server again.
import { demoListings } from "./demoListings";

export const PREVIEW = process.env.REACT_APP_PREVIEW !== "false";
const API = process.env.REACT_APP_API_URL || "http://localhost:3001";

const get = async (path) => (await fetch(`${API}${path}`, { method: "GET" })).json();

// Uploaded files are stored as "public/uploads/…" by the server; demo files are already site paths.
export const assetUrl = (p) => (!p ? "" : p.startsWith("/demo/") ? p : `${API}/${p.replace("public", "")}`);

const SEARCH_FIELDS = ["category", "title", "country", "city", "type"];
// "Iasi" finds "Iași": search ignores case and Romanian diacritics.
const plain = (t) => t.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

export async function getListings(category) {
  if (!PREVIEW) return get(category && category !== "Toate" ? `/properties?category=${category}` : "/properties");
  return category && category !== "Toate" ? demoListings.filter((l) => l.category === category) : demoListings;
}

export async function searchListings(search) {
  if (!PREVIEW) return get(`/properties/search/${search}`);
  if (search === "Toate") return demoListings;
  const q = plain(search);
  return demoListings.filter((l) => SEARCH_FIELDS.some((k) => plain(l[k]).includes(q)));
}

export async function getListing(id) {
  if (!PREVIEW) return get(`/properties/${id}`);
  return demoListings.find((l) => l._id === id) ?? null;
}
