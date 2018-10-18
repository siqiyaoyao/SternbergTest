import { StbTestModule } from './stb-test.module';

describe('StbTestModule', () => {
  let stbTestModule: StbTestModule;

  beforeEach(() => {
    stbTestModule = new StbTestModule();
  });

  it('should create an instance', () => {
    expect(stbTestModule).toBeTruthy();
  });
});
