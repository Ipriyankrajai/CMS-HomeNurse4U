import type { Schema, Attribute } from '@strapi/strapi';

export interface CommonButton extends Schema.Component {
  collectionName: 'components_common_buttons';
  info: {
    displayName: 'button';
  };
  attributes: {
    label: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 2;
      }>;
    link: Attribute.String;
    type: Attribute.Enumeration<['text', 'filled', 'outlined']>;
  };
}

export interface CommonLocationItem extends Schema.Component {
  collectionName: 'components_common_location_items';
  info: {
    displayName: 'locationItem';
  };
  attributes: {
    mapImage: Attribute.Media & Attribute.Required;
    infoImage: Attribute.Media;
    displayImage: Attribute.Media & Attribute.Required;
    name: Attribute.String & Attribute.Required;
    address: Attribute.String & Attribute.Required;
    shortLocation: Attribute.String;
  };
}

export interface CommonLocations extends Schema.Component {
  collectionName: 'components_common_locations';
  info: {
    displayName: 'locations';
  };
  attributes: {
    item: Attribute.Component<'common.location-item', true>;
  };
}

export interface CommonMenu extends Schema.Component {
  collectionName: 'components_common_menus';
  info: {
    displayName: 'menu';
    description: '';
  };
  attributes: {
    item: Attribute.Component<'common.button', true> &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    label: Attribute.String & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'common.button': CommonButton;
      'common.location-item': CommonLocationItem;
      'common.locations': CommonLocations;
      'common.menu': CommonMenu;
    }
  }
}
