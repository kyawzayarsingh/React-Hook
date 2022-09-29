// fetch('https://jsonplaceholder.typicode.com/posts')
//   .then((res) => {
//     return res.json()
//   })
//   .then((json) => {
//     console.log(json)
//   })

//second approach
async function getAllPosts() {
  let response = await fetch('https://jsonplaceholder.typicode.com/posts')
  let data = await response.json()
  return data
}

getAllPosts().then((res) => {
  console.log(res)
})
