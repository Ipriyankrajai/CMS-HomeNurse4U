'use strict';

/**
 * footer router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::footer.footer');

module.exports = {
    routes: [
        {
         method: 'GET',
         path: '/footer',
         handler: 'footer.getFooter',
        },
      ]
}