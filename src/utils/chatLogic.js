// List of common words to ignore when matching keywords
const STOP_WORDS = new Set(['what', 'how', 'do', 'i', 'to', 'the', 'a', 'an', 'is', 'in', 'of', 'and', 'for', 'about', 'can', 'you', 'my', 'where', 'when', 'are']);

function extractKeywords(text) {
  return text.toLowerCase()
    .replace(/[^\w\s]/g, '') // remove punctuation
    .split(/\s+/)
    .filter(word => word.length > 2 && !STOP_WORDS.has(word));
}

export function getAssistantResponse(query, countryData) {
  if (!query || !countryData) return "I'm not sure how to help with that.";

  const normalizedQuery = query.toLowerCase();
  
  // Greetings
  if (/^(hi|hello|hey|greetings|help)/i.test(normalizedQuery.trim())) {
    return `Hello! I'm your assistant for the ${countryData.name} election process. You can ask me about specific steps (like registration or campaigning) or general questions.`;
  }

  const queryKeywords = extractKeywords(query);

  if (queryKeywords.length === 0) {
    return "Could you please provide more details? Try asking about 'registration' or 'voting'.";
  }

  // 1. Check FAQs first
  let bestFaq = null;
  let maxFaqScore = 0;

  for (const faq of countryData.faqs) {
    const faqKeywords = extractKeywords(faq.question + " " + faq.answer);
    let score = 0;
    
    for (const keyword of queryKeywords) {
      if (faqKeywords.includes(keyword)) score += 2; // Exact word match
      else if (faqKeywords.some(fk => fk.includes(keyword) || keyword.includes(fk))) score += 1; // Partial match
    }

    if (score > maxFaqScore) {
      maxFaqScore = score;
      bestFaq = faq;
    }
  }

  // 2. Check Timeline Steps
  let bestStep = null;
  let maxStepScore = 0;

  for (const step of countryData.timeline) {
    const stepText = step.title + " " + step.description;
    const stepKeywords = extractKeywords(stepText);
    let score = 0;
    
    for (const keyword of queryKeywords) {
      if (stepKeywords.includes(keyword)) score += 2; // Exact word match
      else if (stepKeywords.some(sk => sk.includes(keyword) || keyword.includes(sk))) score += 1; // Partial match
    }

    if (score > maxStepScore) {
      maxStepScore = score;
      bestStep = step;
    }
  }

  // Decide between FAQ and Step
  if (maxStepScore === 0 && maxFaqScore === 0) {
     return "I couldn't find specific information about that. Try checking the FAQ section below or rephrasing your question! For example, you can ask about 'registration' or 'voting'.";
  }

  if (maxStepScore >= maxFaqScore && bestStep) {
    let response = `Regarding **${bestStep.title}**: <br/>${bestStep.description}`;
    if (bestStep.link) {
      response += `<br/><br/>You can check out more details here: <a href="${bestStep.link}" target="_blank" rel="noopener noreferrer" style="color: var(--primary); text-decoration: underline;">Official Resource</a>`;
    }
    return response;
  }

  if (bestFaq) {
    return bestFaq.answer;
  }
}
