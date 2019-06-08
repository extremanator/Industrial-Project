const Problem = require('../models/problem');

module.exports = [
  new Problem({
    name: 'Compare Password',
    difficulty: 'Easy',
    points: 5,
    category: ['cpp', 'easy', 'STR'],
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
        '\n' +
        'bool check_password(char *input_password, int len) {\n' +
        '    char *correct = (char *) \"adminadmin\";\n' +
        '    if (!strncmp(correct, input_password, len)) {\n' +
        '        return true;\n' +
        '    }\n' +
        '    return false;\n' +
        '}\n',
    type: 'open',
    num_solved: 0,
    num_attempted: 0,
    tests: [
      {
        code:
            '#include <string.h>\n' +
            '#include <stdlib.h>\n' +
            '#include <stdio.h>\n' +
            '\n' +
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
    ],
    solutions: ['a',],
    solution: 'a'
  }),
  new Problem({
    name: 'Array Boundaries',
    difficulty: 'Easy',
    points: 5,
    category: ['cpp', 'easy', 'CTR'],
    paragraph:
        'The following function should return the i\'th element of the given array.\n' +
        'When using the function some unexpected results happened. Can you fix it? \n' +
        'If any error happens \'-1\' should be returned\n' +
        'Only update the function body.',
    code:
        '//if i out of range make sure to return \'-1\'\n' +
        'int get_item(int *arr, int i, int size){\n' +
        '    return arr[i];\n' +
        '}',
    type: 'open',
    num_solved: 0,
    num_attempted: 0,
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
    ],
    solutions: ['a'],
    solution: 'a'
  }),
  new Problem({
    name: 'Login Attempts',
    difficulty: 'Medium',
    points: 10,
    category: ['cpp', 'medium', 'FIO', 'MSC'],
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
        '    string username;\n' +
        '    cin >> username;\n' +
        '    while(!isUser(username)){\n' +
        '        cout << "Sorry, Try Again" << endl;\n' +
        '        cin >> username;\n' +
        '    }\n' +
        '\n' +
        '    cout << "loged in!" << endl;\n' +
        '    return true;\n' +
        '}',
    type: 'open',
    num_solved: 0,
    num_attempted: 0,
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
  }),
  new Problem({
    name: 'Getting started with Vectors',
    difficulty: 'Easy',
    points: 5,
    category: ['cpp', 'easy', 'CTR'],
    paragraph:
        'Bob wrote the following function which receives as parameters: a container and an index.\n' +
        'It should return the element in index i, or \'-1\' if there was an error.\n' +
        'When Bob tried to use this function he encountered some issues, can you help him fix it?\n' +
        '(You can assume the container does not contain \'-1\').',
    code:
        '#include <vector>\n' +
        '\n' +
        'int get_element(std::vector<int> c, int i){\n' +
        '    return c[i];\n' +
        '}',
    type: 'open',
    num_solved: 0,
    num_attempted: 0,
    tests: [
      {
        code:
            '#include <vector>\n' +
            '#include <iostream>\n' +
            '\n' +
            'using namespace std;\n' +
            '\n' +
            'int get_element(std::vector<int>, int);\n' +
            '\n' +
            'int main() {\n' +
            '    vector<int> v;\n' +
            '    vector<int> v2(1);\n' +
            '    v2[0]=4;\n' +
            '    vector<int> v3(6);\n' +
            '    v3[0] = 7426;\n' +
            '    v3[1] = 13957;\n' +
            '    v3[2] = 23856;\n' +
            '    v3[3] = 10358;\n' +
            '    v3[4] = 348201;\n' +
            '    v3[5] = 24967;\n' +
            '\n' +
            '    if (!(get_element(v2, 3) == -1 &&\n' +
            '          get_element(v2, 0) == 4 &&\n' +
            '          get_element(v, 0) == -1 &&\n' +
            '          get_element(v, -4) == -1 &&\n' +
            '          get_element(v3, -4) == -1 &&\n' +
            '          get_element(v3, 0) == 7426 &&\n' +
            '          get_element(v3, 5) == 24967 &&\n' +
            '          get_element(v3, 8) == -1)) {\n' +
            '        return 1;\n' +
            '    }\n' +
            '\n' +
            '    return 0;\n' +
            '}\n'
      }
    ]
  }),
  new Problem({
    name: 'Simple Copy',
    difficulty: 'Easy',
    points: 5,
    category: ['cpp', 'easy', 'STR', 'MEM'],
    paragraph:
        'Bob tried to implement a function to help him copy data from one place to another, but it didn\'t work as expected.\n' +
        'Find the problem and fix it.\n' +
        'The function \'f\' receives src and dest, both are ending with null terminator.\n' +
        'If the copy fails return \'-1\', if it succeeds then return \'0\'.',
    code:
        '#include <stdio.h>\n' +
        '#include <string.h>\n' +
        '\n' +
        'int f(char* src, char* dest){\n' +
        '    strcpy(dest, src);\n' +
        '    return 0;\n' +
        '}',
    type: 'open',
    num_solved: 0,
    num_attempted: 0,
    tests: [
      {
        code:
            '#include <stdio.h>\n' +
            '#include <string.h>\n' +
            '\n' +
            'int f(char*, char*);\n' +
            '\n' +
            'int main(){\n' +
            '    char* null_arr = NULL;\n' +
            '    char dest[10]={\'\\0\'};\n' +
            '    char buf1[20] = "Hello World, Test 1";\n' +
            '    char buf2[30] = "This is a Buffer Overflow";\n' +
            '    char buf3[5] = "lol";\n' +
            '    char buf4[4] = "Dan";\n' +
            '    if(!(   f(null_arr, dest)==-1 && !strcmp(dest, "") &&\n' +
            '            f(buf1, null_arr)==-1 && !strcmp(dest, "") &&\n' +
            '            f(buf1, dest)==-1 && !strcmp(dest, "")     &&\n' +
            '            f(buf2, dest)==-1 &&  !strcmp(dest, "")    &&\n' +
            '            f(buf3, dest)==0 && !strcmp(dest, "lol")   &&\n' +
            '            f(buf4, dest)==0 && !strcmp(dest, "Dan"))){ \n' +
            '        return 1; \n' +
            '    }\n' +
            '    return 0;\n' +
            '}\n'
      }
    ]
  }),
  new Problem({
    name: 'Basics using Exceptions',
    difficulty: 'Easy',
    points: 5,
    category: ['cpp', 'easy', 'ERR'],
    paragraph:
        'The function \'f\' should return error code \'-1\' when B is thrown and \'-2\' when D is thrown, otherwise return \'0\'.\n' +
        'Something is not right with the following code, can you figure it out?\n' +
        '\n' +
        'The file contins the following lines:\n' +
        '\n' +
        'class B {};\n' +
        'class D : public B {};',
    code:
        '#include <iostream>\n' +
        'using namespace std;\n' +
        '\n' +
        'int f(int n){\n' +
        '    try{\n' +
        '        g(n);\n' +
        '    }\n' +
        '    catch(B &b){\n' +
        '        return -1;\n' +
        '    }\n' +
        '    catch(D &d){\n' +
        '        return -2;\n' +
        '    }\n' +
        '    catch(...){\n' +
        '        return -3;\n' +
        '    }\n' +
        '    cout << "ok" << endl;\n' +
        '    return 0;\n' +
        '}',
    type: 'open',
    num_solved: 0,
    num_attempted: 0,
    tests: [
      {
        code:
            'class B {};\n' +
            'class D : public B {};\n' +
            '\n' +
            'void g(int n){\n' +
            '    if(n<0 && -1*n % 2 == 0){ //neg even\n' +
            '        throw D();\n' +
            '    }\n' +
            '    if(n<0){\n' +
            '        throw B();\n' +
            '    }\n' +
            '}\n' +
            '\n' +
            '\n' +
            'int f(int);\n' +
            '\n' +
            'int main(){\n' +
            '    if(!(\n' +
            '            f(2)==0 &&\n' +
            '            f(3)==0 &&\n' +
            '            f(-1)==-1 &&\n' +
            '            f(-6)==-2 &&\n' +
            '            f(0)==0 &&\n' +
            '            f(-72)==-2\n' +
            '    )){\n' +
            '        return 1;\n' +
            '    }\n' +
            '    return 0;\n' +
            '}\n'
      }
    ]
  }),
  new Problem({
    name: 'Don\'t forget the little things',
    difficulty: 'Easy',
    points: 5,
    category: ['cpp', 'easy', 'DCL'],
    paragraph:
        'When using the following function some unexpected results happened.\n' +
        'Fix the code so that it will return the sum of the numbers 1, ..., n.\n' +
        'In case of any error the return value should be \'-1\'.',
    code:
        '#include <vector>\n' +
        '\n' +
        'int get_sum(int t){\n' +
        '    int res;\n' +
        '    for(int j=0;j<t;j++){\n' +
        '        res += j+1;\n' +
        '    }\n' +
        '    return res;\n' +
        '}',
    type: 'open',
    num_solved: 0,
    num_attempted: 0,
    tests: [
      {
        code:
            '#include <vector>\n' +
            '\n' +
            'int get_sum(int);\n' +
            '\n' +
            'int main(){\n' +
            '\n' +
            '    if(!(get_sum(-2)==-1 &&\n' +
            '         get_sum(0)==-1 &&\n' +
            '         get_sum(4)==10 &&\n' +
            '         get_sum(-4)==-1 &&\n' +
            '         get_sum(1) == 1)){\n' +
            '        return 1;\n' +
            '    }\n' +
            '\n' +
            '    return 0;\n' +
            '}\n'
      }
    ]
  }),
  new Problem({
    name: 'Strings understanding',
    difficulty: 'Easy',
    points: 5,
    category: ['cpp', 'easy', 'STR'],
    paragraph:
        'The following function should take in a positive number as argument a string and adds the number to the end of the string to create a message.\n' +
        'There are some problems with the current implementation. Can you fix the given code?\n' +
        '(If there are any errors the function should return \'-1\')',
    code:
        '#include <string>\n' +
        '\n' +
        'int getToPrint(int n, char* output) {\n' +
        '    if(n<0)\n' +
        '        return -1;\n' +
        '    char* res = "My digit is:  ";\n' +
        '    res[13] =  \'0\' + n;\n' +
        '    for(int i=0;i<15;i++){\n' +
        '        output[i] = res[i];\n' +
        '    }\n' +
        '\n' +
        '}',
    type: 'open',
    num_solved: 0,
    num_attempted: 0,
    tests: [
      {
        code:
            '#include <vector>\n' +
            '#include <string.h>\n' +
            '\n' +
            'int getToPrint(int, char*);\n' +
            '\n' +
            'int main(){\n' +
            '    char a[15];\n' +
            '    char b[15];\n' +
            '    char c[15];\n' +
            '    char d[15];\n' +
            '    char e[15];\n' +
            '\n' +
            '    getToPrint(1, a);\n' +
            '    getToPrint(4, b);\n' +
            '    getToPrint(5, c);\n' +
            '    getToPrint(8, d);\n' +
            '    //getToPrint(-1, e);\n' +
            '\n' +
            '\n' +
            '    if(!(\n' +
            '            !strcmp(a,"My digit is: 1") &&\n' +
            '            !strcmp(b,"My digit is: 4") &&\n' +
            '            !strcmp(c,"My digit is: 5") &&\n' +
            '            !strcmp(d,"My digit is: 8") &&\n' +
            '            getToPrint(-1, e)==-1\n' +
            '    )){\n' +
            '        return 1;\n' +
            '    }\n' +
            '    return 0;\n' +
            '}\n'
      }
    ]
  }),
  new Problem({
    name: 'Sizeof 1',
    difficulty: 'Easy',
    points: 5,
    category: ['cpp', 'easy', 'MSC'],
    paragraph:
        'What is the value of size in the following program equal to?\n' +
        'void func(char s[]){\n' +
        '\tsize_t size = sizeof(s)/sizeof(s[0]);\n' +
        '}\n' +
        'int main(void){\n' +
        '\tchar str[] = "0123456789";\n' +
        '\tfunc(str);\n' +
        '}',
    code: ' ',
    type: 'close',
    num_solved: 0,
    num_attempted: 0,
    tests: [{code: ''}],
    solutions: [
      'sizeof("0123456789")',
      'sizeof("0123456789") + 1',
      'sizeof(char*)',
      'sizeof("0123456789")/sizeof(char)'
    ],
    solution: 'sizeof(char*)'
  }),
  new Problem({ 
    name: 'Do you know basic math',
    difficulty: 'Easy',
    points: 5,
    category: ['cpp', 'easy', 'MSC'],
    paragraph:
        'Solve the following: 2*3+3 = ?',
    code: ' ',
    type: 'close',
    num_solved: 0,
    num_attempted: 0,
    tests: [{code: ''}],
    solutions: [
      '12',
      '4',
      '8',
      '9'
    ],
    solution: '9'
  }),
  new Problem({
    name: 'User Input',
    difficulty: 'Medium',
    points: 10,
    category: ['cpp', 'medium', 'FIO'],
    paragraph:
        'Alice tries to write a function to classify users. It reads an username as input and returns \'1\' if the user is an Admin,\n' +
        'and \'0\' otherwise. Some of Alice\'s workers were smarter than her and managed to register as admins even though they are not!\n' +
        'Help Alice figure out why this is happening.\n' +
        'Fix the following function to return \'1\' if username is an admin and \'0\' otherwise.\n' +
        '\'checkAdmin\' returns \'1\' if a user is an Admin and \'0\' otherwise.',
    code:
        '#include <stdio.h>\n' +
        '\n' +
        'bool checkAdmin(char* name);\n' +
        '\n' +
        'bool registerUser(){\n' +
        '    char user_name[20];\n' +
        '    bool access = 0;\n' +
        '    gets(user_name);\n' +
        '    if(checkAdmin(user_name)) //user_name is admin!\n' +
        '        access = true;\n' +
        '    if(access)\n' +
        '        return true;\n' +
        '    return false;\n' +
        '}',
    type: 'open',
    num_solved: 0,
    num_attempted: 0,
    tests: [
      {
        code:
            '#include <iostream>\n' +
            '#include <vector>\n' +
            '#include <string.h>\n' +
            '\n' +
            '\n' +
            'bool checkAdmin(char* name){\n' +
            '    char const* admins[] = {"Dan The King", "Roey From Rafael", "Moshe From Rafael", "I AM THE ADMIN", "VALAR MORGHULIS"};\n' +
            '    for(int i=0;i<5;i++){\n' +
            '        if(!strcmp(name, admins[i]))\n' +
            '            return true;\n' +
            '    }\n' +
            '    return false;\n' +
            '}\n' +
            '\n' +
            '\n' +
            'using namespace std;\n' +
            '\n' +
            'bool registerUser();\n' +
            '\n' +
            'int main(){\n' +
            '    if(!(\n' +
            '            registerUser()==1 && \n' +
            '            registerUser()==1 && \n' +
            '            registerUser()==1 && \n' +
            '            registerUser()==0 && \n' +
            '            registerUser()==0 && \n' +
            '            registerUser()==0    \n' +
            '    )){\n' +
            '        return 1;\n' +
            '    }\n' +
            '\n' +
            '    return 0;\n' +
            '}\n',
        stdin:
            'Dan The King\n' +
            'Roey From Rafael\n' +
            'VALAR MORGHULIS\n' +
            'admin\n' +
            'ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\n' +
            'Moshe From Rafael ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\n'
      }
    ]
  })
];
