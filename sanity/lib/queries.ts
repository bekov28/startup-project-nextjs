import { defineQuery } from "next-sanity";

export const STARTUP_QUERY = defineQuery(`*[ _type == "startup"] | order(_createdAt desc) {
    _id,
    title,
    slug,
    _createdAt,
    views,
    author -> {
      _id,
      name, image, bio
    },
    description,
    image,
    category
    }`);
