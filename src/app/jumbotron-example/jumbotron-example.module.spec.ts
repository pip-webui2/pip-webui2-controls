import { JumbotronExampleModule } from './jumbotron-example.module';

describe('JumbotronExampleModule', () => {
  let jumbotronExampleModule: JumbotronExampleModule;

  beforeEach(() => {
    jumbotronExampleModule = new JumbotronExampleModule();
  });

  it('should create an instance', () => {
    expect(jumbotronExampleModule).toBeTruthy();
  });
});
