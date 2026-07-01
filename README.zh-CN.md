<div align="center">
  <h1>@rc-component/dom-align</h1>
  <p><sub><a href="https://ant.design"><img alt="Ant Design" height="14" src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" style="vertical-align: -0.125em;" /></a> Ant Design 生态的一部分。</sub></p>
  <p>📐 用于将一个 DOM 元素相对另一个元素定位的对齐工具。</p>

  <p>
    <a href="https://npmjs.org/package/@rc-component/dom-align"><img alt="NPM version" src="https://img.shields.io/npm/v/@rc-component/dom-align.svg?style=flat-square"></a>
    <a href="https://npmjs.org/package/@rc-component/dom-align"><img alt="npm downloads" src="https://img.shields.io/npm/dm/@rc-component/dom-align.svg?style=flat-square"></a>
    <a href="https://github.com/react-component/dom-align/actions/workflows/test.yml"><img alt="build status" src="https://github.com/react-component/dom-align/actions/workflows/test.yml/badge.svg"></a>
    <a href="https://app.codecov.io/gh/react-component/dom-align"><img alt="Codecov" src="https://img.shields.io/codecov/c/github/react-component/dom-align/main.svg?style=flat-square"></a>
    <a href="https://bundlephobia.com/package/@rc-component/dom-align"><img alt="bundle size" src="https://img.shields.io/bundlephobia/minzip/@rc-component/dom-align?style=flat-square"></a>
    <a href="https://github.com/umijs/dumi"><img alt="dumi" src="https://img.shields.io/badge/docs%20by-dumi-blue?style=flat-square"></a>
  </p>
</div>

<p align="center"><a href="./README.md">English</a> | 简体中文</p>

## 亮点

| 方向 | 支持                                              |
| ---- | ------------------------------------------------- |
| 定位 | 用于将一个 DOM 元素相对另一个元素定位的对齐工具。 |
| 包名 | `@rc-component/dom-align`                         |
| 发布 | `@rc-component/np` / `rc-np`                      |

## 安装

```bash
npm install @rc-component/dom-align
```

## 用法

```tsx | pure
import domAlign from '@rc-component/dom-align';

domAlign(sourceNode, targetNode, {
  points: ['tl', 'tr'],
  offset: [10, 20],
  overflow: { adjustX: true, adjustY: true },
});
```

## API

| 名称                                               | 说明                             |
| -------------------------------------------------- | -------------------------------- |
| `points`                                           | 源节点和目标节点的对齐点。       |
| `offset`                                           | 源节点偏移。                     |
| `targetOffset`                                     | 目标节点偏移。                   |
| `overflow`                                         | 源节点超出视口时的自动调整行为。 |
| `useCssRight` / `useCssBottom` / `useCssTransform` | 选择 CSS 定位策略。              |

## 本地开发

```bash
ut install
npm start
npm test
npm run lint
npm run tsc
npm run compile
```

本地 dumi 站点默认运行在 `http://localhost:8000`.

## 发布

```bash
npm run prepublishOnly
```

发布流程通过 `@rc-component/np` 提供的 `rc-np` 命令处理。

## 许可证

@rc-component/dom-align 基于 [MIT](./LICENSE.md) 协议发布。
