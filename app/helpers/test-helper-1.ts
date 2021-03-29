import Helper from '@glint/environment-ember-loose/ember-component/helper';

export interface ITestHelper1 {
  readonly NamedArgs: { readonly [key: string]: any };
  readonly PositionalArgs: [string] | [];
  readonly Return: string;
}

export default class TestHelper1 extends Helper<ITestHelper1> {
  public compute([param]: ITestHelper1['PositionalArgs'], named: ITestHelper1['NamedArgs']): ITestHelper1['Return'] {
    return param ?? named.foo ?? '';
  }
}

declare module '@glint/environment-ember-loose/registry' {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  export default interface Registry {
    'test-helper-1': typeof TestHelper1;
  }
}
