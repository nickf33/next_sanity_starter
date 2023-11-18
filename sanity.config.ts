import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";

const config = defineConfig({
  projectId: "ADD PROJECT ID FROM SANITY",
  dataset: "production",
  title: "ADD NAME",
  apiVersion: "2023-11-18",
  basePath: "/admin",
  plugins: [deskTool()],
});

export default config;
