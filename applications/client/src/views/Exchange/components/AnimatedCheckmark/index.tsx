import React, {FC} from "react";
import {Checkmark, Circle, Check} from "./AnimatedCheckmark.styled";

export const AnimatedCheckmark: FC = () => (
    <Checkmark xmlns="http://www.w3.org/2000/svg" viewBox="0 0 104 104">
        <Circle cx="52" cy="52" r="50" fill="none"/>
        <Check fill="none" d="M40 54.2l7.1 7.2 16.7-16.8"/>
    </Checkmark>
);
