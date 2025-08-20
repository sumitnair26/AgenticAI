# Agentic AI Baby Step in Node.js

This is a straightforward demonstration of building your first **Agentic AI** in Node.js. The agent observes tasks, decides what to do based on those tasks, and acts accordingly. It serves as a practical introduction to agent-based models for developers with a Node.js background.

---

## Project Structure

- `agent.js` — Defines the basic Agent class, modeling Observe → Decide → Act.
- `index.js` — Sample usage for the agent, showing it handle a variety of input tasks.

---

## How It Works

1. **Observe:** The agent receives an input task.
2. **Decide:** The agent analyzes the task and makes a decision (prioritize, clarify, proceed).
3. **Act:** The agent executes an action based on its decision.

---

## Getting Started

1. **Clone or Download the Project**

    ```
    git clone https://github.com/yourusername/agentic-ai-demo.git
    cd agentic-ai-demo
    ```

2. **Install Dependencies**
    
    > No external dependencies are required for this basic demo.

3. **Run the Demo**

    ```
    node index.js
    ```

---

## Example Output

— [TaskBot] Observed: Fix login bug. 

— [TaskBot] Working on: "Fix login bug".

— [TaskBot] Observed: Update server configs urgently.

— [TaskBot] Marking task as top priority: "Update server configs urgently".

— [TaskBot] Observed: Is database backup required?.

— [TaskBot] Asking for clarification about: "Is database backup required?".

— [TaskBot] Observed: Work on this urgently.

— [TaskBot] Marking task as top priority: "Work on this urgently".

