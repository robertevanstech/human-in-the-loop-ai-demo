function decideAction(message) {
  const text = message.toLowerCase();

  if (
    text.includes("lawyer") ||
    text.includes("contract") ||
    text.includes("negotiate") ||
    text.includes("speak to a person")
  ) {
    return {
      action: "HUMAN_HANDOFF_REQUIRED",
      reason: "HUMAN_JUDGMENT_REQUIRED",
      explanation:
        "The request requires human judgment, negotiation, or direct human involvement.",
      ai_can_continue: false
    };
  }

  if (
    text.includes("still available") ||
    text.includes("current price") ||
    text.includes("is it active")
  ) {
    return {
      action: "AI_REVIEW_REQUIRED",
      reason: "UNVERIFIED_INFORMATION",
      explanation:
        "The AI can prepare a response, but the information should be verified before sending.",
      ai_can_continue: true
    };
  }

  if (
    text.includes("that property") ||
    text.includes("which one") ||
    text.length < 8
  ) {
    return {
      action: "CLARIFICATION_REQUIRED",
      reason: "MISSING_CONTEXT",
      explanation:
        "The request does not contain enough context for a reliable response.",
      ai_can_continue: true
    };
  }

  return {
    action: "AI_RESPOND",
    reason: "WITHIN_AUTHORITY",
    explanation:
      "The request is low-risk and can be answered with available information.",
    ai_can_continue: true
  };
}

const testMessages = [
  "What time does your office open?",
  "Is that property still available?",
  "Can you negotiate the price for me?",
  "What about that one?"
];

for (const message of testMessages) {
  console.log("\nMessage:", message);
  console.log(decideAction(message));
}
