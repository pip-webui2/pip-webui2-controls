import { SearchInputExampleModule } from './search-input-example.module';

describe('SearchInputExampleModule', () => {
  let searchInputExampleModule: SearchInputExampleModule;

  beforeEach(() => {
    searchInputExampleModule = new SearchInputExampleModule();
  });

  it('should create an instance', () => {
    expect(searchInputExampleModule).toBeTruthy();
  });
});
