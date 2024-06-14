import type { Specials, SpecialsFeature } from "~/type/Specials";
export function getSpecialsSerializer(el: any): Specials {
  return {
    blockHeading: el?.block_heading,
    assetsDomain: el?.assets_domain,
    features: el?.features?.map((e: any) => featuresSerializer(e)),
  };
}

function featuresSerializer(el: any): SpecialsFeature {
  return {
    description: el?.description || undefined,
    image: el?.image || undefined,
    imageAlt: el?.image_alt || undefined,
    modelName: el?.model_name,
    sorting: el?.sorting,
  };
}
