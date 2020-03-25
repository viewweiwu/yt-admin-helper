import * as vscode from 'vscode';
import YtSearchTable from './hover/yt-search-table';
import YtButton from './hover/yt-button';
import YtCard from './hover/yt-card';
import YtCtrl from './hover/yt-ctrl';
import YtDialog from './hover/yt-dialog';
import YtDialogForm from './hover/yt-dialog-form';

const components = [
	YtSearchTable,
	YtButton,
	YtCard,
	YtCtrl,
	YtDialog,
	YtDialogForm
];

class VueHoverProvider implements vscode.HoverProvider {
	public provideHover(
			document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken):
			Thenable<vscode.Hover> {
		return new Promise((resolve, reject) => {
			// 获取到选取的文本
			const word = document.getText(document.getWordRangeAtPosition(position));
			// 遍历是否又单词匹配
			let hoverList:Array<string> = [];
			components.forEach(component => {
				if (component.categories.includes(word)) {
					hoverList.push(component.hoverTip);
				}
			});
			if (hoverList.length) {
				resolve(new vscode.Hover(hoverList));
			}
			reject();
		});
	}
}

// 追踪当前webview面板
let currentPanel: vscode.WebviewPanel | undefined = undefined;

// 创建 yt-admin 自动化布局
function CreateYtAdminAutoPage (context: vscode.ExtensionContext) {
	const columnToShowIn = vscode.window.activeTextEditor
        ? vscode.window.activeTextEditor.viewColumn
				: undefined;
	if (currentPanel) {
		// 如果我们已经有了一个面板，那就把它显示到目标列布局中
		currentPanel.reveal(columnToShowIn);
	} else {
		currentPanel = vscode.window.createWebviewPanel(
			'yt-admin-audo-page', // 只供内部使用，这个webview的标识
			'yt-admin 自动化布局', // 给用户显示的面板标题
			vscode.ViewColumn.One, // 给新的webview面板一个编辑器视图
			{
				enableScripts: true
			} // Webview选项。我们稍后会用上
		);
		// 设置HTML内容
		currentPanel.webview.html = getWebviewContent()
		
		currentPanel.onDidDispose(
			() => {
				currentPanel = undefined;
			},
			null,
			context.subscriptions
		);
	}
}

function getWebviewContent ():string {
  return `
	<!DOCTYPE html>
	<html lang="en">
	<head>
			<meta charset="UTF-8">
			<meta name="viewport" content="width=device-width, initial-scale=1.0">
			<title>Cat Coding</title>
	</head>
	<body>
			<img src="https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif" width="300" />
			<h1 id="lines-of-code-counter">0</h1>

			<script>
					const counter = document.getElementById('lines-of-code-counter');

					let count = 0;
					setInterval(() => {
							counter.textContent = count++;
					}, 100);
			</script>
	</body>
	</html>
	`;
}

export function activate(context: vscode.ExtensionContext) {
	context.subscriptions.push(vscode.commands.registerCommand('extension.createPage', () => CreateYtAdminAutoPage(context)));
	// context.subscriptions.push(vscode.commands.registerCommand('myExtension.sayHello', CreateYtAdminAutoPage));
	// 添加悬浮提示
	context.subscriptions.push(vscode.languages.registerHoverProvider('vue', new VueHoverProvider()));
}

export function deactivate() {}
