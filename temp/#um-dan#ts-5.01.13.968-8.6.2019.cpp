#include <iostream>
#include <vector>
#include <string.h>


bool checkAdmin(char* name){
    char const* admins[] = {"Dan The King", "Roey From Rafael", "Moshe From Rafael", "I AM THE ADMIN", "VALAR MORGHULIS"};
    for(int i=0;i<5;i++){
        if(!strcmp(name, admins[i]))
            return true;
    }
    return false;
}


using namespace std;

bool registerUser();

int main(){
    if(!(
            registerUser()==1 && 
            registerUser()==1 && 
            registerUser()==1 && 
            registerUser()==0 && 
            registerUser()==0 && 
            registerUser()==0    
    )){
        return 1;
    }

    return 0;
}
#include <stdio.h>

bool checkAdmin(char* name);

bool registerUser(){
    char user_name[20];
    bool access = 0;
    gets(user_name);
    if(checkAdmin(user_name)) //user_name is admin!
        access = true;
    if(access)
        return true;
    return false;
}