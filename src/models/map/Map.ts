type MapModel = {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  gender: string;
  photo: string;
  updatedAt: string;
};

type MapModelResponse = {
  results: MapModel[];
};

type SearchProps = {
  query: string;
};

export type { MapModelResponse, SearchProps, MapModel };
