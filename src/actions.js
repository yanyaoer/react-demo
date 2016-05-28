export default {
  log: (...args)=> ({
    type: 'TEST_LOG',
    payload: args
  }),
  fetch: (url)=> ({
    type: 'TEST_FETCH',
    payload: url
  }),
  reverse: ()=> ({
    type: 'TEST_REVERSE',
  })
}
