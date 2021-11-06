import { ThemeProvider } from "@material-ui/core/styles";
import { createMount } from "@material-ui/core/test-utils";import { ComponentType } from "react";
import { theme as appTheme } from "~config";

const theme = appTheme();

export function setupMountedThemeComponent<Props>(TestComponent: ComponentType<Props>, props: Props = {} as Props) {
  return createMount()(
    <ThemeProvider theme={theme}>
      <TestComponent {...props} />
    </ThemeProvider>
  );
}
