"use strict";

/**
 * why-home-nurse4-you controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::why-home-nurse4-you.why-home-nurse4-you"
);

module.exports = {
  getBannerData: async (ctx) => {
    try {
      const bannerData = await strapi.db
        .query("api::why-home-nurse4-you.why-home-nurse4-you")
        .findOne({});

      return {
        status: true,
        message: "Data fetched Successfully!",
        bannerData,
      };
    } catch (err) {
      return {
        status: false,
        message: "Data fetching failed!",
        error: JSON.stringify(err),
      };
    }
  },
};
