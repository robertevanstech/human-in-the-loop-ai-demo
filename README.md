# Human-in-the-Loop AI Demo

A practical demonstration of how an AI system can decide when to act, when to pause, and when a human should take over.

The point of this project is not to build another chatbot.

It is to show how AI can operate inside a real workflow with clear boundaries, escalation rules, and human judgment.

## The Problem

In many AI systems, the model is expected to answer every message.

That sounds efficient until the AI reaches a situation where the information is incomplete, the stakes are higher, or human judgment is required.

A better system needs more than a prompt.

It needs a way to decide:

- Can the AI safely continue?
- Does it need clarification?
- Should a human review the response before it is sent?
- Does the AI need to stop and hand control to a person?

That is what this demo explores.

## The Four Possible Outcomes

An incoming message can lead to one of four actions:

### 1. AI Responds

The AI has enough reliable information and the request falls within its authority.

**Example:**

> “What time does your office open?”

The system can answer directly.

---

### 2. Clarification Required

The AI can probably continue, but it needs additional information first.

**Example:**

> “Is that property still available?”

If the system does not have verified current listing information, it should not guess.

Instead, it can ask for clarification or request verified information while remaining active in the conversation.

---

### 3. Human Approval Required

The AI can prepare a response, but the content should be reviewed before it is sent.

**Example:**

A response depends on information that may be sensitive, uncertain, or important enough that a person should verify it first.

The AI drafts the message.

A human reviews it.

The human can approve, edit, or reject it.

---

### 4. Human Handoff Required

The AI should stop responding and transfer control to a person.

**Examples:**

- legal or contract questions
- negotiation requests
- professional judgment
- conflicting information
- explicit requests to speak with a person
- situations where the AI does not have enough authority or reliable information

In these cases, the AI should not pretend it can solve the problem.

It should explain that a human needs to step in and preserve the context so the person does not have to start over.

## Decision Flow

A simplified version of the workflow looks like this:

```text
Incoming Message
       |
       v
Does the AI have enough reliable information?
       |
   +---+---+
   |       |
  No      Yes
   |       |
   v       v
Clarify   Is the request within AI authority?
              |
          +---+---+
          |       |
         No      Yes
          |       |
          v       v
      Human      Can the response be sent safely?
      Handoff          |
                    +--+--+
                    |     |
                   No    Yes
                    |     |
                    v     v
               Approval  AI Responds
```

## Why This Matters

The goal of human-in-the-loop design is not to make AI less useful.

It is to make AI more trustworthy.

A useful AI system should know what it can do, what it should not do, and when another person needs to be involved.

That makes the system safer, easier to adopt, and more practical in real business environments.

## Design Principles

This demo is built around a few principles:

- Do not guess when important information is missing.
- Do not hide uncertainty.
- Preserve context during escalation.
- Keep the AI active when clarification is enough.
- Require approval when the AI can help but should not act alone.
- Fully hand off when human judgment is required.
- Give the human a clear reason for the escalation.
- Make it easy to return work to the AI after the human resolves the issue.

## Example Decision Structure

A simple implementation might return something like:

```json
{
  "action": "HUMAN_HANDOFF_REQUIRED",
  "reason": "PROFESSIONAL_JUDGMENT",
  "explanation": "The user is asking for advice that requires human judgment.",
  "ai_can_continue": false
}
```

Or:

```json
{
  "action": "AI_REVIEW_REQUIRED",
  "reason": "UNVERIFIED_INFORMATION",
  "explanation": "The AI can prepare a response, but the information should be verified before sending.",
  "ai_can_continue": true
}
```

## What This Project Demonstrates

This project is meant to demonstrate practical thinking around:

- AI workflow design
- human-in-the-loop systems
- escalation logic
- AI authority boundaries
- structured decision-making
- AI evaluation
- responsible AI
- workflow state
- customer experience
- trust and adoption

## How to Run

This demo uses plain JavaScript and does not require any external libraries.

1. Make sure Node.js is installed.
2. Download or clone this repository.
3. Open a terminal in the project folder.
4. Run:

```bash
node decision_demo.js
```

The script will run several sample messages and print the decision the workflow makes for each one.

## About This Demo

This is a simplified public demonstration based on patterns I use when thinking about real AI-enabled workflows.

It does not contain proprietary production code, private prompts, credentials, customer data, or confidential business logic.

The goal is to make the design thinking visible without exposing private product work.
