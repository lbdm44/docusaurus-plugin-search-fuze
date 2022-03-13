import type { LoadContext, Plugin } from "@docusaurus/types";

import type { PluginOptions } from "../types";

export default function DocusaurusPluginSearchFuse(
  context: LoadContext,
  options: PluginOptions
): Plugin {
  return {
    name: 'docusaurus-plugin-search-fuse',
  };
}
