# React

- コンポーネントの定義方法

関数コンポーネントとクラスコンポーネントの2種類あり、どちらでも良いけど、関数で作る方が簡潔

```JavaScript
// 関数コンポーネント
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

// クラスコンポーネント
class Welcome extends React.Component {
render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```
