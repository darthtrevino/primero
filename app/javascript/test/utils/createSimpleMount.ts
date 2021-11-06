import { createMount } from "@material-ui/core/test-utils";
import { ReactElement } from "react";

export const createSimpleMount = (element: ReactElement) => createMount()(element);
