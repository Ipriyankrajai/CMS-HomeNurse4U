import type { Schema, Attribute } from '@strapi/strapi';

export interface CommonButton extends Schema.Component {
  collectionName: 'components_common_buttons';
  info: {
    displayName: 'button';
    description: '';
  };
  attributes: {
    label: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 2;
      }>;
    link: Attribute.String;
    type: Attribute.Enumeration<['text', 'filled', 'outlined']>;
    subLabel: Attribute.String;
    icon: Attribute.Media;
  };
}

export interface CommonInfo extends Schema.Component {
  collectionName: 'components_common_infos';
  info: {
    displayName: 'info';
    description: '';
  };
  attributes: {
    value: Attribute.String & Attribute.Required;
    icon: Attribute.Media & Attribute.Required;
  };
}

export interface CommonLocationItem extends Schema.Component {
  collectionName: 'components_common_location_items';
  info: {
    displayName: 'locationItem';
    description: '';
  };
  attributes: {
    mapImage: Attribute.Media & Attribute.Required;
    infoImage: Attribute.Media;
    displayImage: Attribute.Media & Attribute.Required;
    name: Attribute.String & Attribute.Required;
    address: Attribute.String & Attribute.Required;
    shortLocation: Attribute.String;
    default_show: Attribute.Boolean;
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

export interface CommonPoints extends Schema.Component {
  collectionName: 'components_common_points';
  info: {
    displayName: 'points';
  };
  attributes: {
    name: Attribute.String;
    color: Attribute.String;
  };
}

export interface HomeBanner extends Schema.Component {
  collectionName: 'components_home_banners';
  info: {
    displayName: 'banner';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    countries: Attribute.Media & Attribute.Required;
    backgroundMedia: Attribute.Media & Attribute.Required;
  };
}

export interface SupportSupportMenu extends Schema.Component {
  collectionName: 'components_support_support_menus';
  info: {
    displayName: 'supportMenu';
  };
  attributes: {
    image: Attribute.Media;
    label: Attribute.String;
    title: Attribute.String;
    description: Attribute.String;
    button: Attribute.Component<'common.button'>;
  };
}

export interface VisitLeftBanner extends Schema.Component {
  collectionName: 'components_visit_left_banners';
  info: {
    displayName: 'leftBanner';
  };
  attributes: {
    label: Attribute.String;
    title: Attribute.String;
    description: Attribute.String;
  };
}

export interface VisitRightBanner extends Schema.Component {
  collectionName: 'components_visit_right_banners';
  info: {
    displayName: 'rightBanner';
  };
  attributes: {
    videoURL: Attribute.String;
    title: Attribute.Blocks;
    description: Attribute.String;
    playIcon: Attribute.Media;
    pauseIcon: Attribute.Media;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'common.button': CommonButton;
      'common.info': CommonInfo;
      'common.location-item': CommonLocationItem;
      'common.locations': CommonLocations;
      'common.menu': CommonMenu;
      'common.points': CommonPoints;
      'home.banner': HomeBanner;
      'support.support-menu': SupportSupportMenu;
      'visit.left-banner': VisitLeftBanner;
      'visit.right-banner': VisitRightBanner;
    }
  }
}
