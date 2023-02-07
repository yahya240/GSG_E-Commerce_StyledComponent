import React, { Component } from 'react'
import SomethingWrong from '../SomethingWrong'

export default class ErrorBoundary extends Component {

    state = {hasError: false}

    static getDerivedStateFromError(error){
        return {hasError: true}
    }

  render() {
    if(this.state.hasError){
        return <SomethingWrong />
    }

    return this.props.children
  }
}
