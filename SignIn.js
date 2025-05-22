// Create and append <link> for CSS
const link = document.createElement('link');
link.rel = 'stylesheet';
link.href = 'Styles.css';
document.head.appendChild(link);

// Set <title>
document.title = 'Sign In';

// Body class
document.body.className = 'signin-page';

// HEADER
const header = document.createElement('header');
const nav = document.createElement('nav');
nav.className = 'navbar';

const logoDiv = document.createElement('div');
logoDiv.className = 'logo';
logoDiv.textContent = 'Group 29';

const ul = document.createElement('ul');
ul.className = 'nav-links';

['Home.html', 'SignIn.html', 'ContactUs.html'].forEach((href, i) => {
  const li = document.createElement('li');
  const a = document.createElement('a');
  a.href = href;
  a.textContent = ['Home', 'Sign In', 'Contact Us'][i];
  li.appendChild(a);
  ul.appendChild(li);
});

nav.appendChild(logoDiv);
nav.appendChild(ul);
header.appendChild(nav);
document.body.appendChild(header);

// MAIN CONTAINER
const container = document.createElement('div');
container.className = 'container';

const form = document.createElement('form');
form.className = 'signin-form';
form.action = '#';
form.method = 'post';

const h2 = document.createElement('h2');
h2.textContent = 'Sign In';

const labelEmail = document.createElement('label');
labelEmail.htmlFor = 'email';
labelEmail.textContent = 'Email';

const inputEmail = document.createElement('input');
inputEmail.type = 'email';
inputEmail.id = 'email';
inputEmail.name = 'email';
inputEmail.required = true;

const labelPassword = document.createElement('label');
labelPassword.htmlFor = 'password';
labelPassword.textContent = 'Password';

const inputPassword = document.createElement('input');
inputPassword.type = 'password';
inputPassword.id = 'password';
inputPassword.name = 'password';
inputPassword.required = true;

const button = document.createElement('button');
button.type = 'submit';
button.textContent = 'Sign In';

const p = document.createElement('p');
p.innerHTML = 'Don’t have an account? <a href="Register.html">Register here</a>';

// Append elements to form
form.appendChild(h2);
form.appendChild(labelEmail);
form.appendChild(inputEmail);
form.appendChild(labelPassword);
form.appendChild(inputPassword);
form.appendChild(button);
form.appendChild(document.createElement('br'));
form.appendChild(document.createElement('br'));
form.appendChild(p);

// Append form to container
container.appendChild(form);
document.body.appendChild(container);

// FOOTER
const footer = document.createElement('footer');
const footerText = document.createElement('p');
footerText.innerHTML = '&copy; 2025 Group 29. All rights reserved.';
footer.appendChild(footerText);
document.body.appendChild(footer);

// Include Firebase script (programmatically)
const script = document.createElement('script');
script.type = 'module';
script.src = 'firebase-config.js';
document.body.appendChild(script);
