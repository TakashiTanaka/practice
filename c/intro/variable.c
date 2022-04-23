# include <stdio.h>

/* 
変数の使い方

データ型
int（整数） %d
float（実数） %f
char（文字） %c

・変数の有効期限
関数内で宣言した変数は自動変数となる
static関数にすると静的変数にすることができる
例： static int a = 0;
*/

int main(void) {

	int x = 10;
	float y = 5.2;
	char c = 'A';
	
	printf("x = %d, y = %f, c = %c\n", x, y, c);
	return 0;
}