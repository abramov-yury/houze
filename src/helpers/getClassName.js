const getClassName = (name, parent) => (
  parent ? `${parent}__${name} ${name}` : name
);

module.exports = getClassName;
