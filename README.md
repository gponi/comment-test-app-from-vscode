Installation and Testing Guide
This document provides all the necessary steps to set up the environment, install dependencies, test the extension, and export it as a .vsix file for distribution.

1. Prerequisites
Visual Studio Code
Download and install VS Code.

Node.js and npm

Download from nodejs.org (LTS recommended).
Open a terminal and run:
bash
Copy
node -v
npm -v
to verify installation.
Git (Optional, but recommended)

Download from git-scm.com if not installed.
Verify by running:
bash
Copy
git --version
2. Cloning the Repository
Open a Terminal or Command Prompt.
Navigate to the directory where you want to store the project.
Clone the Repository:
bash
Copy
git clone https://github.com/YourOrgOrUsername/autocommenter.git
Open the Project in VS Code:
bash
Copy
cd autocommenter
code .
3. Installing Dependencies
Open the Integrated Terminal in VS Code (View → Terminal).
Install Required Packages:
bash
Copy
npm install
This installs everything listed in the project’s package.json.
4. Building the Extension
Compile the TypeScript into JavaScript:
bash
Copy
npm run compile
If there are no errors, you should see a new out/ directory with compiled .js files.
5. Testing the Extension (Development Host)
Press F5 in VS Code (or go to the Run and Debug panel and click Run Extension).
A new VS Code window (the Extension Development Host) will open:
Open or create a new C# file.
Trigger any of the extension’s features (e.g., by typing in a method signature).
Check the Console:
Go to View → Output → Extension Host for any messages or logs from the extension.
Stop the Debug Session:
Close the Extension Development Host or return to the Debug sidebar and click the Stop button.
Repeat this step whenever you make code changes and want to test them quickly.

6. Exporting the Extension as a .vsix File
If you need a standalone installable package (e.g., for testers or distributing outside of the Marketplace):

Install the vsce Tool Globally (if not already):
bash
Copy
npm install -g vsce
Create the .vsix Package:
bash
Copy
vsce package
This generates a file like auto-comment-updater-0.0.1.vsix in your project folder.
7. Installing the .vsix File Locally
Testers or team members can install your packaged extension manually:

Open VS Code and go to the Extensions sidebar.
Click the ... (More Actions) Button in the top-right corner.
Select Install from VSIX....
Navigate to Your .vsix File and select it.
Reload or Restart VS Code when prompted.
Now they can test the extension without needing the source code or running it in development mode.

8. Updating the Extension
Make Code Changes in your local repository.
Commit and Push those changes to GitHub:
bash
Copy
git add .
git commit -m "Update extension logic"
git push
Rebuild and Package using the same steps:
bash
Copy
npm run compile
vsce package
Reinstall the Updated .vsix in VS Code.
Troubleshooting & Common Tips
Permission Errors: If you encounter permission issues, try running commands in an elevated terminal (or fix file ownership on your system).
Proxy/Firewall: For corporate environments, ensure npm install can access the npm registry. Configure .npmrc or proxy settings if necessary.
Check Logs: If the extension doesn’t behave as expected, open View → Output → Extension Host to check logs or errors.
Lint/Format: Run npm run lint if configured, to maintain code quality.
That’s it! You now have a fully working pipeline for installing, testing, and distributing the Auto Comment Updater extension. If you have any questions, feel free to ask in the project’s GitHub repository.