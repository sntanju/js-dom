console.log('I am from summary js file');

const blogs = document.getElementsByTagName('p');
// console.log(blogs); 

for(const blog of blogs){
    //console.log(blog);
    blog.style.backgroundColor = 'skyblue';
    blog.style.color = 'white';
}

const harum = document.getElementById('special-blog');
//harum.innerText = 'New Harum';

// harum.innerHTML = `
// <h4>special inner html</h4>
// <div>
// <ul>
// <li> I can </li>
// <li> LOL inside JS</li>
// </ul>
// </div>
// `
const friends = document.getElementById('friends');
console.log(friends.children);
const fifth = friends.children[4];
console.log(fifth);
friends.removeChild(fifth);

//create element
const friend = document.createElement('li');
friend.innerText = 'Friend-11';
friends.appendChild(friend);
