import { HttpService } from '@/app/shared/config';
import { ExampleModel } from '@/app/shared/models';
import { env } from '@/environments';

export class ExampleService extends HttpService {
  public async loadExample(): Promise<ExampleModel> {
    return await this.get<ExampleModel>(`${env.baseUrl}/example`).then(
      ({ data }) => data
    );
  }
}

export const exampleService = new ExampleService();
