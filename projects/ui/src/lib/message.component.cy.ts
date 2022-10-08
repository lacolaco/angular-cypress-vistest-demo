import { MessageComponent } from './message.component';

describe('MessageComponent', () => {
  it('mounts', () => {
    cy.mount(MessageComponent, {
      componentProperties: {
        message: 'Hello World',
      },
    });
    cy.matchImage({
        maxDiffThreshold: 0.001,
    });
  });
});
