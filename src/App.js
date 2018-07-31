import React from 'react';
import AddOption from './AddOption';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import OptionModal from './OptionModal';

class IndecisionApp extends React.Component {
    state = {
        options: [],
        selectedOption: undefined
    };

    handleClearSelectedOption = () => {
        this.setState(() => ({
            selectedOption: undefined
        }));
    }

    handleDeleteOptions = () => {
        this.setState(() => ({
            options: [] 
        }));
     }
     
     handleDeleteOption = (optionToRemove) => {
         this.setState((prevState) => ({
             options: prevState.options.filter((option) => optionToRemove !== option)
         }));
     }
     
     handlePick = () => {
         const randomNumber = Math.floor(Math.random() * this.state.options.length);
         const option = this.state.options[randomNumber];

         this.setState(() => ({
            selectedOption: option
         }));
        
     }
 
     handleAddOption = (option) => {
         if(!option) {    //// this will return an error if the array is empty
             return 'enter valid value';
        }else if(this.state.options.indexOf(option) > -1) {   //// this will return an error if the option already exists
             return 'this options already exists';   
        }
        
       this.setState((prevState) => ({ options: prevState.options.concat(option)} ));
     }
 

    componentDidMount() {
       try {
            
        const json = localStorage.getItem('options');
        const options = JSON.parse(json);


        if(options) {
            this.setState(() => ({ options }));
        }
      
        }catch (event) {
            //do nothing at all
       }
       
       
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.options.length !== this.state.options.length) {
           const json = JSON.stringify(this.state.options);
           localStorage.setItem('options', json);
          
        }
     
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    
    render() {
        const subtitle = 'Put your life in the hands of a computer';
        
    
        return (
            <div>
                <Header subtitle={subtitle} />
                
                <div className='container'>
                    <Action hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                    />
                   
                    <div className='widget'>
                        <Options options={this.state.options} 
                        handleDeleteOptions={this.handleDeleteOptions}  
                        handleDeleteOption={this.handleDeleteOption}
                        />
                        <AddOption handleAddOption={this.handleAddOption}/> 
                    </div>
                </div>
               
                <OptionModal 
                    selectedOption={this.state.selectedOption} 
                    handleClearSelectedOption={this.handleClearSelectedOption} //  send the selectedOption to the selectedOption component
                />
            </div> 
        );
    }
}










export default IndecisionApp;

