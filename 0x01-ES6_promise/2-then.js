export default function handleResponseFromAPI(promise) {
  promise.then((value) => {
    console.log("Got a response from the API")
    return value
  }, (err) => {
    console.error("Error", err)
    return new Error()
  })
}