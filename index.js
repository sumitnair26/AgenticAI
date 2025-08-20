// index.js
const Agent = require('./agent');
const agent = new Agent('TaskBot');

// Example scenarios
const tasks = [
  'Fix login bug',
  'Update server configs urgently',
  'Is database backup required?',
  'Work on this urgently'
];

tasks.forEach((task) => {
  agent.observe(task);
  const decision = agent.decide();
  agent.act(decision, task);
});
