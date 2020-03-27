import * as vscode from 'vscode';
import * as path from 'path';
import YtSearchTable from './hover/yt-search-table';
import YtButton from './hover/yt-button';
import YtCard from './hover/yt-card';
import YtCtrl from './hover/yt-ctrl';
import YtDialog from './hover/yt-dialog';
import YtDialogForm from './hover/yt-dialog-form';
import Field from './hover/field';

const components = [
	YtSearchTable,
	YtButton,
	YtCard,
	YtCtrl,
	YtDialog,
	YtDialogForm,
	Field
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
				enableScripts: true // 允许 webview 使用 script
			}
		);
		
		// 设置HTML内容
		currentPanel.webview.html = getWebviewContent(context);
		
		currentPanel.onDidDispose(
			() => {
				currentPanel = undefined;
			},
			null,
			context.subscriptions
		);
	}
}

function getWebviewContent (context: vscode.ExtensionContext):string {
	// 获取磁盘上的资源路径
	let vuejs = vscode.Uri.file(path.join(context.extensionPath, 'page', 'vue.min.js')).with({ scheme: 'vscode-resource' });
	let mainjs = vscode.Uri.file(path.join(context.extensionPath, 'page', 'main.js')).with({ scheme: 'vscode-resource' });

	// 获取磁盘上的资源路径
	let style = vscode.Uri.file(path.join(context.extensionPath, 'page', 'style.css')).with({ scheme: 'vscode-resource' });

  return `
	<!DOCTYPE html>
	<html lang="en">
	<head>
			<meta charset="UTF-8">
			<meta name="viewport" content="width=device-width, initial-scale=1.0">
			<title>Cat Coding</title>
			<link rel="stylesheet" href="${style}" />
	</head>
	<body>
		<div id="app">
			<div class="ctrls">
				<div class="ctrls-item">重置页面</div>
				<div class="ctrls-item">设置接口地址</div>
			</div>
			<div class="search">
				<div class="form-item" v-for="field in searchFileds" :key="field.key">
					<span class="form-item-label">{{ field.title }}:</span>
					<span class="form-item-content select">
						<span>{{ field | placeholder }}</span>
						<span class="popper">
							<ul>
								<li>选项1</li>
								<li>选项2</li>
								<li>选项3</li>
								<li>选项4</li>
							</ul>
						</span>
					</span>
				</div>
				<div class="form-item search-btns">
					<button class="btn primary">查询</button>
					<button class="btn">重置</button>
				</div>
			</div>
			<div class="table">
				<div class="table-header">
					<button class="btn primary">新增用户</button>
				</div>
				<table class="main-table" border="1" cellpadding="0" cellspacing="0">
					<thead>
						<tr>
							<th v-for="field in fields" :key="field.title">
								<div class="table-cell" v-if="field.table && field.table.type === 'selection'">
									<div class="checkbox"></div>
								</div>
								<div class="table-cell" v-else>{{ field.title }}</div>
							</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="row in tableData" :key="row.id">
							<td v-for="field in fields" :key="field.key">
								<div class="table-cell" v-if="field.table && field.table.type === 'selection'">
									<div class="checkbox"></div>
								</div>
								<div class="table-cell" v-else>{{ row[field.key] }}</div>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
		<script src="${vuejs}"></script>
		<script src="${mainjs}"></script>
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
