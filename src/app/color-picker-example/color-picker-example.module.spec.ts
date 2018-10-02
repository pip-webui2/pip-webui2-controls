import { ColorPickerExampleModule } from './color-picker-example.module';

describe('ColorPickerExampleModule', () => {
  let colorPickerExampleModule: ColorPickerExampleModule;

  beforeEach(() => {
    colorPickerExampleModule = new ColorPickerExampleModule();
  });

  it('should create an instance', () => {
    expect(colorPickerExampleModule).toBeTruthy();
  });
});
