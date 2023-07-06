//*========================================
//*             3- FETCH API
//*========================================

//? Dis kaynaklardan veri getirmek icin kullanilan basit bir arabirimdir.
//? Ag istekleri yapmamizi ve cevaplari yontebilmemize olanak saglar.
//? Javascript ortaminda en cok kullanilan Asenkron islem orneklerinin basinda
//? gelmektedir.

//? fetch() fonksiyonu veri getirmek istediginiz kaynagin yolunu gosteren zorunlu
//? bir parametre almaktadir ve bu istegin cevabini gosteren bir Promise dondurmektedir.

console.log("FETCH")

// fetch("https://api.github.com/users")
// .then((res)=> res.json())
// .then((data) => console.log(data))
// .catch((err)=>console.log(err))

// fetch("https://api.github.com/users")
// .then((res)=> res.json())
// .then((data) => showGithubUsers(data))
// .catch((err)=>console.log(err))
  
// const showGithubUsers = (users)=>{
// const userArticle = document.querySelector('.users')

// users.forEach(user  => {
//   userArticle.innerHTML +=` 
//   <h2 class="h6 text-warning">${user.login}</h2>
  
//   <img class="w-50" src="${user.avatar_url}" alt="" />`
// });
// }


    //! Error Handling
  
    fetch("https://api.github.com/user")
    .then((res)=> {
      console.log(res);
      // if(res.status>=200 && res.status<=299)
      if (!res.ok){
        throw new Error(`something went wrong: ${res.status}`)
      }
      return res?.json()
    })
    .then((data) => showGithubUsers(data))
    .catch((err)=>{
      console.log(err)
      const userArticle = document.querySelector('.users')
      userArticle.innerHTML +=` 
       <h2 class="display-6 text-warning">${err}</h2>`
    })
      
    const showGithubUsers = (users)=>{
    const userArticle = document.querySelector('.users')
    
    users.forEach(user  => {
      userArticle.innerHTML +=` 
      <h2 class="h6 text-warning">${user.login}</h2>
      
      <img class="w-50" src="${user.avatar_url}" alt="" />`
    });
    }