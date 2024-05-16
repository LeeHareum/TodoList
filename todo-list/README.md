# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

-----------------------------
todo-list에서는 React의 상태 관리 기능 중 하나인 useState를 사용했습니다. 
useState는 함수형 컴포넌트에서 상태를 관리하는 데 사용되며, 각각의 상태를 독립적으로 관리할 수 있습니다. 
이를 통해 애플리케이션의 상태를 변경하고, 변경된 상태에 따라 화면을 다시 렌더링할 수 있습니다.

여기서 useState를 사용하여 관리한 상태는 다음과 같습니다:

- todos: 할 일 목록을 관리하는 배열입니다.
- title: 새로운 할 일의 제목을 관리하는 상태입니다.
- content: 새로운 할 일의 내용을 관리하는 상태입니다.
  
useState를 사용하여 각각의 상태를 초기값과 함께 정의하고, 이후에 상태를 변경할 때는 해당 상태를 업데이트하는 함수를 호출하여 변경합니다.
이렇게 상태를 변경하면 React는 자동으로 해당 컴포넌트를 다시 렌더링하여 변경된 상태를 반영합니다.
이것이 React의 상태 관리 기능 중 하나인 useState의 기본 개념입니다.
