# include <stdio.h>

/* 
for文の書き方

contine: 1回スキップ
break: ループを抜ける
*/

int main(void) {
	
	// 値の初期化
	int m = 0;
	
	for (m = 0; m < 10; m++)
	{
		if(m == 3) {
			continue;
		}
		if(m == 8) {
			break;
		}
		printf("m: %d\n", m);
	}
	
	return 0;
}