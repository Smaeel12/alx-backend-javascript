export default function handleResponseFromAPI(promise) {
  promise.then(() => {
    console.log('Got a response from the API');
    return {
      status: 200,
      body: 'success',
    };
  }, (err) => {
    console.error('Error', err);
    return new Error();
  });
}
