import { CheckListExampleModule } from './check-list-example.module';

describe('CheckListExampleModule', () => {
  let checkListExampleModule: CheckListExampleModule;

  beforeEach(() => {
    checkListExampleModule = new CheckListExampleModule();
  });

  it('should create an instance', () => {
    expect(checkListExampleModule).toBeTruthy();
  });
});
