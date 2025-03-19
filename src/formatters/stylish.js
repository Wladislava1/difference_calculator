const buildDiffObject = (diff) => {
  const handlers = {
    added: (acc, key, change) => ({ ...acc, [`+ ${key}`]: change.value }),
    removed: (acc, key, change) => ({ ...acc, [`- ${key}`]: change.value }),
    unchanged: (acc, key, change) => ({ ...acc, [key]: change.value }),
    changed: (acc, key, change) => ({ ...acc, [`- ${key}`]: change.value1, [`+ ${key}`]: change.value2 }),
    nested: (acc, key, change) => ({ ...acc, [key]: { type: 'nested', children: buildDiffObject(change.children) } }),
  };

  return Object.entries(diff)
    .reduce((acc, [key, change]) => handlers[change.type](acc, key, change), {});
};

const formatValue = (value) => (value === null ? 'null' : value);

const getIndentation = (depth, isSpecialKey = false) => ' '.repeat(depth * 4 - (isSpecialKey ? 2 : 0));

const stringify = (obj, depth = 1) => Object.entries(obj)
  .map(([key, value]) => {
    const indent = getIndentation(depth, key.startsWith('+') || key.startsWith('-'));
    if (typeof value === 'object' && value !== null) {
      if (value.type === 'nested') {
        return `${indent}${key}: {\n${stringify(value.children, depth + 1)}\n${getIndentation(depth)}}`;
      }
      return `${indent}${key}: {\n${stringify(value, depth + 1)}\n${getIndentation(depth)}}`;
    }

    return `${indent}${key}: ${formatValue(value)}`;
  })
  .join('\n');

const stylish = (diff) => `{\n${stringify(buildDiffObject(diff))}\n}`;

export default stylish;
