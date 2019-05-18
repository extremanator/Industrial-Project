const Problem = require('../models/problem');

module.exports = [
  new Problem({
    name: 'Compare Password',
    difficulty: 'Easy',
    category: ['cpp'],
    paragraph:
        'The following function should return \'true\' if the given password is \'adminadmin\' and \'false\' otherwise.\n' +
        'Some users managed to login without knowing the password!\n' +
        'Can you find the problem?\n' +
        '\'input_password\' is the given password and \'len\' is it\'s length, YOU CAN ASSUME THE LENGTH IS CORRECT.",\n',
    code:
        '#include <string.h>\n' +
        '#include <stdlib.h>\n' +
        '#include <stdio.h>\n' +
        '\n' +
        'using namespace ::std;\n' +
        '\n' +
        'bool check_password(char *input_password, int len) {\n' +
        '    char *correct = (char *) \"adminadmin\";\n' +
        '    if (!strncmp(correct, input_password, len)) {\n' +
        '        return true;\n' +
        '    }\n' +
        '    return false;\n' +
        '}\n',
    type: 'open',
    tests: [
      {
        code:
            '#include <string.h>\n' +
            '#include <stdlib.h>\n' +
            '#include <stdio.h>\n' +
            '\n' +
            'using namespace ::std;\n' +
            'bool check_password(char*,int);\n' +
            'int main() {\n' +
            '    char *s1 = (char *) \"\";\n' +
            '    char *s2 = (char *) \"adminadmin\";\n' +
            '    char *s3 = (char *) \"abcd\";\n' +
            '    char *s4;\n' +
            '    char *s5 = (char *) \"   \";\n' +
            '    char *s6 = (char *) \"admin\";\n' +
            '\n' +
            '    if (!(check_password(s1, 0) == false &&\n' +
            '          check_password(s2, 10) == true &&\n' +
            '          check_password(s3, 4) == false &&\n' +
            '          check_password(s4, 0) == false &&\n' +
            '          check_password(s5, 3) == false)) {\n' +
            '        return 1;\n' +
            '    }\n' +
            '\n' +
            '    return 0;\n' +
            '}\n'
      }
    ]
  }),
  new Problem({
    name: 'Array Boundaries',
    difficulty: 'Easy',
    category: ['cpp'],
    paragraph:
        'This is a beginner exercise. It is very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very easy.\n' +
        'Only update the function body.',
    code:
        '//if i out of range make sure to return \'-1\'\n' +
        'int get_item(int *arr, int i, int size){\n' +
        '    return arr[i];\n' +
        '}',
    type: 'open',
    tests: [
      {
        code:
            '#include <iostream>\n' +
            'using namespace std;\n' +
            '\n' +
            'int our_assert(bool condition){\n' +
            '    return (condition)?0:1;\n' +
            '}\n' +
            '\n' +
            'int get_item(int*, int, int);\n' +
            'int main(){\n' +
            '    int a[3]={4,7,-13};\n' +
            '    return our_assert(get_item(a,0,3)==4 && get_item(a,1,3)==7 && get_item(a,2,3)==-13\n' +
            '    && get_item(a,5,3)==-1 && get_item(a,-5,3)==-1);\n' +
            '}\n'
      }
    ]
  }),
  new Problem({
    name: 'Login Attempts',
    difficulty: 'Medium',
    category: ['cpp'],
    paragraph:
        'Alice wrote a login system. The function \'checkLogin\' is getting input from the user and checks if the user is valid.\n' +
        'After a while someone managed to log in without knowing a valid username. Can you make sure it doesn\'t happen?\n' +
        'Hint: Try to think what is the meaning of the parameter \'l\'',
    code:
        '#include <string>\n' +
        '#include <iostream>\n' +
        '\n' +
        'using namespace::std;\n' +
        'bool isUser(string);\n' +
        '\n' +
        'bool checkLogin(int l){\n' +
        '    bool ok = false;\n' +
        '    string username;\n' +
        '    cin >> username;\n' +
        '    while(!isUser(username)){\n' +
        '        cout << \"Sorry, Try Again\" << endl;\n' +
        '        cin >> username;\n' +
        '    }\n' +
        '\n' +
        '    cout << \"logged in!\" << endl;\n' +
        '    return true;\n' +
        '}\n',
    type: 'open',
    tests: [
      {
        code:
            '#include <string>\n' +
            '#include <iostream>\n' +
            '\n' +
            'using namespace::std;\n' +
            'bool checkLogin(int);\n' +
            'bool isUser(string input){\n' +
            '    if(!(\n' +
            '            input == \"jonsnow\" ||\n' +
            '            input == \"nedstark\" ||\n' +
            '            input == \"tyrionlannister\" ||\n' +
            '            input == \"noobmaster69\"\n' +
            '    )){\n' +
            '        return false;\n' +
            '    }\n' +
            '    return true;\n' +
            '}\n' +
            '\n' +
            '#include <vector>\n' +
            'using std::string;\n' +
            '\n' +
            '\n' +
            'int main(){\n' +
            '    if(!(\n' +
            '            checkLogin(1)==false &&\n' +
            '            checkLogin(1)==true &&\n' +
            '            checkLogin(3)==false &&\n' +
            '            checkLogin(3)==true &&\n' +
            '            checkLogin(4)==false\n' +
            '    )){\n' +
            '        return 1;\n' +
            '    }\n' +
            '\n' +
            '\n' +
            '    return 0;\n' +
            '}\n',
        stdin:
            'admin\n' +
            'noobmaster69\n' +
            'pizza\n' +
            'pasta\n' +
            'potato\n' +
            'avocado\n' +
            'banana\n' +
            'jonsnow\n' +
            'aaa\n' +
            'bbb\n' +
            'ccc\n' +
            'ddd'
      }
    ]
  })
];
