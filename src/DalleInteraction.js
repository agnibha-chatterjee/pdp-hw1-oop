import { Interaction } from "./Interaction.js";

export class DalleInteraction extends Interaction {
  type = "DalleInteraction";

  constructor(prompt, response, imageUrl) {
    super(prompt, response);
    this.validateImageUrl(imageUrl);
    this.imageUrl = imageUrl;
  }

  validateImageUrl(imageUrl) {
    if (!imageUrl) {
      throw new Error("[Error] ImageUrl must be provided");
    }

    if (!imageUrl.startsWith("http")) {
      throw new Error("[Error] ImageUrl is invalid, it must be a valid URL");
    }
  }

  isDalle() {
    return this.type === "DalleInteraction";
  }

  async show() {
    const output = `Prompt: ${this.prompt}
Response: ${this.response}
Image URL: ${this.imageUrl}
`;
    console.log(output);
  }
}
