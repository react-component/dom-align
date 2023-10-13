# @rc-component/dom-align

---

Align source html element with target html element flexibly.

[![NPM version][npm-image]][npm-url] [![Test coverage][coveralls-image]][coveralls-url] [![npm download][download-image]][download-url] ![Build Status](https://github.com/react-component/dom-align/actions/workflows/ci.yml/badge.svg) [![@rc-component/dom-align](https://img.shields.io/endpoint?url=https://cloud.cypress.io/badge/simple/22j6d7/main&style=flat&logo=cypress)](https://cloud.cypress.io/projects/22j6d7/runs)

[npm-image]: http://img.shields.io/npm/v/@rc-component/dom-align.svg?style=flat-square
[npm-url]: http://npmjs.org/package/@rc-component/dom-align
[coveralls-image]: https://img.shields.io/coveralls/react-component/dom-align.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/react-component/dom-align?branch=main
[node-image]: https://img.shields.io/badge/node.js-%3E=_0.10-green.svg?style=flat-square
[node-url]: http://nodejs.org/download/
[download-image]: https://img.shields.io/npm/dm/@rc-component/dom-align.svg?style=flat-square
[download-url]: https://npmjs.org/package/@rc-component/dom-align

## Screenshot

<img height=444 src="http://gtms02.alicdn.com/tps/i2/TB1XIp2HXXXXXajaXXXgJfr8XXX-548-888.png">

## Install

[![@rc-component/dom-align](https://nodei.co/npm/@rc-component/dom-align.png)](https://npmjs.org/package/@rc-component/dom-align)

## Feature

- support Edge Chrome Firefox
- support align points and offset
- support auto adjust according to visible area

## Usage

```js
import domAlign from '@rc-component/dom-align';

// use domAlign
// sourceNode's initial style should be position:absolute;left:-9999px;top:-9999px;

const alignConfig = {
  points: ['tl', 'tr'], // align top left point of sourceNode with top right point of targetNode
  offset: [10, 20], // the offset sourceNode by 10px in x and 20px in y,
  targetOffset: ['30%', '40%'], // the offset targetNode by 30% of targetNode width in x and 40% of targetNode height in y,
  overflow: { adjustX: true, adjustY: true }, // auto adjust position when sourceNode is overflowed
};

domAlign(sourceNode, targetNode, alignConfig);
```

## API

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
pnpm install
pnpm start
```

## Example

http://localhost:8000/

## License

@rc-component/dom-align is released under the MIT license.
