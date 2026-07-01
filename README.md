<div align="center">
  <h1>@rc-component/dom-align</h1>
  <p><sub><a href="https://ant.design"><img alt="Ant Design" height="14" src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" style="vertical-align: -0.125em;" /></a> Part of the Ant Design ecosystem.</sub></p>
  <p>📐 DOM alignment utility for positioning one element against another.</p>

  <p>
    <a href="https://npmjs.org/package/@rc-component/dom-align"><img alt="NPM version" src="https://img.shields.io/npm/v/@rc-component/dom-align.svg?style=flat-square"></a>
    <a href="https://npmjs.org/package/@rc-component/dom-align"><img alt="npm downloads" src="https://img.shields.io/npm/dm/@rc-component/dom-align.svg?style=flat-square"></a>
    <a href="https://github.com/react-component/dom-align/actions/workflows/test.yml"><img alt="build status" src="https://github.com/react-component/dom-align/actions/workflows/test.yml/badge.svg"></a>
    <a href="https://app.codecov.io/gh/react-component/dom-align"><img alt="Codecov" src="https://img.shields.io/codecov/c/github/react-component/dom-align/main.svg?style=flat-square"></a>
    <a href="https://bundlephobia.com/package/@rc-component/dom-align"><img alt="bundle size" src="https://img.shields.io/bundlephobia/minzip/@rc-component/dom-align?style=flat-square"></a>
    <a href="https://github.com/umijs/dumi"><img alt="dumi" src="https://img.shields.io/badge/docs%20by-dumi-blue?style=flat-square"></a>
  </p>
</div>

<p align="center">English | <a href="./README.zh-CN.md">简体中文</a></p>

## Highlights

| Area    | Support                                                            |
| ------- | ------------------------------------------------------------------ |
| Purpose | DOM alignment utility for positioning one element against another. |
| Package | `@rc-component/dom-align`                                          |
| Release | `@rc-component/np` / `rc-np`                                       |

## Install

```bash
npm install @rc-component/dom-align
```

## Usage

```tsx | pure
import domAlign from '@rc-component/dom-align';

domAlign(sourceNode, targetNode, {
  points: ['tl', 'tr'],
  offset: [10, 20],
  overflow: { adjustX: true, adjustY: true },
});
```

## API

| Option | Description |
| --- | --- |
| `points` | Source and target alignment points. |
| `offset` | Source node offset. |
| `targetOffset` | Target node offset. |
| `overflow` | Auto-adjust behavior when the source overflows viewport. |
| `useCssRight` / `useCssBottom` / `useCssTransform` | Choose CSS positioning strategy. |

## Development

```bash
ut install
npm start
npm test
npm run lint
npm run tsc
npm run compile
```

The dumi site runs at `http://localhost:8000`.

## Release

```bash
npm run prepublishOnly
```

The release flow is handled by `@rc-component/np` through the `rc-np` command when the package uses the shared release flow.

## Detailed API

### void domAlign(source: HTMLElement, target: HTMLElement, alignConfig: Object):Function

#### alignConfig object details

<table class="table table-bordered table-striped">
    <thead>
    <tr>
        <th style="width: 100px;">name</th>
        <th style="width: 50px;">type</th>
        <th>description</th>
    </tr>
    </thead>
    <tbody>
      <tr>
          <td>points</td>
          <td>String[2]</td>
          <td>move point of source node to align with point of target node, such as ['tr','cc'],
          align top right point of source node with center point of target node.
          point can be 't'(top), 'b'(bottom), 'c'(center), 'l'(left), 'r'(right)
      </td>
      </tr>
      <tr>
          <td>offset</td>
          <td>Number[2]</td>
          <td>offset source node by offset[0] in x and offset[1] in y. 
          If offset contains percentage string value, it is relative to sourceNode region.</td>
      </tr>
      <tr>
          <td>targetOffset</td>
          <td>Number[2]</td>
          <td>offset target node by offset[0] in x and offset[1] in y. 
          If targetOffset contains percentage string value, it is relative to targetNode region.</td>
      </tr>
      <tr>
          <td>overflow</td>
          <td>Object: `{ adjustX: boolean, adjustY: boolean, alwaysByViewport:boolean }`</td>
          <td>
          if adjustX field is true, then will adjust source node in x direction if source node is invisible.
          if adjustY field is true, then will adjust source node in y direction if source node is invisible.
          if alwaysByViewport is true, the it will adjust if node is not inside viewport
          </td>
      </tr>
      <tr>
          <td>useCssRight</td>
          <td>Boolean</td>
          <td>whether use css right instead of left to position</td>
      </tr>
      <tr>
          <td>useCssBottom</td>
          <td>Boolean</td>
          <td>whether use css bottom instead of top to position</td>
      </tr>
      <tr>
          <td>useCssTransform</td>
          <td>Boolean</td>
          <td>whether use css transform instead of left/top/right/bottom to position if browser supports.
          Defaults to false.</td>
      </tr>
    </tbody>
</table>

## Development

```
ut install
npm start
```

## Example

http://localhost:8000/

## License

@rc-component/dom-align is released under the [MIT](./LICENSE.md) license.
