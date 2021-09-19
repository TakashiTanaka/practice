Vue.component('my-row', {
	template: `
	<tr>
		<td>{{id}}</td>
		<td>{{name}}</td>
		<td>{{price}}</td>
	</tr>
	`,
	props: ['id', 'name', 'price'],
});