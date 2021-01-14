import React from 'react';

import { CustomButtonContainer } from './custom-button.Style';

const CustomButton = ({ children, ...props }) => (
  <CustomButtonContainer {...props}>{children}</CustomButtonContainer>
);

export default CustomButton;