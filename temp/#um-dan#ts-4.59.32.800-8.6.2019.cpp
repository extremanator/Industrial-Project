#include <vector>
#include <string.h>

int getToPrint(int, char*);

int main(){
    char a[15];
    char b[15];
    char c[15];
    char d[15];
    char e[15];

    getToPrint(1, a);
    getToPrint(4, b);
    getToPrint(5, c);
    getToPrint(8, d);
    //getToPrint(-1, e);


    if(!(
            !strcmp(a,"My digit is: 1") &&
            !strcmp(b,"My digit is: 4") &&
            !strcmp(c,"My digit is: 5") &&
            !strcmp(d,"My digit is: 8") &&
            getToPrint(-1, e)==-1
    )){
        return 1;
    }
    return 0;
}
#include <string>

int getToPrint(int n, char* output) {
    if(n<0)
        return -1;
    char* res = "My digit is:  ";
    res[13] =  '0' + n;
    for(int i=0;i<15;i++){
        output[i] = res[i];
    }

}