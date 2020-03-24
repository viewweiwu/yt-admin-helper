import * as vscode from 'vscode';
class VueHoverProvider implements vscode.HoverProvider {
	public provideHover(
			document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken):
			Thenable<vscode.Hover> {
		return new Promise((resolve, reject) => {
			return resolve(new vscode.Hover([
				`
- nihao
- wobuzhidao
## 333
\`\`\`javascript
let a = 1
\`\`\`
				`
			]));
		});
	}
}

export function activate(context: vscode.ExtensionContext) {
	context.subscriptions.push(vscode.languages.registerHoverProvider('vue', new VueHoverProvider()));
}

export function deactivate() {}
