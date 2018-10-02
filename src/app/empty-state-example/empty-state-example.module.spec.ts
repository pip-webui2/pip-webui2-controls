import { EmptyStateExampleModule } from './empty-state-example.module';

describe('EmptyStateExampleModule', () => {
  let emptyStateExampleModule: EmptyStateExampleModule;

  beforeEach(() => {
    emptyStateExampleModule = new EmptyStateExampleModule();
  });

  it('should create an instance', () => {
    expect(emptyStateExampleModule).toBeTruthy();
  });
});
