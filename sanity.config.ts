import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";

const config = defineConfig({
  projectId: "oy7r1dvm",
  dataset: "production",
  title: "Portfolio 2023",
  apiVersion: "2023-11-18",
  basePath: "/admin",
  plugins: [deskTool()],
});

export default config;
