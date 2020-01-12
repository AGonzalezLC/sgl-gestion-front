import React from 'react'
import { InputGroup, Input, Icon } from 'rsuite';

const styles = {
    width: 300,
    marginBottom: 10
  };
const FilterComponent = () => {

    return (
        <div>
            <InputGroup style={styles}>
                <Input />
                <InputGroup.Addon>
                    <Icon icon="search" />
                </InputGroup.Addon>
            </InputGroup>
        </div>
    )
}
export default FilterComponent;
