#include <string>
#include <iostream>

using namespace::std;
bool checkLogin(int);
bool isUser(string input){
    if(!(
            input == "jonsnow" ||
            input == "nedstark" ||
            input == "tyrionlannister" ||
            input == "noobmaster69"
    )){
        return false;
    }
    return true;
}

#include <vector>
using std::string;


int main(){
    if(!(
            checkLogin(1)==false &&
            checkLogin(1)==true &&
            checkLogin(3)==false &&
            checkLogin(3)==true &&
            checkLogin(4)==false
    )){
        return 1;
    }


    return 0;
}
#include <string>
#include <iostream>

using namespace::std;
bool isUser(string);

bool checkLogin(int l){
    string username;
    cin >> username;
    while(!isUser(username)){
        cout << "Sorry, Try Again" << endl;
        cin >> username;
    }

    cout << "loged in!" << endl;
    return true;
}