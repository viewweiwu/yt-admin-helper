import * as vscode from 'vscode';
import * as path from 'path';
import YtSearchTable from './hover/yt-search-table';
import YtButton from './hover/yt-button';
import YtCard from './hover/yt-card';
import YtCtrl from './hover/yt-ctrl';
import YtDialog from './hover/yt-dialog';
import YtDialogForm from './hover/yt-dialog-form';
import Field from './hover/field';

const components = [YtSearchTable, YtButton, YtCard, YtCtrl, YtDialog, YtDialogForm, Field];

class VueHoverProvider implements vscode.HoverProvider {
  public provideHover(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken): Thenable<vscode.Hover> {
    return new Promise((resolve, reject) => {
      // 获取到选取的文本
      const word = document.getText(document.getWordRangeAtPosition(position));
      // 遍历是否又单词匹配
      let hoverList: Array<string> = [];
      components.forEach((component) => {
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
function CreateYtAdminAutoPage(context: vscode.ExtensionContext) {
  const columnToShowIn = vscode.window.activeTextEditor ? vscode.window.activeTextEditor.viewColumn : undefined;
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

function getScript(context: vscode.ExtensionContext): string {
  let scriptList = ['sound.js', 'util.js', 'vue.min.js', 'a-back.js', 'a-icon.js', 'a-radio.js', 'a-switch.js', 'layout-form.js', 'layout-grid.js', 'layout-side.js', 'main.js'];
  let result = '';
  scriptList.forEach((item) => {
    let js = vscode.Uri.file(path.join(context.extensionPath, 'page/arknights/js', item)).with({ scheme: 'vscode-resource' });
    result += `<script src="${js}"></script>`;
  });
  return result;
}

function getWebviewContent(context: vscode.ExtensionContext): string {
  // 获取磁盘上的资源路径
  let js = getScript(context);

  // 获取磁盘上的资源路径
  let style = vscode.Uri.file(path.join(context.extensionPath, 'page/arknights/css', 'index.css')).with({ scheme: 'vscode-resource' });

  return /*html*/ `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>arknights</title>
    <link rel="stylesheet" href="https://at.alicdn.com/t/font_1720959_l81n0d8wjs.css">
    <link rel="stylesheet" href="${style}">
  </head>
  <body>
    <div id="app">
      <layout-grid></layout-grid>
    </div>
    ${js}
  </body>
  </html>
	`;
}

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(vscode.commands.registerCommand('extension.createPage', () => CreateYtAdminAutoPage(context)));
  // 添加悬浮提示
  context.subscriptions.push(vscode.languages.registerHoverProvider('vue', new VueHoverProvider()));
}

export function deactivate() {}
