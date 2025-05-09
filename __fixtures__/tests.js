/* eslint-disable comma-dangle */
export const json1 = {
  host: 'hexlet.io',
  timeout: 50,
  proxy: '123.234.53.22',
  follow: false,
};
export const json2 = {
  timeout: 20,
  verbose: true,
  host: 'hexlet.io',
};
export const plainFormatter = `Property 'follow' was removed
Property 'proxy' was removed
Property 'timeout' was updated. From 50 to 20
Property 'verbose' was added with value: true`;
export const jsonFormatter = `{
  "follow": {
    "type": "removed",
    "value": false
  },
  "host": {
    "type": "unchanged",
    "value": "hexlet.io"
  },
  "proxy": {
    "type": "removed",
    "value": "123.234.53.22"
  },
  "timeout": {
    "type": "changed",
    "value1": 50,
    "value2": 20
  },
  "verbose": {
    "type": "added",
    "value": true
  }
}`;
export const jsonNotFlat1 = {
  common: {
    setting1: 'Value 1',
    setting2: 200,
    setting3: true,
    setting6: {
      key: 'value',
      doge: {
        wow: '',
      },
    },
  },
  group1: {
    baz: 'bas',
    foo: 'bar',
    nest: {
      key: 'value',
    },
  },
  group2: {
    abc: 12345,
    deep: {
      id: 45,
    },
  },
};
export const jsonNotFlat2 = {
  common: {
    follow: false,
    setting1: 'Value 1',
    setting3: null,
    setting4: 'blah blah',
    setting5: {
      key5: 'value5',
    },
    setting6: {
      key: 'value',
      ops: 'vops',
      doge: {
        wow: 'so much',
      },
    },
  },
  group1: {
    foo: 'bar',
    baz: 'bars',
    nest: 'str',
  },
  group3: {
    deep: {
      id: {
        number: 45,
      },
    },
    fee: 100500,
  },
};
export const stylishNotFlat = `{
    common: {
      + follow: false
        setting1: Value 1
      - setting2: 200
      - setting3: true
      + setting3: null
      + setting4: blah blah
      + setting5: {
            key5: value5
        }
        setting6: {
            doge: {
              - wow: 
              + wow: so much
            }
            key: value
          + ops: vops
        }
    }
    group1: {
      - baz: bas
      + baz: bars
        foo: bar
      - nest: {
            key: value
        }
      + nest: str
    }
  - group2: {
        abc: 12345
        deep: {
            id: 45
        }
    }
  + group3: {
        deep: {
            id: {
                number: 45
            }
        }
        fee: 100500
    }
}`;
export const stylishFlat = `{
  - follow: false
    host: hexlet.io
  - proxy: 123.234.53.22
  - timeout: 50
  + timeout: 20
  + verbose: true
}`;
export const result1 = `{

}`;
export const result2 = '';
export const differentFlat = {
  follow: { type: 'removed', value: false },
  host: { type: 'unchanged', value: 'hexlet.io' },
  proxy: { type: 'removed', value: '123.234.53.22' },
  timeout: { type: 'changed', value1: 50, value2: 20 },
  verbose: { type: 'added', value: true }
};
export const diffrentNotFlat = {
  common: {
    type: 'nested',
    children: {
      follow: { type: 'added', value: false },
      setting1: { type: 'unchanged', value: 'Value 1' },
      setting2: { type: 'removed', value: 200 },
      setting3: { type: 'changed', value1: true, value2: null },
      setting4: { type: 'added', value: 'blah blah' },
      setting5: { type: 'added', value: { key5: 'value5' } },
      setting6: {
        type: 'nested',
        children: {
          doge: {
            type: 'nested',
            children: {
              wow: { type: 'changed', value1: '', value2: 'so much' }
            }
          },
          key: { type: 'unchanged', value: 'value' },
          ops: { type: 'added', value: 'vops' }
        }
      }
    }
  },
  group1: {
    type: 'nested',
    children: {
      baz: { type: 'changed', value1: 'bas', value2: 'bars' },
      foo: { type: 'unchanged', value: 'bar' },
      nest: { type: 'changed', value1: { key: 'value' }, value2: 'str' }
    }
  },
  group2: { type: 'removed', value: { abc: 12345, deep: { id: 45 } } },
  group3: { type: 'added', value: { deep: { id: { number: 45 } }, fee: 100500 } }
};
export const plainResult = `Property 'common.follow' was added with value: false
Property 'common.setting2' was removed
Property 'common.setting3' was updated. From true to null
Property 'common.setting4' was added with value: 'blah blah'
Property 'common.setting5' was added with value: [complex value]
Property 'common.setting6.doge.wow' was updated. From '' to 'so much'
Property 'common.setting6.ops' was added with value: 'vops'
Property 'group1.baz' was updated. From 'bas' to 'bars'
Property 'group1.nest' was updated. From [complex value] to 'str'
Property 'group2' was removed
Property 'group3' was added with value: [complex value]`;
export const jsonNotFlatFormatter = `{
  "common": {
    "type": "nested",
    "children": {
      "follow": {
        "type": "added",
        "value": false
      },
      "setting1": {
        "type": "unchanged",
        "value": "Value 1"
      },
      "setting2": {
        "type": "removed",
        "value": 200
      },
      "setting3": {
        "type": "changed",
        "value1": true,
        "value2": null
      },
      "setting4": {
        "type": "added",
        "value": "blah blah"
      },
      "setting5": {
        "type": "added",
        "value": {
          "key5": "value5"
        }
      },
      "setting6": {
        "type": "nested",
        "children": {
          "doge": {
            "type": "nested",
            "children": {
              "wow": {
                "type": "changed",
                "value1": "",
                "value2": "so much"
              }
            }
          },
          "key": {
            "type": "unchanged",
            "value": "value"
          },
          "ops": {
            "type": "added",
            "value": "vops"
          }
        }
      }
    }
  },
  "group1": {
    "type": "nested",
    "children": {
      "baz": {
        "type": "changed",
        "value1": "bas",
        "value2": "bars"
      },
      "foo": {
        "type": "unchanged",
        "value": "bar"
      },
      "nest": {
        "type": "changed",
        "value1": {
          "key": "value"
        },
        "value2": "str"
      }
    }
  },
  "group2": {
    "type": "removed",
    "value": {
      "abc": 12345,
      "deep": {
        "id": 45
      }
    }
  },
  "group3": {
    "type": "added",
    "value": {
      "deep": {
        "id": {
          "number": 45
        }
      },
      "fee": 100500
    }
  }
}`;
