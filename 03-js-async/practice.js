// 1
setTimeout(() => {
  console.log('Learning Async JS');
}, 3000)
// 2
const fakePromise = () => {
  return new Promise((resolve, reject) => {
    const success = true;
    setTimeout(() => {
      success ? resolve("Data Loaded") : reject('Failed to load data')
    }, 1000)
  })
}
fakePromise()
  .then(res => console.log(res))
  .catch(err => console.log(err));

// 3
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(res => res.json())
  .then(data => console.log(data.title, data.body))
  .catch(err => console.log(err))

// 4
async function getPost(){
 try{
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();
  const threeData = data.slice(0,3);
  threeData.forEach((user=>console.log(`Name: ${user.name}, Email: ${user.email}`)))
 }
 catch(error){
  console.log(error.message);
 }
}