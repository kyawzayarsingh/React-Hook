//Java Scripts and JQuery Ajax Calls

//Create an object

const Http = new XMLHttpRequest()

//creating Http Response
Http.open('GET', 'https://jsonplaceholder.typicode.com/posts')

//sending Http Response
Http.send()

//using onreadystatechange
Http.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    console.log(Http.responseText)
  }
}

//using onload
// Http.onload = function () {
//   if (this.status === 200) {
//     console.log(this.response)
//     console.log(JSON.parse(this.response))
//   }
// }
