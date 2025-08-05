#  LegalEase AI – Your Personal Legal Assistant

LegalEase AI is a smart, interactive legal assistant powered by large language models (LLMs). Designed to simplify legal research, generate contract drafts, explain complex legal terms, and answer law-related questions, LegalEase uses advanced AI capabilities like system/user prompting, structured outputs, function calling, and RAG to deliver intelligent and trustworthy assistance.

---

##  Features

###  System vs. User Prompts

- **System Prompt:**  
  Defines the AI’s persona, behavior, and expertise.  
  Example: `"You are a professional legal assistant. Speak formally, provide concise yet complete legal help."`

- **User Prompt:**  
  Varies based on the user’s input.  
  Example: `"Can you explain the difference between an MOU and a contract?"`

This separation ensures consistent tone, clarity, and expert-level communication.

---

###  Tuning Parameters

- `temperature`: Controls randomness. Set low (0.2–0.5) for factual/legal outputs.
- `top_p`: Balances creativity vs. reliability.
- `max_tokens`: Restricts length of responses (e.g., to limit contract size).
- `frequency_penalty` & `presence_penalty`: Reduce repetition, ensure new insights.


---

###  Structured Output

When appropriate, LegalEase provides responses in structured formats like:

```json
{
  "term": "Non-Disclosure Agreement",
  "definition": "...",
  "uses": ["Startup pitches", "Hiring lawyers"],
  "important_clauses": ["Confidentiality", "Exclusions", "Term"]
}
