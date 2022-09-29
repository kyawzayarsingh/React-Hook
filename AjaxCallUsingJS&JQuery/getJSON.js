// $.getJSON('https://jsonplaceholder.typicode.com/posts', function (response) {
//   console.log(response)
// })

// fetch('https://jsonplaceholder.typicode.com/posts', {
//   method: 'GET',
// })
//   .then((res) => res.json())
//   .then((json) => console.log(json))

let data = {
  userId: 11,
  id: 101,
  title: 'This is new Post',
  body: 'Adding new Post using Ajax POST Method',
}

fetch('https://jsonplaceholder.typicode.com/posts', {
  headers: {
    'Content-Type': 'application/json',
    // 'Content-Type': 'application/x-www-form-urlencoded',
  },
  method: 'POST',
  body: JSON.stringify(data),
}).then((res) => {
  alert('success')
  console.log(res.json())
})
