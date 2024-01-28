export class Interaction {
  constructor(prompt, response) {
    this.validatePrompt(prompt);
    this.validateResponse(response);
    this.prompt = prompt;
    this.response = response;
  }

  validatePrompt(prompt) {
    if (!prompt || prompt.length < 2) {
      throw new Error(
        `[Error] Prompt must be defined and must be at least two character long (passed prompt length: ${prompt.length})`,
      );
    }
  }

  validateResponse(response) {
    if (!response || response.length < 3) {
      throw new Error(
        `[Error] Response must be defined and must be at least three character long (passed response length: ${response.length})`,
      );
    }
  }

  show() {
    const output = `Prompt: ${this.prompt}
Response: ${this.response}`;
    console.log(output);
  }
}
