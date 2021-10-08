import ArrayBufferConverter from '../app';
import getBuffer from '../get-buffer';

const data = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';

describe('test app.js', () => {
  it('should load buffer', () => {
    const converter = new ArrayBufferConverter();
    converter.load(getBuffer());

    expect(converter.toString()).toEqual(data);
  });
});
