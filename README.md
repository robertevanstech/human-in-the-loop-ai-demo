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
