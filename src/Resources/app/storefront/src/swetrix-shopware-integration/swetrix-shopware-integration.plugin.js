import Plugin from "src/plugin-system/plugin.class";

export default class SwetrixShopwareIntegration extends Plugin {
  static options = {
    /**
     * Specifies the Project Id of the Swetrix project.
     * @type string
     */
    projectId: "Project-Id",
  };

  init() {
    const script = document.createElement("script");
    script.src = "https://swetrix.org/swetrix.js";
    script.onload = function () {
      swetrix.init(this.options.projectId);
      swetrix.trackViews();
    };
    document.head.appendChild(script);
  }
}
