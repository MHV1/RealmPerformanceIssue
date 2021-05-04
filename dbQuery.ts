import { ObjectSchema, open, UpdateMode } from 'realm';
import { SampleModel } from './model';

const Schema: ObjectSchema = {
  name: 'SampleModel',
  primaryKey: 'id',
  properties: {
    id: 'int',
    itemId: 'string',
    name: 'string',
    category: 'string?',
    type: 'string?',
    externalId: 'string?',
    status: 'int',
    description: 'string?',
    createdTimestamp: 'date?',
    updatedTimestamp: 'date?',
  },
};

export async function storeIntoDb(sampleModels: ReadonlyArray<SampleModel>) {
  try {
    const realm = await open({
      schema: [Schema],
      schemaVersion: 0,
    });

    realm.write(() => {
      realm.deleteAll();

      sampleModels.forEach(model => {
        const updated = {
          ...model,
          updatedTimestamp: model.updatedTimestamp
            ? new Date(model.updatedTimestamp)
            : null,
          createdTimestamp: model.createdTimestamp
            ? new Date(model.createdTimestamp)
            : null,
        };

        realm.create(Schema.name, updated, UpdateMode.All);
      });
    });
  } catch (e) {
    console.error(e);
  }
}
