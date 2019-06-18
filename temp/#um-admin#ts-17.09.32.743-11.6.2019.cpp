#include <iostream>
using namespace std;

int our_assert(bool condition){
    return (condition)?0:1;
}

int get_item(int*, int, int);
int main(){
    int a[3]={4,7,-13};
    return our_assert(get_item(a,0,3)==4 && get_item(a,1,3)==7 && get_item(a,2,3)==-13
    && get_item(a,5,3)==-1 && get_item(a,-5,3)==-1);
}
//if i out of range make sure to return '-1'
int get_item(int *arr, int i, int size){
    return arr[i];
}