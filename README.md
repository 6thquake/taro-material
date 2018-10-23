<p align="center">
  <a href="/" rel="noopener" target="_blank"><img width="200" src="/static/brand.png" alt="Taro-Material logo"></a></p>
</p>

<h1 align="center">Taro-Material</h1>

<div align="center">

[Taro](https://taro.aotu.io/) components that implement [Google's Material Design](https://www.google.com/design/spec/material-design/introduction.html).

[![npm package]](http://registry.npmjs.org/package/taro-material)
[![npm download]](http://registry.npmjs.org/package/taro-material)

![Code style](/static/images/code_style-prettier.svg)

</div>


## Installation

Taro-Material is available as an [npm package](http://registry.npmjs.org/package/taro-material).

**[Stable channel (v1.x)]**
```sh
// with npm
npm install @6thquake/taro-material

// with yarn
yarn add taro-material
```

## Supporting Taro-Material

Taro-Material is an MIT-licensed open source project. It's an independent project with ongoing development made possible thanks to the support of these awesome [backers](/BACKERS.md).

Your contributions, donations, and sponsorship allow us to build a sustainable organization. They directly support office hours, continued enhancements, great documentation and learning materials!


## Usage (v1.x)

Here is a quick example to get you started, **it's all you need**:

```jsx
import Taro, { Component } from '@tarojs/taro'
import Button from '@6thquake/taro-material/Button';

class App extends Component {
  render () {
  	return (
	    <Button variant="raised" color="primary">
	      Hello World
	    </Button>
	  );
  }
}

Taro.render(<App />, document.getElementById('app'))
```

## Questions

For *how-to* questions and other non-issues,
please use [StackOverflow](http://stackoverflow.com/questions/tagged/taro-material) instead of Github issues.
There is a StackOverflow tag called "taro-material" that you can use to tag your questions.

## Examples

Are you looking for an example project to get started?
[We host some](/getting-started/example-projects/).

## Documentation

Check out our [documentation website](/).

## Contributing

We'd greatly appreciate any [contribution](/CONTRIBUTING.md) you make. :)

## Changelog

Recently Updated?
Please read the [changelog](https://github.com/6thquake/taro-material/tags).

## Roadmap

The future plans and high priority features and enhancements can be found in the [ROADMAP.md](/discover-more/roadmap/) file.

## Thanks

[<img src="https://storage.360buyimg.com/taro-static/static/images/logo.png" width="120">](https://taro.aotu.io/)

Thank you to [Taro](https://taro.aotu.io/) for providing the infrastructure that allows us to 
expand based on it, with standard specifications, and clear path.

[<img src="https://www.browserstack.com/images/mail/browserstack-logo-footer.png" width="120">](https://www.browserstack.com/)

Thank you to [BrowserStack](https://www.browserstack.com/) for providing the infrastructure that allows us to test in real browsers.

## License

This project is licensed under the terms of the
[MIT license](/LICENSE).
