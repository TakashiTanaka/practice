let load_text = $.cookie('accessdate'); //キーが入っていれば年月日を取得
let myD = new Date();//日付データを取得
let myYear = String(myD.getFullYear());//年
let myMonth = String(myD.getMonth() + 1);//月
let myDate = String(myD.getDate());//日

if (load_text != myYear + myMonth + myDate) {//cookieデータとアクセスした日付を比較↓
	$("#js_load").css("display", "block");//１回目はローディングを表示
	let myD = new Date();
	let myYear = String(myD.getFullYear());
	let myMonth = String(myD.getMonth() + 1);
	let myDate = String(myD.getDate());
	$.cookie('accessdate', myYear + myMonth + myDate); //accessdateキーで年月日を記録
} else {
	$("#js_load").css("display", "none");//同日2回目のアクセスでローディング画面非表示
}