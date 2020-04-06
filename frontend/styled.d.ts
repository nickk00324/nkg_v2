// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    maxWidth: string;
    pink: string;
    grey: string;
    offWhite: string;
    greenBlue: string;
    border: string;
    marginFromFooter: string;
  }
}
