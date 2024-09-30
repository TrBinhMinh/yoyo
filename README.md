# yoyo

**yoyo** is an Ionic app that provides a user-friendly moderation dashboard for approving or rejecting user-submitted posts. It also includes a feed where users can view content, leave comments, and translate content into their preferred language using AWS Translate.

## Features

- **Moderation Dashboard**: Allows moderators to review, approve, or reject posts submitted by users.
- **User Feed**: Displays user-submitted content and comments.
- **Translation Feature**: Users can translate posts and comments into their preferred language using AWS Translate.

## Project Structure

The project is structured into several components:
- **Moderation Dashboard**: For post management by moderators.
- **Feed**: For displaying user content and comments.
- **AWS Translate Integration**: For content translation.

## Installation

Follow these steps to get started:

1. Clone the repository:
   ```bash
   git clone https://github.com/TrBinhMinh/yoyo.git
   cd yoyo
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

## Running the Project

To run the project in development mode, use the following command:
```bash
npm run dev
```

To build the project for production, use:
```bash
npm run build
```

## Testing

We have included both unit testing and end-to-end testing in this project:

- **Unit Testing**: To run unit tests, use the following command:
  ```bash
  npm run test.unit
  ```

- **End-to-End Testing**: For end-to-end tests, run:
  ```bash
  npm run test.e2e
  ```

## Approach

### 1. Requirement Breakdown

The first step was to carefully read and understand the project requirements. I then broke them down into smaller, manageable tasks to simplify the development process.

### 2. Project Initialization

I initialized the project using Ionic and set up the necessary configuration files. Next, I installed all required packages, including:
- Ionic framework
- AWS SDK for AWS Translate integration
- Testing frameworks for unit and end-to-end testing

### 3. Component Creation

Following the provided design sample, I created the UI components for the moderation dashboard and feed. Special attention was given to ensure a smooth and intuitive user experience.

### 4. Data Mockup

To simulate user interactions, I created a mockup of user-submitted posts and comments. The mock data was mapped to the feed page and moderation dashboard for testing and demonstration purposes.

## Built With

- [Ionic](https://ionicframework.com/)
- [AWS SDK](https://aws.amazon.com/sdk-for-javascript/)
- [npm](https://www.npmjs.com/)
  
## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
```

This README explains the project clearly, outlines the steps for installation and usage, and provides an overview of your development approach. Feel free to adjust the details as needed.
