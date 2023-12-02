const issueInput = document.querySelector('.issue-input');
const openIssueContainer = document.querySelector('.open-list');
const issueForm = document.querySelector('.issue-form');

const descriptionText = document.querySelector('.description-text');

console.log(descriptionText);

function addIssue(e) {
  e.preventDefault();
  const issueTitle = issueInput.value;
  const span = document.createElement('span');
  span.innerHTML = issueTitle;

  // Create a div to add description to the issues
  const descriptionDiv = document.createElement('div');
  descriptionDiv.innerHTML = `<strong>Descriptions</strong>: ${descriptionText.value}`;

  const li = document.createElement('li');
  li.appendChild(span);
  li.appendChild(descriptionDiv);

  openIssueContainer.appendChild(li);

  // input.value = '';
  console.log(`${descriptionText.value}`);

  issueInput.value = '';
  descriptionText.value = '';
}

issueForm.addEventListener('submit', addIssue);

/*

const issueInput = document.querySelector('.issue-input');
const OpenIssueContainer = document.querySelector('.open-list');
const addBtn = document.querySelector('.add-btn');
const issueForm = document.querySelector('.issue-form');

function addIssue(e) {
  e.preventDefault();
  const input = e.target.firstElementChild;
  const span = document.createElement('span');
  span.innerHTML = input.value;
  const li = document.createElement('li');
  li.appendChild(span);
  OpenIssueContainer.appendChild(li);

  //create a div to add description to the issues;
}

issueForm.addEventListener('submit', addIssue);

function spanClick(e) {
  console.log("So, you've clicked the span.");
  div.appendChild(this);
}

var span = document.getElementById('demo'),
  div = document.getElementById('recipient');

span.addEventListener('click', spanClick);
*/
