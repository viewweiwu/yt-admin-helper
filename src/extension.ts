import * as vscode from 'vscode';
import YtSearchTable from './hover/yt-search-table';
import YtButton from './hover/yt-button';
import YtCard from './hover/yt-card';
import YtCtrl from './hover/yt-ctrl';
import YtDialog from './hover/yt-dialog';

const components = [
	YtSearchTable,
	YtButton,
	YtCard,
	YtCtrl,
	YtDialog
];

class VueHoverProvider implements vscode.HoverProvider {
	public provideHover(
			document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken):
			Thenable<vscode.Hover> {
		return new Promise((resolve, reject) => {
			// 获取到选取的文本
			const word = document.getText(document.getWordRangeAtPosition(position));
			// 遍历是否又单词匹配
			components.forEach(component => {
				if (component.categories.includes(word)) {
					resolve(new vscode.Hover(component.hoverTip));
				}
			});
			reject();
		});
	}
}

export function activate(context: vscode.ExtensionContext) {
	context.subscriptions.push(vscode.languages.registerHoverProvider('vue', new VueHoverProvider()));
}

export function deactivate() {}
