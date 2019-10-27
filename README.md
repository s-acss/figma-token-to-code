Generate the text element to Html with css.

The plugin reads the text styles and color styles on text element and let you export them into Html with css.

You can custome css selector rely on the defined Figma style's name.

The text styles blow you don't define will transform to the ACSS.

- `font-size`： `.fs12{ font-size: 12px; }` ...;
- `font-weight`：`.fw700{ font-weight: 700; }`...;
- `font-style`：`.fsi{ font-style: italic; }` ...;
- `line-height`：`.lh16{ line-height: 16px; }`...;
- `text-align`：`.tac{ text-align: center; }; }`...;
- `text-transform`：`.ttc{ text-transform: capitalize; }`...;

If the text you selecte with mutiple lines the `paragraphSpacing` will transform to the `margin-bottom`: `.mb16{ margin-bottom: 16px; }`...;

* ACSS「 Atomic css 」: Each css selector with only one css rules.