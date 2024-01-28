# ChatGPT Interaction Manager

## Overview
This Node.js project demonstrates the basic concepts of OOP which are
1. Encapsulation - The Interaction, DalleInteraction and PromptManager classes hold their own data and methods.
2. Inheritance - The DalleInteraction class inherits from the Interaction class.
3. Abstraction - The PromptManager class abstracts away the details of the interactions and provides a simple interface for the user to interact with.

## Features
- **Interaction Class**: Basic interaction management, keeps track of prompts and responses
- **PromptManager Class**: Manages all types of interactions, offering add, display, and delete functionalities.
- **DalleInteraction Class**: Inherits from Interaction, specially designed for Dalle prompts with responses. Records the URL of the image returned.
- **Cost Calculation**: Unique feature to calculate the cost of transactions.

## Unique Feature - Transaction Cost Calculation
- This system includes a function to estimate the cost of transactions.
- The cost is calculated based on the number of interactions, with different rates applied for standard text interactions and Dalle interactions (which include images).
- Cost of Dalle: $0.08 per image.
- Cost of ChatGPT: $0.01 per token (a token in this project is a character in the prompt and response).

**Note: These are made up costs.**

## Installation
1. Clone the repository.
2. Navigate to the project directory and run `npm install` to install dependencies.
3. Run `npm start` to run the project.

## Usage
- To add a new interaction: `PromptManager.addInteraction`
- To add a Dalle interaction: `PromptManager.addDalleInteraction`
- To remove an interaction: `PromptManager.removeInteraction`
- To calculate the cost of transactions: `PromptManager.getCostOfTransactions`

## License
This project is licensed under the MIT License - see the LICENSE file for details.
