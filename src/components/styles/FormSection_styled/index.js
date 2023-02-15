
import styled from 'styled-components'

const FormSection = styled.form`
    width: 387px;
    margin: 3rem 0 5rem;
    background-color: ${props => props.theme.pallet.whiteColor};

    box-shadow: 0px 3px 10px rgba(32, 32, 32, 0.1);
    border-radius: 6px;

    @media screen and (max-width: 576px){
        width: 100%;
        margin: 0;
    }
`

export default FormSection