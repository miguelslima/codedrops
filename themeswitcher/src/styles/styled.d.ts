import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      secundaty: string;

      background: string;
      text: string;
    }
  }
}