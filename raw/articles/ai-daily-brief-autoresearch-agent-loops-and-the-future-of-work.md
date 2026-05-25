# Autoresearch, Agent Loops, and the Future of Work
**Source:** https://aidailybrief.beehiiv.com/p/autoresearch-agent-loops-and-the-future-of-work
**Date:** 2026-03-09
**Author:** AI Daily Brief
**Score:** TBD | **Concepts:** TBD
**Scoring reason:** Bridged from take_engine (no takes generated yet; pending next pipeline run).

0
The AI Daily Brief
Posts
Autoresearch, Agent Loops, and the Future of Work
Autoresearch, Agent Loops, and the Future of Work
March 9, 2026 · Episode Links & Takeaways
AI Daily Brief
March 09, 2026
▶ Listen to the episode
MAIN STORY
Autoresearch, Agent Loops, and the Future of Work
Andrej Karpathy's weekend project — a tiny repo called autoresearch — looks like an ML tool on the surface. But the pattern it demonstrates is arguably a new work primitive: the agentic loop. Combine it with the Ralph Wiggum loop that emerged a couple months ago, and you have a framework that could reshape how work gets done across every function and industry. Every work process that can have success measured and scored objectively is going to have people experimenting with agentic loops around it.
THE AGENT LOOP THAT WILL EAT EVERYTHING
What Autoresearch Actually Is
Three files are all that matter. prepare.py is fixed infrastructure. train.py is the single file the AI agent is allowed to edit — model architecture, hyperparameters, everything. And program.md is the most conceptually important: a plain English document that tells the agent how to behave as a researcher. The human writes the memo, the agent executes research within that frame, and a single unambiguous number (validation bits per byte) tells you if things are getting better or worse. Every run gets a fixed five-minute budget. Keep the winners, revert the losers, repeat indefinitely.
Karpathy's session showed 83 experiments, 15 improvements kept, running on a single consumer GPU overnight. As he put it: you are not touching the Python files anymore. You are programming the
program.md
.
Andrej Karpathy (X)
Autoresearch announcement
Karpathy GitHub
Autoresearch repo
Garry Tan
Karpathy Just Turned One GPU Into a Research Lab
The Connection to the Ralph Wiggum Loop
The Ralph Loop — named for the lovably persistent Simpsons character — is a software development loop that keeps running, feeding an agent's output back in and iterating until it works. Memory doesn't live in the context window; it lives in files, git commits, and a progress.txt that each agent appends to. Every new agent instance bootstraps from external artifacts, not conversation history. Individual sessions might not be perfect, but the loop corrects over time.
Autoresearch takes this further: instead of looping until a task is done, you give the agent a benchmark to continuously improve against. As one commenter put it: the goal isn't completion, it's continuous improvement against a measurable target.
Bigger Than ML Research
Craig Hewitt called it "the cleanest example of the agent loop that's about to eat everything." Daniel Meisler called it "automation of the scientific method."
The code is almost irrelevant — the architecture and mindset is everything. The pattern works anywhere you have: a scoreable outcome, fast and cheap iterations, a bounded environment, low cost of failure, and the ability for the agent to leave traces.
Craig Hewitt (X)
The agent loop that's about to eat everything
Daniel Miessler (X)
Automation of the scientific method
Chase (X)
The framework could be applied to anything
Cofounders Nik (X)
The Ralph Wiggum loop for science
Garry Tan (X)
The bottleneck isn't compute — it's your
program.md
Applying the Pattern Beyond ML
Vadim, CEO of Ola, built a version for his whole company — every agent reads and writes to a shared learnings.md file, turning isolated processes into a network that accumulates knowledge. His marketing team's first test: 15 inboxes, 300 cold emails per day, the agent modifying one variable per experiment, scoring on positive reply rate. Roberto Nickson mapped it onto advertising: define success, generate thousands of variations, test against live audiences, keep what works, kill what doesn't — the campaign becomes a living organism evolving toward your goals.
Vadim Strizheus (X)
I built a version of this for my whole company
Roberto Nickson (X)
The autoresearch model applied to advertising
What Comes Next: Collaborative Agent Swarms
Karpathy himself says the next step is making autoresearch "asynchronously massively collaborative for agents — think SETI@home style."
The goal isn't emulating a single PhD student, it's emulating a research community of them. GitHub is almost but not quite suited for this — it assumes one master branch that temporarily forks. Agents can juggle thousands of commits across arbitrary branch structures. "Existing abstractions will accumulate stress as intelligence, attention, and tenacity cease to be bottlenecks."
The missing layer, as several people noted, is memory across the swarm. Blake Herron: you need a semantic memory layer so agent 47 knows agent 12 already tried that direction. Kathy F: the real unlock is when agents can share negative results efficiently — every failure prunes the search tree for everyone.
Karpathy (X)
The next step — asynchronously massively collaborative
Tobi Lutke (X)
Used autoresearch overnight, woke up to +19% score
Karpathy (X)
Who knew early singularity could be this fun?
The New High-Value Skills
Our comparative advantage as humans keeps retreating to higher levels of abstraction.
The new high-value skills around agent loops are arena design (writing the program.md), evaluator construction (building the score function — being able to tell the agent what "good" actually is), loop operation, and problem decomposition. An experiment worth running this week: find the things you repeatedly do where you know what better looks like. If you can encapsulate that judgment clearly enough for an agent to use as a score, you might be able to point a loop at that part of your job overnight. That likely gives you a preview of the next version of your job.
Already Being Productized
Claude Code shipped /loop on Saturday — scheduled recurring tasks for up to three days. Open Claw's heartbeat fires every 30 minutes by default, creating the core loop of any agent. If you figured out vibe coding, figure out agentic loops — you will literally run looping circles around everyone else.
Boris Cherney (X)
Claude Code /loop launch