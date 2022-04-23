# include <stdio.h>

/* 
三項演算子の書き方

返り値 = (条件) ? A : B;
*/

float getMax(float a, float b);
void sayHi(void);

float getMax(float a, float b) {
	return (a >= b) ? a : b;
}

void sayHi(void){
	printf("hi!\n");
}

int main(void) {

	float result;
	result = getMax(2.3, 5.6);
	printf("%f\n", result);

	sayHi();

	return 0;
}

