export default function handleResponseFromAPI(promise) {
  promise.then((value) => {
    console.log("Got a response from the API")
    value
  }, () => { new Error("") })
}