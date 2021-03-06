import React from 'react';

class AddOption extends React.Component {
    state = {
        error: undefined
    };
    
    handleAddOption = (event)  => {
       event.preventDefault();

       const option = event.target.elements.option.value.trim();  //// pra pegar a opção
       const error = this.props.handleAddOption(option);

       this.setState(() => ({ error: error } ));

       if(!error) {  ////if there was no error then clear the input
            event.target.elements.option.value = '';
       }
    }
    
    render() {
        return (
            <div>
                {this.state.error && <p className='add-option-error' >{this.state.error}</p>}
             <form className='add-option' onSubmit={this.handleAddOption}>
                 <input className='add-option__input' type='text' name='option'></input>
                 <button className='button' >Add options</button>
             </form>
            </div>
        );
    }
}

export default AddOption;