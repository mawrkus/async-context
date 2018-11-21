const assert = require('assert').strict;

async function asyncDemo({ asyncContextStore, resolveAfter }) {
  asyncContextStore.log('- -- --- async/await: demo1 --- -- -');

  asyncContextStore.set('request.id', 42).logStore();

  await resolveAfter(10, 'timer');

  asyncContextStore.logStore();
  assert.strictEqual(42, asyncContextStore.get('request.id'));

  await resolveAfter(10, 'timer');

  asyncContextStore.logStore().disable();
}

module.exports = asyncDemo;
