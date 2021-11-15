import { PlateEditor, TDescendant, TElement } from '@udecode/plate-core';
import { jsx } from 'slate-hyperscript';
import { DeserializeHTMLChildren } from '../types';

jsx;

/**
 * Deserialize HTML to Element.
 */
export const deserializeHTMLToElement = <T = {}>(
  editor: PlateEditor<T>,
  {
    element,
    children,
  }: {
    element: HTMLElement;
    children: DeserializeHTMLChildren[];
  }
): TElement | undefined => {
  let slateElement: any;
  let withoutChildren: boolean | undefined;

  editor.plugins.some((plugin) => {
    const elementDeserializers = plugin.deserialize?.(editor, plugin).element;
    if (!elementDeserializers) return;

    return elementDeserializers.some((deserializer) => {
      const deserialized = deserializer.deserialize(element);
      if (!deserialized) return;

      slateElement = deserialized;
      withoutChildren = deserializer.withoutChildren;
      return true;
    });
  });

  if (slateElement) {
    let descendants = children as TDescendant[];
    if (!descendants.length || withoutChildren) {
      descendants = [{ text: '' }];
    }

    return jsx('element', slateElement, descendants) as TElement;
  }
};
