
import styled from "styled-components";

export const FormContainer = styled.div ` 

    display: flex;
    flex-direction: column;
    width: 100%;
    /*padding: 10px;*/
    align-items: center;
    justify-content: center;
    gap:15px;
    padding-top:10px;
   


`

export const StyledForm = styled.form`
margin-top:100px;

    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 50%;
    min-width: 200px;
    max-width: 350px;
    position: relative;
`

export const StyledInput = styled.input`
    border: 1px solid brown;
   
    font-size: 18px;
    padding: 10px;
   
    padding: 10px;
    font-size: 18px;
    font-family: 'Fredoka', sans-serif;
    ::placeholder{
       
        font-family: 'Fredoka', sans-serif;
        font-size: 18px;
        font-weight: 400;
        padding: 10px;
    }

`

export const StyledTextarea = styled.textarea`
    border: 1px solid ;
    font-family: 'Fredoka', sans-serif;
   
    font-size: 18px;
    padding: 10px;
   
    padding: 10px;
    font-size: 18px;
    ::placeholder{
        color: aliceblue;
        font-family: 'Fredoka', sans-serif;
        font-size: 18px;
        font-weight: 400;
        padding: 10px;
    }

`


