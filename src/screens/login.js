import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'

export default class Login extends Component {
    constructor() {
        super()
        this.state = {
            login: 'Informe seu login',
            senha: 'Informe sua senha'
        }
    }

    render(){
        return (
            <View>
                <Text>Unipê - React Native</Text>
                
                <Text>Login</Text>
                <TextInput value={this.state.login}/>

                <Text>Senha</Text>
                <TextInput value={this.state.senha}/>

                <TouchableOpacity>
                    <Text>Entrar</Text>
                </TouchableOpacity>
            </View>
        )
    }
}