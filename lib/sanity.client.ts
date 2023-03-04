import { createClient } from "@sanity/client";

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
export const apiVersion = process.env.NEXT_PUBLIC_API_VERSION;

export const client = createClient({
  projectId,
  dataset,
  apiVersion: '2022-11-15',
  useCdn: true,
});
