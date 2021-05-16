import React, {FC} from "react";
import {ICurrencyDropdownProps} from "./CurrencyDropdown.types";
import useDropdownMenu from "react-accessible-dropdown-menu-hook";
import {Dropdown, DropdownButton, DropdownMenu, DropdownMenuOption} from "@bank/ui-library";

export const CurrencyDropdown: FC<ICurrencyDropdownProps> = ({ currencies, onChange, value }) => {
    const {buttonProps, itemProps, isOpen, setIsOpen} = useDropdownMenu(Object.keys(currencies).length);

    const handleChange = (newCurrencyCode: string) => {
        setIsOpen(false);
        return onChange(newCurrencyCode);
    };

    return (
        <Dropdown role="combobox">
            <DropdownButton {...buttonProps} type="button">{value}</DropdownButton>
            <DropdownMenu role="menu" isOpen={isOpen}>
                {Object.keys(currencies).map((key, index) => (
                    <DropdownMenuOption
                        key={currencies[key].code}
                        onClick={() => handleChange(key)}
                        {...itemProps[index]}
                    >
                        {currencies[key].name} <span>{currencies[key].code}</span>
                    </DropdownMenuOption>
                ))}
            </DropdownMenu>
        </Dropdown>
    );
};
