# MySQL入門
dotinstallでMySQLの入門基礎編を勉強しました

使用するのはMariaDB
SQLとはStructured Query Languageのこと

## 用語
- テーブル -> 表
- レコード -> 行
- カラム -> 列

## 基本知識

- テーブルを作るには
	```
	CREATE TABLE 名前 (
		カラム名 データ型
	);
	```

- レコードの挿入
	```
	INSERT INTO
		テーブル名 (カラム名)
	VALUES
		(値);
	```

- テーブルの構造を確認
	```
	DESC テーブル名;
	```

- テーブルの一覧を確認
	```
	SHOW TABLES;
	```

- テーブルを削除
	```
	// 単純に削除。ただ、このままだと指定したテーブルが存在していなかった場合エラーになる
	DROP TABLE テーブル名;

	// もし指定したテーブルが存在していたら削除
	DROP TABLE IF EXISTS テーブル名;
	```

- 指定のテーブルから全てのレコードを抽出
	```
	SELECT * FROM テーブル名;
	```

- コメント
	```
	-- comment

	# comment

	/*
	comment
	*/
	```

## データ型

- INT（整数）
	`UNSIGNED`をつけると、マイナス値を無効にして使える値の範囲を広げる

- DECIMAL（固定小数点）
	`DECIMAL(全体の桁, 小数点以下の数)`

- VARCHAR（可変長文字列）
	`VARCHAR(最大値)`

- CHAR（固定長文字列）

- ENUM（特定の文字列の中から一つだけ格納）
	`ENUM (文字列, 文字列, ...)`
	INSERT時には文字列かインデックス番号で指定する

- SET（特定の文字列の中から複数の値を格納）
	`SET (文字列, 文字列, ...)`
	INSERT時には文字列か数値で複数指定  
	数値は左から2の0乗（1）, 2の1乗（2）, 2の2乗（4）...となっている  
	そのため、数値で指定する場合は合計した値を入力すれば良い  
	```
	tests SET('test1', 'test2', 'test3')

	INSERT INTO テーブル名 (test) VALUES
		(3), // test1とtest2を入れたい場合
		(6) // test2とtest3を入れたい場合
	```

- BOOL（TRUE or FALSE）

- DATETIME（日時）
	`2020-10-10 15:42:04`のように指定する  
	時間を省略すると`00:00:00`となる  
	`NOW()`とすると現在の日付となる

- NULL（空）

- NOT NULL
	カラムに`NOT NULL`をつけると空だったときにエラーを出すようになる

- DEFAULT
	カラムに`DEFAULT デフォルト値`をつけると空だったときにデフォルト値が入るようになる

- CHECK
	カラムに`CHECK (条件式)`をつけると、値の範囲を制限できる。範囲外だとエラーになる

- UNIQUE
	カラムに`UNIQUE`をつけると、重複した値が挿入されたときにエラーが出るようになる

- PRIMARY KEY
	`PRIMARY KEY (カラム名)`とすることで指定したカラムを主キーに設定する  
	主キーのカラムが空だったり重複していたらエラーが出るようになる

- AUTO_INCREMENT
	PRIMARY KEYが設定されている場合、カラムにAUTO_INCREMENTをつけると、自動的に連番にしてくれる