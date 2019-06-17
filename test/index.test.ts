import { Greeter } from '../src/index'

describe('Greeter', () => {
  it('should say hello', () => {
    expect(new Greeter('world').greet()).toBe('Hello world!')
  })
})
