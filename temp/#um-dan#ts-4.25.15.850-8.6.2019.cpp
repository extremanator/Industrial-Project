#include <vector>
#include <iostream>

using namespace std;

int get_element(std::vector<int>, int);

int main() {
    vector<int> v;
    vector<int> v2(1);
    v2[0]=4;
    vector<int> v3(6);
    v3[0] = 7426;
    v3[1] = 13957;
    v3[2] = 23856;
    v3[3] = 10358;
    v3[4] = 348201;
    v3[5] = 24967;

    if (!(get_element(v2, 3) == -1 &&
          get_element(v2, 0) == 4 &&
          get_element(v, 0) == -1 &&
          get_element(v, -4) == -1 &&
          get_element(v3, -4) == -1 &&
          get_element(v3, 0) == 7426 &&
          get_element(v3, 5) == 24967 &&
          get_element(v3, 8) == -1)) {
        return 1;
    }

    return 0;
}
#include <vector>

int get_element(std::vector<int> c, int i){
	if(i>=size() || i < 0) return -1;
    return c[i];
}