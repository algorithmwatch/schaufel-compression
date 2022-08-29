import { decode, encode } from '@msgpack/msgpack';
import {
  compressObject,
  createCompressionTable,
  decompressObject,
  JsonSchema,
} from 'jsonschema-key-compression';

// https://www.liquid-technologies.com/online-json-to-schema-converter

const jsonSchema = {
  $schema: 'http://json-schema.org/draft-04/schema#',
  type: 'object',
  properties: {
    result: {
      type: 'object',
      properties: {
        id: {
          type: 'string',
        },
        desc: {
          type: 'string',
        },
        createTime: {
          type: 'string',
        },
        author: {
          type: 'string',
        },
        nickname: {
          type: 'string',
        },
        authorId: {
          type: 'string',
        },
        video: {
          type: 'object',
          properties: {
            duration: {
              type: 'integer',
            },
          },
          required: ['duration'],
        },
        stats: {
          type: 'object',
          properties: {
            diggCount: {
              type: 'integer',
            },
            shareCount: {
              type: 'integer',
            },
            commentCount: {
              type: 'integer',
            },
            playCount: {
              type: 'integer',
            },
          },
          required: ['diggCount', 'shareCount', 'commentCount', 'playCount'],
        },
        music: {
          type: 'object',
          properties: {
            id: {
              type: 'string',
            },
            title: {
              type: 'string',
            },
            authorName: {
              type: 'string',
            },
            original: {
              type: 'boolean',
            },
          },
          required: ['id', 'title', 'authorName', 'original'],
        },
        diversificationLabels: {
          type: 'array',
          items: [
            {
              type: 'string',
            },
            {
              type: 'string',
            },
            {
              type: 'string',
            },
          ],
        },
      },
      required: [
        'id',
        'desc',
        'createTime',
        'author',
        'nickname',
        'authorId',
        'video',
        'stats',
        'music',
        'diversificationLabels',
      ],
    },
    scrapedAt: {
      type: 'integer',
    },
    error: {
      type: 'null',
    },
  },
  required: ['result', 'scrapedAt', 'error'],
} as JsonSchema;

const compressionTable = createCompressionTable(jsonSchema);

function getRandomInt(max): number {
  return Math.floor(Math.random() * max);
}

// compress
const a = (input) => {
  const compressedObject = compressObject(compressionTable, input);
  const encoded = encode(compressedObject);

  // slight obfuscation by prepending a random byte
  const obfArr = new Uint8Array(encoded.length + 1);
  const x = new Uint8Array(1);
  x[0] = getRandomInt(404);
  obfArr.set(x);
  obfArr.set(encoded, 1);
  return obfArr;
};

// decompress
const b = (input) => {
  // remove useless first bytes
  const compressedObject = decode(input.slice(1));
  return decompressObject(compressionTable, compressedObject);
};

export { a, b };
