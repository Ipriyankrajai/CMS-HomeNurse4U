'use strict';

/**
 * footer controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::footer.footer');

module.exports = {
    getFooter: async (ctx) => {
      try {
        const footerData = await strapi.db.query("api::footer.footer").findOne({
          populate: {
            logo: true,
            menu: {
              populate: {
                item: true
              },
            },
            contact: {
              populate: {
                icon: true
              }
            },
            email: {
              populate: {
                icon: true
              }
            },
            locations:{
              populate: {
                item: {
                  populate: {
                    mapImage: true,
                    infoImage: true,
                    displayImage: true
                  }
                }
              }
            }
          },
        });
  
        return {
          status: true,
          message: "Data fetched Successfully!",
          footerData,
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
  