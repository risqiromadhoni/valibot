import type { PropertyProps } from '~/components';

export const properties: Record<string, PropertyProps> = {
  TInput: {
    modifier: 'extends',
    type: 'any',
  },
  TOutput: {
    modifier: 'extends',
    type: 'any',
  },
  TIssue: {
    modifier: 'extends',
    type: {
      type: 'custom',
      name: 'BaseIssue',
      href: '../BaseIssue/',
      generics: ['unknown'],
    },
  },
  BaseTransformation: {
    type: 'object',
  },
  kind: {
    type: {
      type: 'string',
      value: 'transformation',
    },
  },
  type: {
    type: 'string',
  },
  reference: {
    type: {
      type: 'custom',
      name: 'FunctionReference',
      href: '../FunctionReference/',
      generics: [
        {
          type: 'array',
          item: 'any',
        },
        {
          type: 'custom',
          name: 'BaseTransformation',
          generics: [
            'unknown',
            'unknown',
            {
              type: 'custom',
              name: 'BaseIssue',
              href: '../BaseIssue/',
              generics: ['unknown'],
            },
          ],
        },
      ],
    },
  },
  async: {
    type: {
      type: 'boolean',
      value: false,
    },
  },
  _run: {
    type: {
      type: 'function',
      params: [
        {
          name: 'dataset',
          type: {
            type: 'custom',
            name: 'TypedDataset',
            href: '../TypedDataset/',
            generics: [
              {
                type: 'custom',
                name: 'TInput',
              },
              'never',
            ],
          },
        },
        {
          name: 'config',
          type: {
            type: 'custom',
            name: 'Config',
            href: '../Config/',
            generics: [
              {
                type: 'custom',
                name: 'TIssue',
              },
            ],
          },
        },
      ],
      return: {
        type: 'custom',
        name: 'Dataset',
        href: '../Dataset/',
        generics: [
          {
            type: 'custom',
            name: 'TOutput',
          },
          {
            type: 'custom',
            name: 'TIssue',
          },
        ],
      },
    },
  },
  _types: {
    type: {
      type: 'union',
      options: [
        {
          type: 'object',
          entries: [
            {
              key: 'input',
              value: {
                type: 'custom',
                name: 'TInput',
              },
            },
            {
              key: 'output',
              value: {
                type: 'custom',
                name: 'TOutput',
              },
            },
            {
              key: 'issue',
              value: {
                type: 'custom',
                name: 'TIssue',
              },
            },
          ],
        },
        'undefined',
      ],
    },
  },
};
