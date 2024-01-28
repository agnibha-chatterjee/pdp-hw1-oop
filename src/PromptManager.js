import { Interaction } from "./Interaction.js";
import { DalleInteraction } from "./DalleInteraction.js";

export class PromptManager {
  COST_DALLE = 0.08;
  COST_CHATGPT = 0.01;

  constructor() {
    this.interactions = [];
    this.length = 0;
  }

  addInteraction(prompt, response) {
    const newInteraction = new Interaction(prompt, response);
    this.interactions.push({
      id: ++this.length,
      interaction: newInteraction,
      type: newInteraction.type,
    });
  }

  addDalleInteraction(prompt, response, imageUrl) {
    const newDalleInteraction = new DalleInteraction(
      prompt,
      response,
      imageUrl,
    );
    this.interactions.push({
      id: ++this.length,
      interaction: newDalleInteraction,
      type: newDalleInteraction.type,
    });
  }

  removeInteraction(id) {
    if (id > this.length) {
      throw new Error(
        `[Error] No transcation with ID ${id} exists. Please enter a valid ID.`,
      );
    }

    console.log(`----- Removing interaction with ID ${id} -----`);
    this.interactions = this.interactions.filter(
      (interaction) => interaction.id !== id,
    );
    console.log("--------------------------");
  }

  displayInteractions() {
    for (let { id, interaction } of this.interactions) {
      console.log(
        `----- Type : ${interaction.type === "DalleInteraction" ? "Dalle" : "ChatGPT"}, ID : ${id} -----`,
      );
      interaction.show();
      console.log("--------------------------");
    }
  }

  getCostOfTransactions() {
    let totalCost = 0;
    let costDalle = 0;
    let costChatGPT = 0;
    for (let { interaction } of this.interactions) {
      if (interaction.type === "DalleInteraction") {
        totalCost += this.COST_DALLE;
        costDalle += this.COST_DALLE;
      } else {
        totalCost += interaction.prompt.length * this.COST_CHATGPT;
        totalCost += interaction.response.length * this.COST_CHATGPT;
        costChatGPT += interaction.prompt.length * this.COST_CHATGPT;
        costChatGPT += interaction.response.length * this.COST_CHATGPT;
      }
    }
    console.log("----- Cost of transactions -----");
    console.log(`Cost DallE: $${costDalle.toFixed(2)}`);
    console.log(`Cost ChatGPT: $${costChatGPT.toFixed(2)}`);
    console.log(`Total cost: $${totalCost.toFixed(2)}`);
    console.log("-------------------");
  }
}
