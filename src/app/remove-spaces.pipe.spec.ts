// Unit test to check if RemoveSpacesPipe is created successfully.
import { RemoveSpacesPipe } from './remove-spaces.pipe';

describe('RemoveSpacesPipe', () => {
  it('create an instance', () => {
    const pipe = new RemoveSpacesPipe();
    expect(pipe).toBeTruthy();
  });
});
