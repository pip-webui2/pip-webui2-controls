import { PartsExampleModule } from './parts-example.module';

describe('PartsExampleModule', () => {
  let partsExampleModule: PartsExampleModule;

  beforeEach(() => {
    partsExampleModule = new PartsExampleModule();
  });

  it('should create an instance', () => {
    expect(partsExampleModule).toBeTruthy();
  });
});
