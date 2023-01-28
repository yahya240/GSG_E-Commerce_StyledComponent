import styled from 'styled-components'


const FormButton = styled.button`
    width: 100%;
    height: 40px;

    color: ${props => props.theme.pallet.whiteColor};
    background: ${props => props.theme.pallet.blueColor};
    border: 1px solid ${props => props.theme.pallet.blueColor};
    border-radius: 6px;
    cursor: pointer;

`

export default FormButton