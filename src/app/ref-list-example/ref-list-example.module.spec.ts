import { RefListExampleModule } from './ref-list-example.module';

describe('RefListExampleModule', () => {
  let refListExampleModule: RefListExampleModule;

  beforeEach(() => {
    refListExampleModule = new RefListExampleModule();
  });

  it('should create an instance', () => {
    expect(refListExampleModule).toBeTruthy();
  });
});
