import { PromptManager } from "./PromptManager.js";

function main() {
  const promptManager = new PromptManager();
  promptManager.addInteraction(
    "Hi ChatGPT",
    "Hello! How can I assist you today?",
  );

  promptManager.addInteraction(
    "How are you doing?",
    "I'm just a computer program, so I don't have feelings or personal experiences, but I'm here and ready to assist you with any questions or tasks you might have! How can I help you today?",
  );

  promptManager.addDalleInteraction(
    "Generate an image of a cat",
    "Here is an image of a cat",
    "https://cataas.com/cat",
  );

  promptManager.addDalleInteraction(
    "Generate an image of a dog",
    "Here is an image of a cute dog",
    "https://images.dog.ceo/breeds/coonhound/n02089078_1744.jpg",
  );

  promptManager.displayInteractions();

  promptManager.removeInteraction(2);

  console.log("\nPrinting interactions after removing the second one \n");

  promptManager.displayInteractions();

  promptManager.getCostOfTransactions();

  console.error("Error cases");
  // Code to test input validation

  try {
    // Deleting an invalid id
    promptManager.removeInteraction(25);
  } catch (error) {
    console.error(error.message);
  }

  try {
    // Adding a regular interaction with an empty prompt
    promptManager.addInteraction("1", "Hello! How can I assist you today?");
  } catch (error) {
    console.error(error.message);
  }

  try {
    // Adding a regular interaction with an empty response
    promptManager.addInteraction("Hello!", "");
  } catch (error) {
    console.error(error.message);
  }

  try {
    // Adding a dalle interaction with an empty prompt
    promptManager.addDalleInteraction(
      "",
      "Here is an image",
      "https://cataas.com/cat",
    );
  } catch (error) {
    console.error(error.message);
  }

  try {
    // Adding a dalle interaction with an empty response
    promptManager.addDalleInteraction(
      "Give me an image of a cat",
      "",
      "https://cataas.com/cat",
    );
  } catch (error) {
    console.error(error.message);
  }

  try {
    // Adding a dalle interaction with an empty image url
    promptManager.addDalleInteraction(
      "Give me an image of a cat",
      "Here is an image of a cat",
      "",
    );
  } catch (error) {
    console.error(error.message);
  }

  try {
    // Adding a dalle interaction with an invalid image url
    promptManager.addDalleInteraction(
      "Give me an image of a cat",
      "Here is an image of a cat",
      "invalidUrl",
    );
  } catch (error) {
    console.error(error.message);
  }
}

main();
