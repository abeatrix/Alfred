import styled from 'styled-components'

export const Container = styled.div`
    min-height: 700px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    overflow: hidden;
    background: #50E68C;
`

export const FormWrap = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`
export const Icon = styled.div`
    margin-left: 30px;
    margin-top: 30px;
    text-decoration: none;
    color: white;
    front-weight: 800;
    font-size: 32px;
`

export const FormContent = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`
export const Form = styled.form`
    background: #010101;
    max-width: 400px;
    height: auto;
    width: 100%;
    display: grid;
    margin: 0 auto;
    padding: 80px 32px;
    border-radius: 10px;
    box-shadow: 0 1px 3px grey;
    color: white;
`

export const FormH1 = styled.h1`
    margin-bottom: 40px;
    color: white;
    font-size: 20px;
    font-weight: 400px;
    text-align: center;
`

export const FormLabel = styled.label`
    margin-bottom: 8px
    font-size: 14px
    color: white;
`

export const FormInput = styled.input`
    padding: 15px 15px;
    margin-bottom: 32px;
    border: none;
    border-radius: 4px;
`

export const FormButton = styled.button`
    background: #50E68C;
    padding: 15px 0;
    border: none;
    border-radius: 4px;
    color: white;
    cursor: pointer;
`

export const Text = styled.span`
    text-align: center;
    margin-top: 25px;
    color: white;
    font-size: 15px;
`
