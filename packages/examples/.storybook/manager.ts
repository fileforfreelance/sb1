// import "../types.d.ts";
import { addons } from "@storybook/manager-api";
import { create } from "@storybook/theming";

import logo from "../assets/logo-with-text.svg";
import pkg from "@storybook/addon-designs/package.json";

addons.setConfig({
  theme: create({
    // base: "light",
    // brandTitle: "AppWeb.Cc",
    //brandImage: logo,
    //brandUrl: pkg.homepage,
  }),
  showRoots: true,
});
