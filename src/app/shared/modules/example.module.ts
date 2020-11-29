import { store } from '@/app/app-store';
import { ExampleModel } from '@/app/shared/models';
import { refs } from '@/app/shared';
import {
  Action,
  getModule,
  Module,
  Mutation,
  VuexModule,
} from 'vuex-module-decorators';

@Module({ store, name: 'exampleModule', namespaced: true, dynamic: true })
export class ExampleModule extends VuexModule {
  public example: ExampleModel = new ExampleModel();

  @Mutation
  public SET_EXAMPLE(example: ExampleModel) {
    this.example = example;
  }

  @Action({ commit: 'SET_EXAMPLE', rawError: true })
  public async loadExample() {
    return await refs.exampleService.loadExample();
  }
}

export const exampleModule = getModule(ExampleModule);
