export interface Specials {
  blockHeading: string;
  assetsDomain: string;
  features: SpecialsFeature[];
}

export interface SpecialsFeature {
  description?: string;
  image?: string;
  imageAlt?: string;
  modelName: string;
  sorting: number;
}
