export interface IHomeDataProtocols {
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
