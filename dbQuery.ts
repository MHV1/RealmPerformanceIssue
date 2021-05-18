// import { ObjectSchema, open, UpdateMode } from 'realm';
import { NativeModules } from 'react-native';
import { SampleModel } from './model';

export async function storeIntoDb(
  sampleModels: ReadonlyArray<SampleModel>
): Promise<void> {
  const foo = await NativeModules.RealmModule.test(
    JSON.stringify(sampleModels)
  );

  console.log(foo);
}
