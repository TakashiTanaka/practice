# include <stdio.h>

/* 
配列の使い方
*/

int main(void) {

	int sales[3];

	sales[0] = 200;
	sales[1] = 400;
	sales[2] = 500;

	int sales2[] = {200, 400, 300};

	printf("%d\n", sales2[1]);
	return 0;
}