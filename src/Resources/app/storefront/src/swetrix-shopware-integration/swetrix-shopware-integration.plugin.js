import Plugin from "src/plugin-system/plugin.class";

export default class SwetrixShopwareIntegration extends Plugin {
  static options = {
    /**
     * Specifies the Project Id of the Swetrix project.
     * @type string
     */
    projectId: "123456789",
  };

  init() {
    const script = document.createElement("script");
    script.src = "https://swetrix.org/swetrix.js";
    script.onload = function () {
      swetrix.init(this.options.projectId);
      swetrix.trackViews();
      console.log("Swetrix Loaded");
    };
    document.head.appendChild(script);
    console.log("Swetrix Shopware Integration initialized");
  }
}
