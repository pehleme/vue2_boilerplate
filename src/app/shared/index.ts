import { exampleModule } from '@/app/shared/modules';
import { exampleService } from '@/app/shared/services';
import { Rules } from '@/app/shared/utils';

export const refsService = {
  exampleService,
  exampleModule,

  static: {
    rules: Rules,
  },
};
