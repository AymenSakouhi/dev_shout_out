<!-- TABLE OF CONTENTS -->

# 📗 Table of Contents

- [📖 About the Project](#about-project)
  - [🛠 Built With](#built-with)
    - [Tech Stack](#tech-stack)
    - [Key Features](#key-features)
  - [🚀 Live Demo](#live-demo)
- [👥 Authors](#authors)
- [🤝 Contributing](#contributing)
- [⭐️ Show your support](#support)
- [🙏 Acknowledgements](#acknowledgements)
- [📩 Support & Feedback](#support)
- [📝 License](#license)

<!-- PROJECT DESCRIPTION -->

# 📖 About This Project <a name="about-project"></a>

> Dev Shoutout is a project made with React-Vite, where we also use TypeScript and style with Tailwind CSS. It incorporates various packages and tools such as Zustand, Lucide, Nivo, and React Query.

# Sample Of Website <a name="Sample-Of-Website"></a>

![alt text](./sample/1.png)
![alt text](./sample/2.png)

## 🛠 Built With <a name="built-with"></a>

### Tech Stack <a name="tech-stack"></a>

<details>
  <summary>Client</summary>
  <ul>
  <li><a href="https://en.wikipedia.org/wiki/HTML">Html</a></li>
  <li><a href="https://tailwindcss.com/">Tailwind</a></li>
  <li><a href="https://en.wikipedia.org/wiki/TypeScript">TypeScript</a></li>
  <li><a href="https://react.dev/">React</a></li>
  <li><a href="https://zustand-demo.pmnd.rs/">Zustand</a></li>
  <li><a href="https://lucide.dev/guide/packages/lucide-react">Lucide</a></li>
  <li><a href="https://nivo.rocks/">Nivo</a></li>
  </ul>
</details>

<!-- Features -->

### Key Features <a name="key-features"></a>

- **[Responsive Website]**
- **[Flex & Grid]**
- **[Tailwind ]**
- **[TypeScript ]**
- **[Tslint ]**
- **[Zustand ]**
- **[Lucide ]**
- **[Nivo ]**

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LIVE DEMO -->

## 🚀 Live Demo <a name="live-demo"></a>

> Add a link to your deployed project.

- [Live Demo Link](https://ameer2000mzori.github.io/awesomebooks/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- AUTHORS -->

## 👥 Authors <a name="authors"></a>

👤 **Author1**

- GitHub: [@AymenSakouhi](https://github.com/AymenSakouhi)
- LinkedIn: [Aymen Sakouhi](https://www.linkedin.com/in/sakouhiaymen/)

👤 **Author2**

- GitHub: [@Ameer2000Mzori](https://github.com/Ameer2000Mzori)
- LinkedIn: [Ameer Ameen](https://www.linkedin.com/in/mohammed-ameen-82314425b/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## 🤝 Contributing <a name="contributing"></a>

Contributions, issues, and feature requests are welcome! please dont forget to contact ameerapex496@gmail.com

Feel free to check the [issues page](../../issues/).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- SUPPORT -->

## ⭐️ Show your support <a name="support"></a>

If you like this project, don't hesitate to give it a star 😊.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGEMENTS -->

## 🙏 Acknowledgments <a name="acknowledgements"></a>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- Support and feedback -->

## 📩 Support & Feedback <a name="support"></a>

If you have any feedback, please reach out to me at ameerapex496@gmail.com 📨

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## 📝 License <a name="license"></a>

This project is [MIT](./LICENSE) licensed.

_NOTE: we recommend using the [MIT license](https://choosealicense.com/licenses/mit/) - you can set it up quickly by [using templates available on GitHub](https://docs.github.com/en/communities/setting-up-your-project-for-healthy-contributions/adding-a-license-to-a-repository). You can also use [any other license](https://choosealicense.com/licenses/) if you wish._

<p align="right">(<a href="#readme-top">back to top</a>)</p>

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname
  }
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
