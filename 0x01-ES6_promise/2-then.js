export default function handleResponseFromAPI(promise) {
  promise.then(() => ({
    status: 200,
    body: 'success',
  }), (err) => {
    console.error('Error', err);
    return new Error();
  }).finally(() => console.log('Got a response from the API'));
}
