import { KeyboardHandler } from '@udecode/plate-core';
import isHotkey from 'is-hotkey';
import { toggleMark } from '../../transforms/toggleMark';
import { ToggleMarkPlugin } from '../../types/plugins/ToggleMarkPlugin';

export const getToggleMarkOnKeyDown = (): KeyboardHandler<
  {},
  ToggleMarkPlugin
> => (editor, { type, options: { hotkey, clear } }) => (e) => {
  if (!hotkey) return;

  if (isHotkey(hotkey, e as any)) {
    e.preventDefault();

    toggleMark(editor, { key: type, clear });
  }
};
