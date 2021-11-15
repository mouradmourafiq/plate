/** @jsx jsx */

import { getHtmlDocument, jsx } from '@udecode/plate-test-utils';
import { PlatePlugin } from '../../../../../../core/src/types/plugins/PlatePlugin/PlatePlugin';
import { createPlateUIEditor } from '../../../../../../plate/src/utils/createPlateUIEditor';
import { deserializeHTMLElement } from '../../utils/deserializeHTMLElement';

const html = `<html><body>test<!-- You will not be able to see this text. --></body></html>`;
const input1: PlatePlugin[] = [];
const input2 = getHtmlDocument(html).body;

const output = (
  <editor>
    <htext>test</htext>
  </editor>
) as any;

it('should not have the comment node', () => {
  expect(
    deserializeHTMLElement(createPlateUIEditor(), {
      plugins: input1,
      element: input2,
    })
  ).toEqual(output.children);
});
