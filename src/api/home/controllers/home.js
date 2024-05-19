"use strict";

/**
 * home controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::home.home");

module.exports = {
  getHomeData: async (ctx) => {
    try {
      const homeData = await strapi.db
        .query("api::home.home")
        .findOne({
          populate: {
            banner: {
                populate: {
                    countries: true,
                    backgroundMedia: true,
                }
            }
          },
        });

      return {
        status: true,
        message: "Data fetched Successfully!",
        homeData,
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
