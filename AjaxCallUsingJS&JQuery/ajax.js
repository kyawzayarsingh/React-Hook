// $.ajax({
//   url: 'https://jsonplaceholder.typicode.com/posts',
//   type: 'GET',
//   success: function (response) {
//     // console.log(response)
//     //looping array of JSON Objects
//     $.each(response, function (i, obj) {
//       // console.log(obj)
//       $.each(obj, function (key, value) {
//         console.log(value)
//       })
//     })
//   },
//   error: function (error) {
//     console.log(error)
//   },
// })

let obj = {
  userId: 11,
  id: 101,
  title: 'This is new Post',
  body: 'Adding new Post using Ajax POST Method',
}

$.ajax({
  url: 'https://jsonplaceholder.typicode.com/posts',
  type: 'POST',
  data: obj,
  success: function (res) {
    alert('Created Successfully')
    console.log(res)
  },
  error: function () {
    alert('Cannot created')
  },
  complete: function (xhr, status, strError) {
    console.log(xhr)
    console.log(status)
    console.log(strError)
    //success phyit phyit, error phyit phyit, complete funciton ka alote lote mar pl
    //yay ll ya tl, ma yay ll ya tl
    console.log('the request is completed')
  },
})
