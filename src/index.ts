export const HELLO = "hello";

/**
 * Example interface
 */
export interface IFoo {
  bar: string;
}

/**
 *
 * @param val Example parameter
 * @returns An example return object.
 *
 * ```ts
 * const exampleResult = getFoo("bar");
 * ```
 */
export const getFoo = (val: string): IFoo => ({ bar: val });

/**
 * Example class.
 */
export class MyClass {
  foo: string;

  /**
   * Example constructor.
   * @param foo Example constructor param.
   */
  constructor(foo: string) {
    this.foo = foo;
  }

  /**
   * Example method.
   * @returns A greeting.
   */
  public hello(): string {
    return HELLO;
  }
}
