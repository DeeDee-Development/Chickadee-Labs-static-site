/**
 * Site Configuration
 *
 * Feature flags and site-wide settings that control what gets built and deployed.
 */

export const siteConfig = {
  /**
   * Feature Flags
   */
  features: {
    /**
     * Architecture Page
     *
     * Controls whether the /architecture page is built and deployed.
     * When false, the page will NOT be included in the build at all.
     *
     * Set to `true` to build and enable the architecture diagram page (password-protected).
     * Set to `false` to completely exclude the page from the build.
     */
    enableArchitecturePage: false,
  },

  /**
   * Add other site-wide configuration here as needed
   */
};
