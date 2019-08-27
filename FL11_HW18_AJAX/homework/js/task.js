const url = 'https://jsonplaceholder.typicode.com/users';
let urId = 0;
let formElem = document.getElementById('formElem');

let otherInfo = {};
let req = new Request(url, {
  method: 'GET',
  mode: 'cors'
});
showLoader();
fetch(req)
  .then( (response) => {
    if(response.ok) {
      return response.json();
    } else {
      throw new Error('Bad HTTP');
    }
  })
  .then( (jsonData) =>{
    console.log(jsonData);
    hideLoader();
    let ul = document.querySelector('#users');
    let df = new DocumentFragment();
    otherInfo = {...jsonData[0]};
    jsonData.forEach( (user) =>{
      createElem(user, df);
    });
    ul.appendChild(df);
})
  .catch( (err) => {
    console.log('ERROR', err.message);
  });
  function createElem(user, df) {
    let li = document.createElement('li');
    let obj = { name: user.name, username: user.username, email: user.email};
    li.id = user.id;
    li.onclick = (() => getInfo(obj,li.id));
    let pn = document.createElement('p');
    let pue = document.createElement('p');
    pn.textContent = user.name;
    pue.textContent = ''.concat(user.username, ' - ', user.email);
    pn.className = 'name';
    pue.classList.add('info');
    li.appendChild(pn);
    li.appendChild(pue);
    df.appendChild(li);
}

// function createPost(post,df) {
//   let li = document.createElement('li');
//   li.id = post.userId;
//   li.onclick = (() => getInfo(obj,li.id));
//   let pn = document.createElement('p');
//   let pue = document.createElement('p');
//   pn.textContent = post.title;
//   pue.textContent = post.body;
//   pn.className = 'name';
//   pue.classList.add('info');
//   li.appendChild(pn);
//   li.appendChild(pue);
//   df.appendChild(li);
// }

function getInfo(o,par) {
  let input = document.getElementsByTagName('input');
  let count = 0;
  urId = par;
  for (key in o)
  {
    input[count].value = o[key];
    count++;
  }
}
  formElem.onsubmit = (e) => {
    e.preventDefault();
    let input = document.getElementsByTagName('input');
    showLoader();
    fetch(`https://jsonplaceholder.typicode.com/users/${urId}`, {
      method: 'PUT',
      body: JSON.stringify({name: input[0].value, username: input[1].value, email: input[2].value}),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
    }).then(response => {
      hideLoader();
      return response.json();})
    .then(text => changeList(text))
    console.log(input[0].value);
    //console.log(JSON.stringify({...otherInfo,name: input[0].value, username: input[1].value, email: input[2].value}));
  };
  function changeList(updatedData) {
    let elem = document.getElementById(`${urId}`);
    elem.childNodes[0].innerText = updatedData.name;
    elem.childNodes[1].innerText = updatedData.username + ' - ' + updatedData.email;
  }
    let dl = document.getElementById('del');
    dl.onclick = () => {
      showLoader();
      fetch(`https://jsonplaceholder.typicode.com/users/${urId}`, {
      method: 'DELETE'
    })
    .then(() => {document.getElementById(`${urId}`).remove();hideLoader();})
   }


   function showLoader() {
    let loader =  document.getElementById('loader');
    loader.style.display = 'block';
   }

   function hideLoader() {
    let loader =  document.getElementById('loader');
    loader.style.display = 'none';
   }
  //  function getPosts(userId) {
  //   fetch(`https://jsonplaceholder.typicode.com/posts/${1}`, {
  //     method: 'GET'
  //   }).then(response => response.json())
  //   .then(text => {
  //     let ul = document.querySelector('#users');
  //     let df = new DocumentFragment();
  //     text.forEach(element => {createPost(element,df)});
  //   ul.appendChild(df);
  //   })
  //  }