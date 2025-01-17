import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  // Register the onDidChangeTextDocument event listener
  const disposable = vscode.workspace.onDidChangeTextDocument(handleDocumentChange);
  context.subscriptions.push(disposable);
}

function handleDocumentChange(event: vscode.TextDocumentChangeEvent) {
  // Logic to handle document changes (such as updating comments)
  const document = event.document;
  if (document.languageId === 'csharp') {
    // Add logic here to update comments
    vscode.window.showInformationMessage('Document changed');
  }
}

export function deactivate() {
  // Cleanup logic when the extension is deactivated
}
