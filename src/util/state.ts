// Shared state

import { createStore } from '@stencil/store';

const { state, onChange } = createStore({
  user: null,
  context: null,
  app: null,
});

onChange('user', value => {
  state.user = value;
});

// Convenience copy to state.user for later reference
onChange('context', value => {
  console.debug('hub-radar-components: state.context', value.session.toCredential());
  state.context = value;
  state.user = value?._currentUser;
});

export default state;
