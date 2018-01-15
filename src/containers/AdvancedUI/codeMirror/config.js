const switchOptions = [
  {
    id: 'lineNumbers',
    title: 'Line Numbers',
    trueValue: true,
    falseValue: false,
    value: true
  },
  {
    id: 'readOnly',
    title: 'Read Only',
    trueValue: false,
    falseValue: true,
    value: true
  }
];
const selectOptions = [
  {
    id: 'tabSize',
    title: 'Tab Size',
    options: ['2', '4', '6', '8'],
    value: 2
  },
  {
    id: 'mode',
    title: 'Language',
    options: ['javascript', 'xml', 'markdown', 'php', 'python', 'ruby'],
    value: 'javascript'
  },
  {
    id: 'theme',
    title: 'Select themes',
    options: [
      'default',
      'zenburn',
      'solarized',
      'rubyblue',
      'paraiso-dark',
      'midnight',
      'material',
      'hopscotch',
      'twilight'
    ],
    value: 'zenburn'
  }
];

const defaultValues = {
  basic: `const component = {
    name: 'ANTADMIN',
    author: 'RedQ Team',
    website: 'https://ANTADMIN.redq.io/'
};`,
  javascript: `const component = {
    name: 'ANTADMIN',
    author: 'RedQ Team',
    website: 'https://ANTADMIN.redq.io/'
};`,
  markdown: `# ANTADMIN
###This is a RedQ Team production
[have a look](https://ANTADMIN.redq.io/)
  `,
  xml: `<isomprphic>
    <to>Tove</to>
    <name>ANTADMIN</name>
    <author>RedQ Team</author>
    <website>ANTADMIN.redq.io</website>
</isomprphic>`,
  php: `<html>
 <head>
  <title> v</title>
 </head>
 <body>
 <h1>https://ANTADMIN.redq.io/</h1>
 <p>This is a RedQ Team production</p>
 <a href="https://ANTADMIN.redq.io/">visit ou site</a>
 </body>
</html>
`,
  python: `
print("ANTADMIN")
print("This is a RedQ Team production")
print("visit us https://ANTADMIN.redq.io ")
`,
  ruby: `rint "ANTADMIN"
print "This is a RedQ Team production"
print "visit us https://ANTADMIN.redq.io "
`
};

export { switchOptions, selectOptions, defaultValues };
