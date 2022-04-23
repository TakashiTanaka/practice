# include <stdio.h>

/* 
while文の書き方
*/

int main(void) {
	
	// 普通のwhile
	// 値の初期化
	int m = 0;

	while (m < 10) {
		printf("m: %d\n", m);
		m++;
	}

	// dowhile文
	// doの中に書いた内容は必ず実行される
	int n = 20;
	do {
		printf("n: %d\n", n);
		n++;
	} while (n < 10); 

	return 0;
}