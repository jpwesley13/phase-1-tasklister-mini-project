document.addEventListener("DOMContentLoaded", () => {
  // const newQuests = document.getElementbyId("new-task-description")
  
  let form = document.querySelector("form")
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    editQuests(e.target.tasks.value)
    form.reset()
  })
});

function editQuests(todo){
  let p = document.createElement('p')
  let btn = document.createElement('button')
  btn.addEventListener('click', removeQuest)
  btn.textContent = 'x'
  p.textContent = `${todo} `
  p.appendChild(btn)
  document.querySelector('#list').appendChild(p)
}

function removeQuest(e){
  e.target.parentNode.remove()
}

//extra tasks https://learning.flatironschool.com/courses/7100/assignments/260399?module_item_id=619034