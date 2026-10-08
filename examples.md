```markdown
# Example Decisions

These examples show how the demo routes different kinds of requests.

## Example 1: AI Responds

**Message**

> What time does your office open?

**Decision**

```json
{
  "action": "AI_RESPOND",
  "reason": "WITHIN_AUTHORITY",
  "explanation": "The request is low-risk and can be answered with available information.",
  "ai_can_continue": true
}
```

**Why**

The request is straightforward, low-risk, and does not require human judgment.

---

## Example 2: Human Review Required

**Message**

> Is that property still available?

**Decision**

```json
{
  "action": "AI_REVIEW_REQUIRED",
  "reason": "UNVERIFIED_INFORMATION",
  "explanation": "The AI can prepare a response, but the information should be verified before sending.",
  "ai_can_continue": true
}
```

**Why**

Current availability is time-sensitive. The AI should not guess or present stale information as current.

---

## Example 3: Human Handoff Required

**Message**

> Can you negotiate the price for me?

**Decision**

```json
{
  "action": "HUMAN_HANDOFF_REQUIRED",
  "reason": "HUMAN_JUDGMENT_REQUIRED",
  "explanation": "The request requires human judgment, negotiation, or direct human involvement.",
  "ai_can_continue": false
}
```

**Why**

Negotiation requires judgment, authority, and accountability that should remain with a human.

---

## Example 4: Clarification Required

**Message**

> What about that one?

**Decision**

```json
{
  "action": "CLARIFICATION_REQUIRED",
  "reason": "MISSING_CONTEXT",
  "explanation": "The request does not contain enough context for a reliable response.",
  "ai_can_continue": true
}
```

**Why**

The message does not contain enough context to know what the user is referring to. The right move is to clarify rather than guess.

---

## The Point

The goal is not to make the AI answer as often as possible.

The goal is to make the right decision about when AI should act, when it should ask, and when a human should take over.
