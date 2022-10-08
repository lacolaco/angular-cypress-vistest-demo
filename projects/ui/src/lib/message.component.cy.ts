import { MessageComponent } from './message.component';

describe('MessageComponent', () => {
  it('mounts', () => {
    cy.mount(MessageComponent, {
      componentProperties: {
        message: 'Hello Angular',
      },
    });
    cy.matchImage({
      maxDiffThreshold: 0.001,
    });
  });
});
