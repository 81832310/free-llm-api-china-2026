# 国内免费大模型 API 调研报告

本项目为持续维护的国内免费大模型 API 调研报告，数据每日自动更新。

## 在线访问

- **GitHub Pages**: `https://81832310.github.io/free-llm-api-china-2026/`
- 部署后可在手机/平板/任意设备上查看

## 自动更新机制

每天定时自动执行：
1. 调研各平台最新免费政策
2. 如有变更，更新报告内容（`index.html` 是唯一源文件）
3. 自动 `git commit && git push` 到 Gitee 和 GitHub
4. GitHub Pages 自动部署，网页即时更新

## 手动推送

```powershell
$reportPath = 'C:\Users\huangcaiming\AppData\Roaming\TRAE SOLO CN\ModularData\ai-agent\work-mode-projects\6a4fb93df4027c208e8f46d8\free-llm-api-china-2026'
Set-Location $reportPath
git add -A
git commit -m "update: $(Get-Date -Format 'yyyy-MM-dd')"
git push origin master
git push github master
```

## 文件结构

- `index.html` — 唯一报告源文件（GitHub Pages 入口）
- `assets/charts.js` — 图表数据（ECharts）
- `_shared/` — 共享资源（字体、echarts.js）

## 数据来源

- [P0] 官方定价页 / API 文档
- [P1] 权威二级来源
- [P2] 行业汇总文章

## 免责声明

本报告数据每日更新，大模型 API 免费政策和定价调整频繁，使用前请务必访问各平台官网确认最新政策。本报告不构成任何投资或采购建议。
