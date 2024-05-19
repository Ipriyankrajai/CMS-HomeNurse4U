'use strict';

/**
 * why-home-nurse4-you router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::why-home-nurse4-you.why-home-nurse4-you');

module.exports = {
    routes: [
        {
         method: 'GET',
         path: '/why-hn4u',
         handler: 'why-home-nurse4-you.getBannerData',
        },
      ]
}