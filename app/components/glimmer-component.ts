import Component from '@glint/environment-ember-loose/glimmer-component';

export interface IGlimmerComponent {
  Args: {
    index: number;
  };
}

export default class GlimmerComponent extends Component<IGlimmerComponent> {}

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    'glimmer-component': typeof GlimmerComponent;
  }
}
