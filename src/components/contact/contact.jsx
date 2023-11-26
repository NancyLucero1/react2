
import React from "react";
import { Button } from "../button/button";
import { FormContainer, StyledForm, StyledInput, StyledTextarea } from "./styles";

export const Contact= () => {
    return(

       
    
    <FormContainer>
       <h3>Stay in touch</h3>
        <StyledForm action="contact">
            <StyledInput 
                type="text" 
                placeholder="Name/Last Name"
                id="name" />
            
            <StyledInput 
                type="mail"
                placeholder="Please enter a valid email"
                id="mail" />
            <StyledInput 
                type="Phone number"
                placeholder="Please enter a valid phone number"
                id="mail" />

            <StyledTextarea 
                name="subject" 
                id="subject" 
                placeholder="Please leave us a message, we glad to know from you."
                cols="30" rows="10">
            </StyledTextarea>
            <Button type="submit" >Submit</Button>
        </StyledForm>
    </FormContainer>
    )
};            
       

        
           
