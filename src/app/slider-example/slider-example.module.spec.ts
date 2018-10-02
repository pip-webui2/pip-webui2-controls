import { SliderExampleModule } from './slider-example.module';

describe('SliderExampleModule', () => {
  let sliderExampleModule: SliderExampleModule;

  beforeEach(() => {
    sliderExampleModule = new SliderExampleModule();
  });

  it('should create an instance', () => {
    expect(sliderExampleModule).toBeTruthy();
  });
});
