export enum Status {
  Unknown = 0,
  Active = 1,
  Inactive = 2,
}

export interface SampleModel {
  id: number;
  itemId: string;
  name: string;
  description?: string;
  category?: string;
  type?: string;
  externalId?: string;
  status: Status;
  updatedTimestamp?: string;
  createdTimestamp?: string;
}
