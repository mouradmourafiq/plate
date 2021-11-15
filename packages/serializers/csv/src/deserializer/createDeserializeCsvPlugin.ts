import { createPluginFactory } from '@udecode/plate-core';
import { DeserializeCsvPlugin } from './types';
import { deserializeCsv } from './utils';
import { withDeserializeCsv } from './withDeserializeCsv';

export const KEY_DESERIALIZE_CSV = 'deserializeCsv';

/**
 * @see {@link withDeserializeCsv}
 */
export const createDeserializeCsvPlugin = createPluginFactory<DeserializeCsvPlugin>(
  {
    key: KEY_DESERIALIZE_CSV,
    withOverrides: withDeserializeCsv(),
    options: {
      errorTolerance: 0.25,
    },
  }
);
