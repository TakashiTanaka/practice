# include <stdio.h>

/* 
関数の書き方

関数を書くときは予め使用する関数を宣言する。
プロトタイプ宣言
*/

float getMax(float a, float b);
void sayHi(void);

// 返り値のない関数はvoidを指定する
void sayHi(void){
	printf("hi!\n");
}

// c言語では最初にmain関数を見て実行するようにできている
// 返り値は0を返している（無事に処理が終えたという印）
int main(void) {

	float result;
	result = getMax(2.3, 5.6);
	printf("%f\n", result);

	sayHi();

	return 0;
}

float getMax(float a, float b) {
	if(a >= b) {
		return a;
	} else {
		return b;
	}
}
