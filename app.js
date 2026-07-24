let btn = document.querySelector('#btn');
let div = document.querySelector('#box');

function changeText(){
    div.innerText = 'Style Changed!';
    div.style.backgroundColor = 'green';
    div.style.color ='blue';
    div.style.fontSize = '50px'
}


btn.addEventListener('click', changeText);




// Q2....


async function fetUsers() {

    let controller = new AbortController()

    const timoutId = setTimeout(() =>{
        controller.abort(new Error('Request timeout'))
    }, 3000)

   try{
     let response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        signal: controller.signal
     });

    let users = await response.json()

if(!response){
    throw new Error("Request failed")
}
// console.log(users)
    //  let blog = users.map(user => {
    //     return user
    // }); 
    return users
   } catch(e){
    // document.write(e.message)
   } finally{
    clearTimeout(timoutId)
   }
}
fetUsers().then(res => {
// console.log(res)
      let contents = document.querySelector('#content');
res.forEach(val => {
   let outPut = 
`
  <div class="border flex flex-col shadow-2xl text-blue-500 px-[5%]">
   <h1 class="text-2xl font-black text-[#000] pt-10 pb-5">${val.title}</h1>
    <p class="font-medium">${val.body}</p>
   
 `
    contents.innerHTML += outPut
   });
});