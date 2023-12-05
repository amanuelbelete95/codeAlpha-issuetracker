const issueInput = document.querySelector('.issue-input');
const openList = document.querySelector('.open-list');
const progressList = document.querySelector('.progress-list');
const completeList = document.querySelector('.complete-list');
const issueForm = document.querySelector('.issue-form');

const descriptionText = document.querySelector('.description-text');

// save to local storage of open-issue;
function saveToLocalStorage(title, description) {
  const storedOpenIssues = localStorage.getItem('open-issues')
    ? JSON.parse(localStorage.getItem('open-issues'))
    : [];
  storedOpenIssues;

  const newIssue = {
    title: title,
    description: description,
  };

  storedOpenIssues.push(newIssue);

  localStorage.setItem('open-issues', JSON.stringify(storedOpenIssues));
}
//save to localstorage of progress;
const saveToLocalStorageProgress = (title, description) => {
  const storedProgress = localStorage.getItem('progress-issues')
    ? JSON.parse(localStorage.getItem('progress-issues'))
    : [];

  const newProgessIssue = {
    title: title,
    description: description,
  };

  storedProgress.push(newProgessIssue);
  localStorage.setItem('progress-issues', JSON.stringify(storedProgress));
};

const saveToLocalStorageComplete = (title, description) => {
  const storedComplete = localStorage.getItem('complete-issues')
    ? JSON.parse(localStorage.getItem('complete-issues'))
    : [];

  const newCompleteIssues = {
    title: title,
    description: description,
  };

  storedComplete.push(newCompleteIssues);
  localStorage.setItem('complete-issues', JSON.stringify(storedComplete));
};

function addIssue(e) {
  e.preventDefault();
  const issueTitle = issueInput.value;
  const span = document.createElement('span');
  span.innerHTML = issueTitle;
  span.classList.add('issue-title-class');

  const descriptionDiv = document.createElement('div');
  let description = descriptionText.value;
  descriptionDiv.innerHTML = `<strong>Descriptions</strong>: <br/>${description}`;

  const li = document.createElement('li');
  li.appendChild(span);
  li.appendChild(descriptionDiv);
  li.classList.add('open');

  openList.appendChild(li);

  issueInput.value = '';
  descriptionText.value = '';

  saveToLocalStorage(issueTitle, description);
}

const moveToProgress = (e) => {
  if (e.target.parentNode.tagName === 'LI') {
    const li = e.target.parentNode;
    li.classList.add('progress');

    //remove it from the Ui;
    openList.removeChild(li);

    const Data = JSON.parse(localStorage.getItem('open-issues'));

    const upDatedOpenList = Data.filter(
      (item) => item.title !== li.firstElementChild.textContent
    );

    localStorage.setItem('open-issues', JSON.stringify(upDatedOpenList));

    //all about progress ui and local;
    progressList.appendChild(li);
    li.style.backgroundColor = '#00ff00';
    const issueTitle = li.firstElementChild.textContent;
    const desc = li.lastElementChild.textContent;
    saveToLocalStorageProgress(issueTitle, desc);
  }
};
function moveToComplete(e) {
  if (e.target.parentNode.tagName === 'LI') {
    const li = e.target.parentNode;
    li.classList.add('complete');

    //remove it from the Ui;
    progressList.removeChild(li);

    //remove it from local storage here;

    const Data = JSON.parse(localStorage.getItem('progress-issues'));

    const updatedProgressList = Data.filter(
      (item) => item.title !== li.firstElementChild.textContent
    );

    localStorage.setItem(
      'progress-issues',
      JSON.stringify(updatedProgressList)
    );

    completeList.appendChild(li);
    li.style.backgroundColor = '#44444';
    const issueTitle = li.firstElementChild.textContent;
    const desc = li.lastElementChild.textContent;
    saveToLocalStorageComplete(issueTitle, desc);
  }
}

issueForm.addEventListener('submit', addIssue);
openList.addEventListener('click', moveToProgress);
progressList.addEventListener('click', moveToComplete);

//add to user interface of open list;

const UpdateUIOpen = () => {
  const storedIssues = localStorage.getItem('open-issues');
  if (storedIssues) {
    const Data = JSON.parse(localStorage.getItem('open-issues')) || [];

    Data.forEach((data) => {
      const li = document.createElement('li');
      const span = document.createElement('span');
      span.innerHTML = data.title;
      span.classList.add('issue-title-class');
      const div = document.createElement('div');
      div.innerHTML = data.description;
      li.appendChild(span);
      li.appendChild(div);
      openList.appendChild(li);
    });
  }
};

const UpdatedUIProgress = () => {
  const storedProgressIssues = localStorage.getItem('progress-issues');
  if (storedProgressIssues) {
    const data = JSON.parse(localStorage.getItem('progress-issues')) || [];

    data.forEach((item) => {
      const li = document.createElement('li');

      const span = document.createElement('span');
      span.innerHTML = item.title;
      span.classList.add('issue-title-class');

      const div = document.createElement('div');
      div.innerHTML = item.description;

      li.appendChild(span);
      li.appendChild(div);
      progressList.appendChild(li);
    });
  }
};

const UpdatedUIComplete = () => {
  const storedCompleteIssues = localStorage.getItem('complete-issues');
  if (storedCompleteIssues) {
    const data = JSON.parse(localStorage.getItem('complete-issues')) || [];

    data.forEach((item) => {
      const li = document.createElement('li');

      const span = document.createElement('span');
      span.innerHTML = item.title;
      span.classList.add('issue-title-class');

      const div = document.createElement('div');
      div.innerHTML = item.description;

      li.appendChild(span);
      li.appendChild(div);
      completeList.appendChild(li);
    });
  }
};

UpdateUIOpen();
UpdatedUIProgress();
UpdatedUIComplete();
