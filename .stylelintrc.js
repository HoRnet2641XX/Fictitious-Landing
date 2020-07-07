module.exports = {
  extends: ['stylelint-config-rational-order'],
  plugins: [
    'stylelint-order',
    'stylelint-config-rational-order/plugin',
    'stylelint-scss',
  ],
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['include', 'mixin', 'extend'],
      },
    ],
    'order/properties-order': [],
    'plugin/rational-order': [
      true,
      {
        'border-in-box-model': false,
        'empty-line-between-groups': false,
      },
    ],
  },
};
