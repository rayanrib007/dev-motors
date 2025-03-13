export interface IHomeDataProtocol {
  object: {
    slug: string;
    title: string;
    type: string;
    metadata: {
      banner: {
        url: string;
        imgix_url: string;
      };
      heading: string;
      cta_button: {
        title: string;
        url: string;
      };
      about: {
        description: string;
        banner: {
          url: string;
          imgix_url: string;
        };
      };
      services: IServicesHomeDataProtocols[];
      contact: {
        email: string;
        phone: string;
        address: string;
        time: string;
      };
    };
  };
}

export interface IServicesHomeDataProtocols {
  image: {
    url: string;
    imgix_url: string;
  };
  description: string;
}

export interface ISubMenuInfosPagesProtocol {
  objects: {
    slug: string;
    title: string;
  }[];
}

export interface IPagesDataProtocol {
  metadata: {
    banner: {
      url: string;
      imgix_url: string;
    };
    button: {
      title: string;
      url: string;
    };
    description: {
      banner: {
        url: string;
        imgix_url: string;
      };
      button_active: boolean;
      button_title: string;
      button_url: string;
      text: string;
      title: string;
    };
  };
  slug: string;
  title: string;
}
