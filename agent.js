// agent.js
class Agent {
  constructor(name) {
    this.name = name;
    this.memory = [];
  }

  observe(input) {
    // Agent receives a task
    this.memory.push(input);
    console.log(`[${this.name}] Observed: ${input}`);
  }

  decide() {
    // Agent decides what to do
    const task = this.memory[this.memory.length - 1];
    if (!task) return "No task found";
    if (task.toLowerCase().includes('urgent')) return 'Prioritize';
    if (task.endsWith('?')) return 'Clarify';
    return 'Proceed';
  }

  act(decision, task) {
    // Agent acts based on its decision
    switch (decision) {
      case 'Prioritize':
        console.log(`[${this.name}] Marking task as top priority: "${task}"`);
        break;
      case 'Clarify':
        console.log(`[${this.name}] Asking for clarification about: "${task}"`);
        break;
      case 'Proceed':
        console.log(`[${this.name}] Working on: "${task}"`);
        break;
      default:
        console.log(`[${this.name}] No action taken.`);
        break;
    }
  }
}

module.exports = Agent;
